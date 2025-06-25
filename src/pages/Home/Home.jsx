import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Slider";
import PlantItems from "../PlantItems/PlantItems";
import ArtAndPlant from "../ArtAndPlant/ArtAndPlant";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Traditional from "../Traditional/Traditional";
import ShowCase from "../ShowCase/ShowCase";
// import { useLoaderData } from "react-router-dom";

const Home = () => {
    const { user } = useContext(AuthContext);
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://ceramics-and-pottery-server.vercel.app/myItems/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyItems(data);
                    console.log(data);
                })
        }
    }, [user]);

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <PlantItems
                myItems={myItems}
            ></PlantItems>
            <ArtAndPlant></ArtAndPlant>
            <ShowCase></ShowCase>
            <Traditional></Traditional>
            <Footer></Footer>
        </div>
    );
};

export default Home;