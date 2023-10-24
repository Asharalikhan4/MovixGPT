import { signOut } from "firebase/auth";

import { auth } from "../utils/firebase";
import movixLogo from "../assets/movix-logo.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const navigate = useNavigate();

    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/")
            })
            .catch(() => {
                navigate("/error");
            });
    };

    return <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img src={movixLogo} alt="logo" />
        {user && (<div className="flex p-2">
            <img className="w-12 h-12" src={user?.photoURL} alt="avatar" />
            <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
        </div>)}
    </div>
};

export default Header;