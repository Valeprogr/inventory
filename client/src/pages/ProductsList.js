import React from 'react';
import TableProducts from '../components/TableProducts';

const ProductsList = () => {
    return (
        <div className='flex flex-col h-screen  bg-background pt-12 items-center  text-primary'>
        <p className='text-4xl'>Your Items</p>
        <div className='grid grid-cols-9 gap-10 mt-12 '>
          <div className='col-span-2 border border-gray-200 rounded'>
            <table className='table-auto w-full'>
              <thead className='bg-gray-200 uppercase rounded text-left'>
                <tr>
                  <th className='px-6 py-3' >Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-6 py-4'>Sneakers</td>
                </tr>
                <tr>
                  <td className='px-6 py-4'>Boots</td>
                </tr>
                <tr>
                  <td className='px-6 py-4'>High heels</td>
                </tr>
                <tr>
                  <td className='px-6 py-4'>Flats</td>
                </tr>
                <tr>
                  <td className='px-6 py-4'>Chealsea</td>
                </tr>
                <tr>
                  <td className='px-6 py-4'>Derby</td>
                </tr>
                <tr>
                  <td className='px-6 py-4'>Oxford</td>
                </tr>
                <tr>
                  <td className='px-6 py-4'>Loafers</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-span-7'>
          <TableProducts />
          </div>
        </div>
        
        </div>
    );
}

export default ProductsList;
