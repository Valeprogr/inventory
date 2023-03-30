import React from 'react';
import Card from '../components/Card';

const About = () => {
    return (
        <div className='bg-primary text-white h-auto px-32 flex flex-col'>
        <div className='flex flex-col items-center'>
          <p className='text-6xl m-8'>About Us</p>
          <p className='text-xl w-2/3 text-center'>Founded by a group of passionate entrepreneur,
            our company has grow from a small startup into a leading
            provider of innovative solutions for businesses across a
            wide range of industries.</p>
          
        </div>
        <div className='bg-white grid grid-cols-3 gap-10 lg:mt-32 md:mt-24 mb-24 border p-12 text-primary'>
          <div className='col-span-3 flex justify-center'>
            <p className='text-4xl'>Meet the Team</p> 
            
          </div>
            <Card props="Elena" />
            <Card props="Adriana" />
            <Card props="Valeria" />
        
        </div>
        </div>
    );
}

export default About;
