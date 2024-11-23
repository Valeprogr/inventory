/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useAppContex } from '../contex';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddNewModel = () => {
  const { products } = useAppContex();
  const [selectProduct, setSelectProduct] = useState([]);
  const navigate = useNavigate();


  //Form Data
  const [form, setForm] = useState({
    name: '',
    article: '',
    brand: '',
    category: '',
    gender: '',
    color: '',
    s36: '',
    s37: '',
    s38: '',
    s39: '',
    s40: '',
    s41: '',
    s42: '',
    s43: '',
    s44: '',
    s45: ''

  });
  //Toast Message
  const showToastMessage = (message, type) => {
    if (type === "success") {
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER
      });
    } else if (type === "error") {
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }
  //Save new Product
  const saveProductHandler = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    };

    try {
      const response = await fetch(`${process.env.API_BASE_URL}shoes/addModel`, requestOptions);

      if (response.status === 201) { // Controlla se lo status è 201
        const data = await response.json();
        console.log("Response Data:", data);

        // Mostra il toaster solo se la risposta è 201
        showToastMessage('The model was successfully inserted!', "success");

        // Resetta il form
        setForm({
          name: '',
          article: '',
          brand: '',
          category: '',
          gender: '',
          color: '',
          s36: '',
          s37: '',
          s38: '',
          s39: '',
          s40: '',
          s41: '',
          s42: '',
          s43: '',
          s44: '',
          s45: ''
        });

        //Opzionale: Navigazione o ulteriori azioni
        setTimeout(() => {
          navigate(-1);
        }, 4000);
      } else {
        console.error("Failed to save product. Status:", response.status);
        showToastMessage("Failed to save product. Error" + response.status, "error")
      }
    } catch (error) {
      console.error("Error during saveProductHandler:", error);
      showToastMessage("Error during the item creation", "error")
    }
  };

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  //console.log(form)

  return (

    <>
      <div className="justify-center items-center flex ">
        <div className=" w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="rounded-lg  flex flex-col w-full bg-white">
            {/*header*/}
            <div className="flex items-start justify-between mt-12 p-5 border-b border-solid  rounded-t">
              <h3 className="text-3xl font-semibold">
                Add a new Product
              </h3>
            </div>
            {/*body*/}
            <div className="p-6 flex-auto grid grid-cols-4 gap-5">
              <div className='col-span-2 bg-slate-100 p-8 rounded'>
                <p className='text-2xl font-bold'>Product Details</p>
                <p className='text-l'>Please fill out all the fields</p>
              </div>
              <div className='col-span-2  p-8 rounded'>

                <form className="my-4 text-slate-500 leading-relaxed ">
                  <label className='font-bold' htmlFor="name">Name :</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="name" value={form.name} onChange={changeHandler} required></input>
                  <label className='font-bold'>Brand :</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="brand" value={form.brand} onChange={changeHandler} required></input>
                  <label className='font-bold'>Article :</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="article" value={form.article} onChange={changeHandler} required></input>
                  <label className='font-bold'>Category :</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="category" value={form.category} onChange={changeHandler} required></input>
                  <label className='font-bold'>Gender :</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="gender" value={form.gender} onChange={changeHandler} required></input>
                  <label className='font-bold'>Color :</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="color" value={form.color} onChange={changeHandler} required></input>
                  <label className='font-bold'>Size 36:</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="s36" value={form.s36} onChange={changeHandler} required></input>
                  <label className='font-bold'>Size 37:</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="s37" value={form.s37} onChange={changeHandler}></input>
                  <label className='font-bold'>Size 38:</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="s38" value={form.s38} onChange={changeHandler}></input>
                  <label className='font-bold'>Size 39:</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="s39" value={form.s39} onChange={changeHandler}></input>
                  <label className='font-bold'>Size 40:</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="s40" value={form.s40} onChange={changeHandler}></input>
                  <label className='font-bold'>Size 41:</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="s41" value={form.s41} onChange={changeHandler}></input>
                  <label className='font-bold'>Size 42:</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="s42" value={form.s42} onChange={changeHandler}></input>
                  <label className='font-bold'>Size 43:</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="s43" value={form.s43} onChange={changeHandler}></input>
                  <label className='font-bold'>Size 44:</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="s44" value={form.s44} onChange={changeHandler}></input>
                  <label className='font-bold'>Size 45:</label>
                  <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="s45" value={form.s45} onChange={changeHandler}></input>
                </form>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <a href='/products'> <button
                className="text-red-500 background-transparent border border-red-500 rounded font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Close
              </button></a>
              <a href='/products'>
                <button
                  className="bg-emerald-600 text-white active:text-primary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={saveProductHandler}
                >
                  Save
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AddNewModel;
