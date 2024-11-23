import React from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const DeleteProduct = () => {
  const { itemArticle } = useParams();
  const navigate = useNavigate();
    //Toast Message
    const showToastMessage = () => {
      toast.success('The model was successfully deleted!', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  
      //Delete Modell
      const deleteModelHandler = (event) => {
        event.preventDefault();
        const requestOptions =  {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json'}
        };
        fetch(`${process.env.API_BASE_URL}shoes/deleteModel/${itemArticle}`, requestOptions)
          .then((response) => response.json())
          .then((data) => console.log(data))
        showToastMessage();
        setTimeout(() => {
          navigate(-2);
        },2000)
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
        <ToastContainer />
       </div>
    );
}

export default DeleteProduct;
