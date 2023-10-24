import movixLogo from "../assets/movix-logo.svg";

const Header = () => {
    return <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <img src={movixLogo} alt="logo"/>
    </div>
};

export default Header;