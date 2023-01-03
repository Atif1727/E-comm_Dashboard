import React,{ useState} from 'react';


const AddProduct=()=>{
    const [name, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const addProduct=async ()=>{
        console.warn(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/add-product', {
            method: 'POST',
            body: JSON.stringify({name,price,category,company,userId}),
            headers: { 'Content-Type': 'application/json' },
        });
        result = await result.json();
        console.warn(result);
    }
    return(
        <div className='product'>
            <h1>AddProduct</h1>
            <input className='inputBox' type="text" placeholder='Enter a Product name' onChange={e => setProductName(e.target.value)} value={name}/>
            <input className='inputBox' type="text" placeholder='Enter a Product Price' onChange={e => setPrice(e.target.value)} value={price}/>
            <input className='inputBox' type="text" placeholder='Enter a Product Category' onChange={e => setCategory(e.target.value)} value={category} />
            <input className='inputBox' type="text" placeholder='Enter a Product Company Name' onChange={e => setCompany(e.target.value)} value={company} />
            <button onClick={addProduct} className='appButton' type='button'>AddProduct</button>
        </div>
    )
};

export default AddProduct;