import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Createelectronics() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    var navigate = useNavigate()

    function addBook() {
        axios.post('https://worksheet-catalogue.mashupstack.com/products', {
            name: name,
            price: price,
            category: category,
            quantity: quantity
        }).then(response => {
            navigate('/electronics/list');
        })
    }


    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <h1 className="text-center">Create Product</h1>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) => { setName(event.target.value) }}
                            />
                            <label>Price:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={price}
                                onChange={(event) => { setPrice(event.target.value) }}
                            />
                            <label>Category:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={category}
                                onChange={(event) => { setCategory(event.target.value) }}
                            />
                            <label>Quantity:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={quantity}
                                onChange={(event) => { setQuantity(event.target.value) }}
                            />
                            <div className="form-group">
                                <button className="btn btn-primary float-right" onClick={addBook}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );

}

export default Createelectronics;