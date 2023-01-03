import React,{ useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const UpdateProduct=()=>{
    const [name, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params=useParams();

    useEffect(()=>{
        getProductDetails();
    },[])
    const getProductDetails =async ()=>{
        console.warn(params);
        let result=await fetch(`http://localhost:5000/product/${params.id}`);
        result=await result.json();
        console.warn(result);
        setProductName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company); 
    };
    const updateproduct=async ()=>{
        console.warn(name,price,category,company);
    }
    return(
        <div className='product'>
            <h1>Update product</h1>
            <input className='inputBox' type="text" placeholder='Enter a Product name' onChange={e => setProductName(e.target.value)} value={name}/>
            <input className='inputBox' type="text" placeholder='Enter a Product Price' onChange={e => setPrice(e.target.value)} value={price}/>
            <input className='inputBox' type="text" placeholder='Enter a Product Category' onChange={e => setCategory(e.target.value)} value={category} />
            <input className='inputBox' type="text" placeholder='Enter a Product Company Name' onChange={e => setCompany(e.target.value)} value={company} />
            <button onClick={updateproduct} className='appButton' type='button'>update</button>
        </div>
    )
};


export default UpdateProduct;