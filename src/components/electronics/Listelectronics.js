import Navbar from "../Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import Postlistitem from "../Postlistitem";


function Listelectronics() {


    const [name, setName] = useState([])
    const [search, setSearch] = useState('')

    function fetchPosts() {
        axios.get('https://worksheet-catalogue.mashupstack.com/products').then(response => {
            setName(response.data)
        })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const filteredProducts = name.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Search products by name..."
                                value={search}
                                onChange={event => setSearch(event.target.value)}
                            />

                            {filteredProducts.map(product => (
                                <Postlistitem
                                    key={product.id}
                                    product={product}
                                    refresh={fetchPosts}
                                />
                            ))}



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Listelectronics;