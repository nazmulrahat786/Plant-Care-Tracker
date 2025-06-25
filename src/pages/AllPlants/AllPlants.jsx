import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllArtPlantItem = ({ items }) => {
    const { _id, itemName, subcategory, rating, processTime, stock, photoURL } = items;


    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{subcategory}</div>
                        <div className="text-sm opacity-50">Processing: {processTime} days</div>
                    </div>
                </div>
            </td>
            <td>
                <p className="font-bold md:text-lg">{itemName}</p>
                <br />
                <p className="bg-gray-600 py-1 px-2 rounded-lg w-[90px] text-white font-semibold">Rating: {rating}</p>
            </td>
            <td className="text-orange-600 font-semibold">{stock}</td>
            <th>
                <Link to={`/PlantViewDetails/${_id}`}>
                    <button className="btn btn-ghost btn-md bg-teal-600 text-white lg:text-base">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllArtPlantItem;

AllArtPlantItem.propTypes = {
    items: PropTypes.object.isRequired
}