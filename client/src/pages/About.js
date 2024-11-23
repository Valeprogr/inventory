import React from 'react';
import Card from '../components/Card';

const About = () => {
    return (
        <div className='bg-background text-primary h-auto px-32 flex flex-col'>
        <div className='flex flex-col items-center'>
          <p className='text-5xl pt-12'>About Us</p>
          <p className='text-l text-left mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          
        </div>
        <div className='bg-white shadow-md grid grid-cols-3 gap-10 lg:mt-14 md:mt-24 mb-24 border p-12 text-primary rounded-md'>
          <div className='col-span-3 flex justify-center'>
            <p className='text-xl uppercase font-bold'>Meet the Team</p> 
            
          </div>
            <Card props="Elena" />
            <Card props="Adriana" />
            <Card props="Valeria" />
        
        </div>
        </div>
    );
}

export default About;
