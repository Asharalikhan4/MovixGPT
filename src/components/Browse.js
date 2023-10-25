import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {

    const data = useNowPlayingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondryContainer />
        </div>
    )
};

export default Browse;