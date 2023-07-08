import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import OurCompany from "../OurCompany/OurCompany";
import OurGoals from "../OurGoals/OurGoals";
import OurProducts from "../OurProducts/OurProducts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <OurCompany></OurCompany>
            <OurProducts></OurProducts>
            <OurGoals></OurGoals>
        </div>
    );
};

export default Home;