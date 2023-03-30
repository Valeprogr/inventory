import React,{useState} from 'react';
import TableProducts from '../components/TableProducts';
import { useAppContex } from '../contex';

const ProductsList = () => {
  const { products } = useAppContex();
  const [selectProduct, setSelectProduct] = useState([])
  const selectCategoryData = (key) => {
    let result =  products.items.filter((ele)=>((ele.category === key)))
    setSelectProduct(result)
  }
  
 
    return (
        <div className='flex flex-col h-screen  bg-background pt-12 items-center  text-primary'>
        <p className='text-4xl'>Your Items</p>
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
