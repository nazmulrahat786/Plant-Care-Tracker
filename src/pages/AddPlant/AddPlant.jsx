import { useContext } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Swal from 'sweetalert2'
import { AuthContext } from "../../provider/AuthProvider";

const AddPlantItems = () => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>
    }

    const handleAddPlantItems = e => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.itemName.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processTime = form.processTime.value;
        const stock = form.stock.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const photoURL = form.photoURL.value;
        const newPlant = { itemName, subcategory, description, price, rating, customization, processTime, stock, userName, userEmail, photoURL };

        console.log(newPlant);

        // sending to database
        fetch('https://ceramics-and-pottery-server.vercel.app/addPlantItems', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newPlant)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Plant item added to the database successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                  .then(() => {
                    form.reset();
                  })
            }
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#f0bc8c] py-12 md:py-20">

                <div className="w-[90%] md:w-[85%] lg:w-[70%] mx-auto shadow-2xl bg-base-100 rounded-2xl">
                    <h2 className="text-4xl font-bold text-center pt-12">Add Plant Items</h2>
                    <form onSubmit={handleAddPlantItems} className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Item Name</span>
                                </label>
                                <input type="text" name="itemName" placeholder="Enter item's name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Subcategory Name</span>
                                </label>
                                <input type="text" name="subcategory" placeholder="Enter subcategory name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Short Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Enter short description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Enter price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Rating</span>
                                </label>
                                <input type="text" name="rating" placeholder="Enter rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Customization</span>
                                </label>
                                <input type="text" name="customization" placeholder="Enter Yes/No" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Processing Time</span>
                                </label>
                                <input type="text" name="processTime" placeholder="Enter only day number like 4, 5, 7 ..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Stock Status</span>
                                </label>
                                <input type="text" name="stock" placeholder="Enter In stock/Made to order" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">User Name</span>
                                </label>
                                <input type="text" name="userName" placeholder="Enter user name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">User Email</span>
                                </label>
                                <input type="email" name="userEmail" defaultValue={user?.email} className="input input-bordered" readOnly></input>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Enter only photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-cyan-800 text-white text-lg">Add</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddPlantItems;