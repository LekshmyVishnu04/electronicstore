import axios from "axios";
import { Link } from "react-router-dom";


function Postlistitem(props) {

    function deleteProduct() {
        axios.delete(
            "https://worksheet-catalogue.mashupstack.com/products/" + props.product.id
        )
            .then(response => {
                alert(response.data.message || "Product deleted successfully");
                props.refresh();
            })
            .catch(error => {
                console.log("Delete error:", error.response?.data);
                alert(
                    error.response?.data?.message ||
                    "Unable to delete book. Please check the console."
                );
            });
    }


    return (
        <div className="card">
            <div className="card-body">
                <p>
                    {props.product.name} | {props.product.price} |
                    {props.product.category} | {props.product.quantity}

                    <button
                        className="btn btn-primary float-right"
                        onClick={deleteProduct}
                    >
                        Delete
                    </button>

                    <Link
                        to={"/electronics/" + props.product.id + "/edit"}
                        className="btn btn-primary float-right"
                    >
                        Edit
                    </Link>
                    <Link
                        to={"/electronics/" + props.product.id + "/view"}
                        className="btn btn-primary float-right"
                    >
                        View
                    </Link>
                </p>
            </div>
        </div>
    );

}

export default Postlistitem;