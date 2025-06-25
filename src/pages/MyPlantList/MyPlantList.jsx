import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import MyArtPlantItem from "../MyArtPlantItem/MyArtPlantItem";

const MyArtPlantList = () => {
    const { user } = useContext(AuthContext);
    const [myItems, setMyItems] = useState([]);
    const [originalItems, setOriginalItems] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://ceramics-and-pottery-server.vercel.app/myItems/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyItems(data);
                    setOriginalItems(data);
                    console.log(data);
                })
        }
    }, [user]);

    const sortByCustomization = trigger => {
        if (trigger === "All") {
            setMyItems(originalItems);
        } else {
            const filtered = originalItems.filter(item => item.customization === trigger);
            setMyItems(filtered);
        }
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="py-10">
                <div className="flex justify-center mb-12">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 bg-teal-600 text-white font-semibold">Sort by Customization</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow text-lg font-bold bg-base-100 rounded-box w-52">
                            <li onClick={() => sortByCustomization('All')}><a>All</a></li>
                            <li onClick={() => sortByCustomization('Yes')}><a>Yes</a></li>
                            <li onClick={() => sortByCustomization('No')}><a>No</a></li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-4">
                    {
                        myItems.map(item => <MyArtPlantItem
                            key={item._id}
                            item={item}
                            myItems={myItems}
                            setMyItems={setMyItems}
                        ></MyArtPlantItem>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyArtPlantList;