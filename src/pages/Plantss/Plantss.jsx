 import { useContext } from "react";
import PlantItem from "../PlantItem/PlantItem";
import PropTypes from "prop-types";c
import { AuthContext } from "../../provider/AuthProvider";
  
const PlantItems = ({ myItems }) => {   
vv   
    if (!user) {      
        return (    
            <div> 
                <p className="text-lg text-center">Loading Spinner going on until login user. So, please login !</p>
                <p className="text-center mt-12"><span className="  loading loading-spinner loading-lg"></span></p>
            </div>
        )
    }

    return (
        <div className="w-[90%] md:max-w-6xl mx-auto my-16">
            <h2 className="text-4xl font-bold text-center my-8">Plant Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    myItems.slice(0, 6).map(item => <PlantItem
                        key={item._id}
                        item={item}
                    ></PlantItem>)
                }
            </div>
        </div>
    );
};

export default PlantItems;

PlantItems.propTypes = {
    myItems: PropTypes.array.isRequired
}
