import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";


function Viewproduct() {

    const { product } = useParams();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    // let navigate = useNavigate()

    useEffect(() => {
        axios.get('https://worksheet-catalogue.mashupstack.com/products/' + product).then(response => {
            setName(response.data.name);
            setPrice(response.data.price)
            setCategory(response.data.category);
            setQuantity(response.data.quantity);

        })
    }, [product]);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <h1 className="text-center">Edit Post</h1>
                        <div className="form-group">
                            <label>Name:</label>
                            {name}

                        </div>
                        <div className="form-group">
                            <label>Price:</label>
                            {price}

                        </div>
                        <div className="form-group">
                            <label>Category : </label>
                            {category}
                        </div>
                        <div className="form-group">
                            <label>Quantity:</label>
                            {quantity}
                        </div>
                        <Link
                            to={"/electronics/list"}
                            className="btn btn-primary float-right"
                        >
                            Back to List
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    );


}
export default Viewproduct;