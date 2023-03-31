import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const DeleteProduct = () => {
    const { itemArticle } = useParams();
      //Delete Modell
      const deleteModelHandler = (event) => {
        event.preventDefault();
        const requestOptions =  {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json'}
        };
        fetch(`http://localhost:9090/items/delete/${itemArticle}`, requestOptions)
          .then((response) => response.json())
          .then((data) => console.log(data))
        
      }
   
    return (
        <div className='flex flex-col items-center mt-32'>
        <h1 className='text-5xl'>Delete Model</h1> 
        <p className='mt-8 text-xl'>Are you sure to delete this Model?</p>
        <p>This Process cannot be undone</p>
        <div className='inline-flex'>
        <a href={`/products/${itemArticle}`}>
        <button className='bg-emerald-600 mt-12 w-28 h-12  uppercase text-white m-4'>Cancel</button>           
        </a>
        <button className='bg-red-600 mt-12 w-28 h-12  uppercase text-white m-4' onClick={deleteModelHandler}>Delete</button>

        </div>
     
       </div>
    );
}

export default DeleteProduct;
