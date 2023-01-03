import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/');
    };
    return (
        <div>
            <img className='logo' alt="logo" 
            src="https://images-platform.99static.com//Asr-N_iQyK9YWCDHZ6E8kwZxejA=/91x65:904x878/fit-in/500x500/99designs-contests-attachments/117/117626/attachment_117626303" />
            {auth ? <ul className='nav-ul'>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update/'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link onClick={logout} to='/signup'>Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li><Link to='/signup'>signUp</Link></li>
                    <li><Link to='/login'>login</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav;

