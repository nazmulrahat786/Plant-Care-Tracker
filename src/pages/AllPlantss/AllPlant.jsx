import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import AllArtPlantItem from "../AllArtPlantItem/AllArtPlantItem";

const AllArtPlantItems = () => {
    const allItems = useLoaderData();
    const [allItemsData, setAllItemsData] = useState([]);
    const [loading2, setLoading2] = useState(true);
    console.log(allItems);
    useEffect(() => {
        if(allItems){
            setAllItemsData(allItems);
            setLoading2(false);
            // console.log(allItems);
        }
    }, [allItems])

    if(loading2){
        return <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="py-16 max-w-6xl mx-auto">
                <div className="w-[90%] mx-auto">
                    <div className="overflow-x-auto border">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-base md:text-lg font-semibold">
                                    <th>Subcategory</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allItemsData.map(items => <AllArtPlantItem
                                    key={items._id}
                                    items={items}
                                    ></AllArtPlantItem>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllArtPlantItems;