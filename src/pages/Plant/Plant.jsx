import { FaStar } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const PlantItem = ({ item }) => {
    const { _id, itemName, description, price, rating, stock, photoURL } = item;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="w-full h-[242px] object-cover" src={photoURL} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex gap-8">
                    <h1><span className="font-bold text-base">Stock:</span> {stock}</h1>
                    <h1 className="flex items-center gap-2 text-base font-bold"><span className="text-cyan-700 font-bold text-xl"><FaStar /></span> {rating}</h1>
                </div>
                <h2 className="card-title font-bold mt-2">{itemName}</h2>
                {/* <p>{description}</p> */}
                {
                            description.length > 150 
                            ? <p>{description.slice(1, 150)} <span className="text-red-500">See more .....</span></p>
                            : <p>{description}</p>   
                        }

                <div className="flex justify-between mt-4">
                    <h3 className="flex items-center gap-2 text-2xl font-bold text-red-500"><span className="text-3xl"><BiSolidDollarCircle /></span> {price}</h3>
                    <Link to={`/PlantViewDetails/${_id}`}>
                        <div className="card-actions">
                            <button className="btn bg-cyan-700 text-white">View Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlantItem;

PlantItem.propTypes = {
    item: PropTypes.object.isRequired
}