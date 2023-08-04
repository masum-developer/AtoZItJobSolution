import DreamJob from "../DreamJob/DreamJob";
import SearchJob from "../SearchJob/SearchJob";
import Slider from "../Slider/Slider";
import TopCompany from "../TopCompany/TopCompany";

const Home = () => {
    return (
        <div>
            <SearchJob></SearchJob>
            <Slider></Slider>
            <TopCompany></TopCompany>
            <DreamJob></DreamJob>
            
        </div>
    );
};

export default Home;