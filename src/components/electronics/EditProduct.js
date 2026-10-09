import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";


function EditProduct() {
    const { product } = useParams();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    let navigate = useNavigate()

    useEffect(() => {
        axios.get('https://worksheet-catalogue.mashupstack.com/products/' + product).then(response => {
            setName(response.data.name);
            setPrice(response.data.price)
            setCategory(response.data.category);
            setQuantity(response.data.quantity);

        })
    }, [product]);

    function updateProduct() {
        axios.put('https://worksheet-catalogue.mashupstack.com/products/' + product, {
            name: name,
            price: price,
            category: category,
            quantity: quantity
        }).then(response => {
            alert(response.data.message)
            navigate('/electronics/list');
        })
    }



    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <h1 className="text-center">Edit Post</h1>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) => { setName(event.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Price:</label>
                            <textarea
                                className="form-control"
                                value={price}
                                onChange={(event) => { setPrice(event.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <textarea
                                className="form-control"
                                value={category}
                                onChange={(event) => { setCategory(event.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Quantity:</label>
                            <textarea
                                className="form-control"
                                value={quantity}
                                onChange={(event) => { setQuantity(event.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary float-right" onClick={updateProduct}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default EditProduct;