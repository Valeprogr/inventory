import React from 'react';

const NavBar = () => {

    return (
        <>
            <nav className='w-screen bg-white border border-b-gray-100 p-6 '>
                <div className='flex justify-between'>
                    <div>
                       <h1>
                        <a href='/' className='font-bold uppercase '>Inventory</a>
                    </h1> 
                    </div>
                    
                    <div className=''>
                    <ul className='inline md:inline-flex'>
                        <li><a href='/' className="px-4 py-2 font-semibold border-transparent  active:text-purple-600">Home</a></li>
                        <li><a href='/about' className="px-4 py-2 font-semibold border-transparent  active:text-purple-600">About</a></li>
                        <li><a href='/products' className="px-4 py-2 font-semibold border-transparent  active:text-purple-600">Products</a></li>
                        <li><a href='/contact' className="px-4 py-2 font-semibold border-transparent  active:text-purple-600">Contact</a></li> 
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
