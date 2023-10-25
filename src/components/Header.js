import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch(() => {
                navigate("/error");
            });
    };

    useEffect(() => {
        // we want it to run only once so dependency array is empty.
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid, email, displayName, photoURL}));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Unsubscribing the event when the component unmount
        return () => unsubscribe();
    }, []);

    return <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img className="w-44" src={LOGO} alt="logo" />
        {user && (<div className="flex p-2">
            <img className="w-12 h-12" src={user?.photoURL} alt="avatar" />
            <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
        </div>)}
    </div>
};

export default Header;