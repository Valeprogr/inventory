import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
//import Modal from './DeleteProduct';


const ProductInfo = () => {
  const { itemArticle } = useParams();
    //console.log(itemArticle)
   //console.log(product)
  const [product, setProduct] = useState(null);
  const [selectProduct, setSelectProduct] = useState({

  });
//console.log(selectProduct)

  const editSizeHandler = (event) => {
    if (event.key === "Enter") {
      const requestOptions =  {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selectProduct)
    };
    fetch(`https://inventory-beige-ten.vercel.app/shoes/editSizes/${itemArticle}`, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then(setSelectProduct({}))
    .then(setTimeout(()=> {window.location.reload(true)},1000) )  
    }

  }
 

  useEffect(() => {
    fetch(`https://inventory-beige-ten.vercel.app/shoes/shoesModel/${itemArticle}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error)=>console.log(`Getting products  failed with a status of ${error}`))
},[])
  
  return (
    <>
      {product  ?
        <div className='bg-background p-12'>
          <div className='flex mt-12 justify-between '>
          <h1 className='text-3xl'>Products info</h1>
            <a href={`/products/delete/${itemArticle}`}>
            <button className="ml-36 bg-red-600 text-white active:text-primary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button">Delete Model</button>
          </a>
       
          </div>
          <div className='flex mt-12'>
          <div>
          <img src="../images/shoes.jpeg" alt='shoes' className='w-48  h-48  object-cover'/>
            </div>
            <div className='ml-32 flex flex-col items-start justify-center'>
              <div className='inline-flex mb-3'>
                <p className='font-bold mr-2'>Brand:</p>
               <p>{product.item[0].brand}</p>  
              </div>
              <div className='inline-flex mb-3'>
                <p className='font-bold mr-2'>Art:</p>
               <p>{product.item[0].article}</p>  
              </div>
              <div className='inline-flex mb-3'>
                <p className='font-bold mr-2'>Name:</p>
               <p>{product.item[0].name}</p>  
              </div>
              <div className='inline-flex mb-3'>
                <p className='font-bold mr-2'>Color:</p>
               <p>{product.item[0].color}</p>  
              </div>
            </div>
          </div>
          <div className='mt-12 w-full'>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
          <div className='mt-5 '>
            <p className='text-2xl border py-3 pl-2'>Sizes:</p>
            <div className='bg-gray-50 grid grid-cols-10 col-span-10 h-12 w-auto items-center px-8  border-r border-l'>
              <p className='w-8 h-8 text-center'>36</p>
              <p className='w-8 h-8 text-center'>37</p>
              <p className='w-8 h-8 text-center'>38</p>
              <p className='w-8 h-8 text-center'>39</p>
              <p className='w-8 h-8 text-center'>40</p>
              <p className='w-8 h-8 text-center'>41</p>
              <p className='w-8 h-8 text-center'>42</p>
              <p className='w-8 h-8 text-center'>43</p>
              <p className='w-8 h-8 text-center'>44</p>
              <p className='w-8 h-8 text-center'>45</p>
            </div>
            <div className='border  grid grid-cols-10 col-span-10 h-12 w-auto items-center px-8'>
              <input type="text" placeholder={product.item[0].s36} className='w-8 h-8 text-center rounded-lg border placeholder-green-700 cursor-pointer' onChange={(e)=>setSelectProduct({"s36":e.target.value})} onKeyDown={editSizeHandler} ></input>
              <input type="text" placeholder={product.item[0].s37} className='w-8 h-8 text-center rounded-lg border placeholder-green-700 cursor-pointer' onChange={(e)=>setSelectProduct({"s37":e.target.value})} onKeyDown={editSizeHandler} ></input>
              <input type="text" placeholder={product.item[0].s38} className='w-8 h-8 text-center rounded-lg border placeholder-green-700 cursor-pointer' onChange={(e)=>setSelectProduct({"s38":e.target.value})} onKeyDown={editSizeHandler} ></input>
              <input type="text" placeholder={product.item[0].s39} className='w-8 h-8 text-center rounded-lg border placeholder-green-700 cursor-pointer' onChange={(e)=>setSelectProduct({"s39":e.target.value})} onKeyDown={editSizeHandler} ></input>
              <input type="text" placeholder={product.item[0].s40} className='w-8 h-8 text-center rounded-lg border placeholder-green-700 cursor-pointer' onChange={(e)=>setSelectProduct({"s40":e.target.value})} onKeyDown={editSizeHandler} ></input>
              <input type="text" placeholder={product.item[0].s41} className='w-8 h-8 text-center rounded-lg border placeholder-green-700 cursor-pointer' onChange={(e)=>setSelectProduct({"s41":e.target.value})} onKeyDown={editSizeHandler} ></input>
              <input type="text" placeholder={product.item[0].s42} className='w-8 h-8 text-center rounded-lg border placeholder-green-700 cursor-pointer' onChange={(e)=>setSelectProduct({"s42":e.target.value})} onKeyDown={editSizeHandler} ></input>
              <input type="text" placeholder={product.item[0].s43} className='w-8 h-8 text-center rounded-lg border placeholder-green-700 cursor-pointer' onChange={(e)=>setSelectProduct({"s43":e.target.value})} onKeyDown={editSizeHandler} ></input>
              <input type="text" placeholder={product.item[0].s44} className='w-8 h-8 text-center rounded-lg border placeholder-green-700 cursor-pointer' onChange={(e)=>setSelectProduct({"s44":e.target.value})} onKeyDown={editSizeHandler} ></input>
              <input type="text" placeholder={product.item[0].s45} className='w-8 h-8 text-center rounded-lg border placeholder-green-700 cursor-pointer' onChange={(e)=>setSelectProduct({"s45":e.target.value})} onKeyDown={editSizeHandler} ></input>

            </div>
            <p className='text-xs mt-3' ><em>*to add a size to the shoe model, click on the green button and write down how many sizes in that particular shoe size you have. </em></p>
          </div>
          </div>
        :
        <div>
          <p>Loading..</p>
        </div>
        }
        
    </>
    
        
        
        
    );
}

export default ProductInfo;
