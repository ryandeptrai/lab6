import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header({ cartItems = [] }) {
    const navigate = useNavigate()
    console.log('cartItems:', cartItems);
    return (
        <section className='flex justify-between items-center p-4 bg-gray-100 shadow-md'>
            <button onClick={() => {navigate('/Products')}} className='text-2x1 font-bold text-gray-800'>my store</button>
            <Link to='/cart' className='text-lg text-blue-600 hover:text-blue-800'>
                Gio hang {cartItems.length}
            </Link>
        </section>
    );
}
