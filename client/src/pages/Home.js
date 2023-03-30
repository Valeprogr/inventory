import React from 'react';

const Home = () => {
    return (
        <div className='flex h-screen'>
            <img className='w-screen md:object-cover' src="./images/1.png" alt='img' />
            <div className=' absolute flex flex-col  mt-8 py-24 pl-32 h-full w-2/5 text-primary'>
                <p className='text-6xl mb-10'>The easiest way to take inventory</p>
                <p className='text-xl'>Inventory is a program by design designed to take shoe inventories.
                    Perfect for both small businesses and large companies,
                    <br/>
                    <strong>What are you waiting for to try it out ?</strong></p>
                    <button className='mt-12 w-32 h-12 rounded text-white bg-secondary'>Try Now</button>
            </div>
        </div>
    );
}

export default Home;
