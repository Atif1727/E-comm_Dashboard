import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [Productlist, setProductList] = useState([]);

    useEffect(() => {
        getProductList();
    }, []);

    const getProductList = async () => {
        let result = await fetch('http://localhost:5000/product-list');
        result = await result.json();
        setProductList(result);
    };

    const deleteProduct =async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE'
        });
        result = await result.json();
        if(result){
            getProductList();
        }
    };

    return (
        <div className="productlist">
            <h1>ProductList</h1>
            <ul>
                <li>Sr.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            {
                Productlist.map((item, index) =>
                    <ul>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li><button onClick={() => deleteProduct(item._id)}>delete</button>
                        <Link to={'/update/'+item._id}>Update</Link>
                        </li>
                    </ul>
                )
            }
        </div>
    )
};

export default ProductList;