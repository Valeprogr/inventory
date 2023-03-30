import React,{useState} from 'react';
import TableProducts from '../components/TableProducts';
import { useAppContex } from '../contex';

const ProductsList = () => {
  const { products } = useAppContex();
  const [selectProduct, setSelectProduct] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  //Form Data
  const [form, setForm] = useState({
    name: '',
    article: '',
    brand: '',
    category:'',
    gender: '',
    color: '',
    size: '',
    quantity:'1'
  });
//Save new Product
  const saveProductHandler = (event) => {
    event.preventDefault();
    const requestOptions =  {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    };
    fetch("http://localhost:9090/items/create", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(setShowModal(false))
      .then(setForm({
        name: '',
        article: '',
        brand: '',
        category:'',
        gender: '',
        color: '',
        size: '',
        quantity:'1'
      }))
    
  }
  const changeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  //console.log(form)
  const selectCategoryData = (key) => {
    let result =  products.items.filter((ele)=>((ele.category === key)))
    setSelectProduct(result)
  }
  
 
    return (
      <div className='flex flex-col h-screen  bg-background pt-12 items-center  text-primary'>
        <div className='flex'>
          <p className='text-4xl mr-36'>Your Items</p>
          <button
        className="ml-36 bg-secondary text-white active:text-primary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add new
          </button>
          {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between mt-12 p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add a new Product
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={saveProductHandler}
                  >
                  </button>
                </div>
                {/*body*/}
                    <div className="relative p-6 flex-auto grid grid-cols-4 gap-5">
                      <div className='col-span-2 bg-slate-100 p-8 rounded'>
                        <p className='text-2xl font-bold'>Product Details</p>
                        <p className='text-l'>Please fill out all the fields</p>
                      </div>
                      <div className='col-span-2  p-8 rounded'>
                        
                      <form className="my-4 text-slate-500 leading-relaxed ">
                        <label className='font-bold' htmlFor="name">Name :</label>
                          <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="name" value={form.name}  onChange={changeHandler}></input>
                          <label className='font-bold'>Brand :</label>
                        <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="brand" value={form.brand} onChange={changeHandler}></input>
                        <label className='font-bold'>Article :</label>
                          <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="article" value={form.article} onChange={changeHandler}></input>
                          <label className='font-bold'>Category :</label>
                          <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="category" value={form.category} onChange={changeHandler}></input>
                          <label className='font-bold'>Gender :</label>
                          <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="gender" value={form.gender} onChange={changeHandler}></input>
                          <label className='font-bold'>Color :</label>
                          <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="color" value={form.color} onChange={changeHandler}></input>
                          <label className='font-bold'>Size :</label>
                          <div class="  mt-1 inline-block relative w-64">
                            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" onChange={changeHandler} name="size">
                              <option>Select the size</option>
                              <option name="size" value="36">36</option>
                              <option name="size" value="37">37</option>
                              <option name="size" value="38">38</option>
                              <option name="size" value="39">39</option>
                              <option name="size" value="40">40</option>
                              <option name="size" value="41">41</option>
                              <option name="size" value="42">42</option>
                              <option name="size" value="43">43</option>
                              <option name="size" value="44">44</option>
                              <option name="size" value="45">45</option>
                            </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                      </div>
                      </form>
                      </div>
                    </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent border border-red-500 rounded font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-600 text-white active:text-primary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={saveProductHandler}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          
        </div>
        
        <div className='grid grid-cols-9 gap-10 mt-12 '>
          <div className='col-span-2 border border-gray-200 rounded'>
            <table className='table-auto w-full'>
              <thead className='bg-gray-200 uppercase rounded text-left'>
                <tr>
                  <th className='px-6 py-3'>Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-6 py-4 cursor-pointer border-b border-gray-200' onClick={()=>selectCategoryData('sneakers')}>Sneakers</td>
                </tr>

                <tr>
                  <td className='px-6 py-4 cursor-pointer border-b border-gray-200' onClick={()=>selectCategoryData('boots')}>Boots</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 cursor-pointer border-b border-gray-200' onClick={()=>selectCategoryData('heels')}>High heels</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 cursor-pointer border-b border-gray-200' onClick={()=>selectCategoryData('flats')}>Flats</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 cursor-pointer border-b border-gray-200' onClick={()=>selectCategoryData('chealsea')}>Chealsea</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 cursor-pointer border-b border-gray-200' onClick={()=>selectCategoryData('derby')}>Derby</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 cursor-pointer border-b border-gray-200' onClick={()=>selectCategoryData('oxford')}>Oxford</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 cursor-pointer border-b border-gray-200' onClick={()=>selectCategoryData('loafers')}>Loafers</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 cursor-pointer border-b border-gray-200' onClick={()=>selectCategoryData('sandals')}>Sandals</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-span-7'>
          <div className='border border-gray-200 rounded'>
            <table className="table-auto w-full">
  <thead className='bg-gray-200 uppercase rounded text-left'>
    <tr>
      <th className='px-6 py-3'>Name</th>
      <th className='px-6 py-3'>Article</th>
      <th className='px-6 py-3'>Color</th>
      <th className='px-6 py-3'>Quantity</th>
    </tr>
  </thead>
                <tbody>
                  {
                    selectProduct ? 
                      selectProduct.map((ele) => (<TableProducts selectProduct={ele} />))
                      :
                    null
                  }
                </tbody>
              </table>
              </div>
        </div>
        </div>
        
        </div>
    );
}

export default ProductsList;
