import React from 'react';

const TableProducts = ({ selectProduct }) => {
  
    return (
      <>
        
      <tr className='cursor-pointer border-b border-gray-200'>
      <td className="px-6 py-4"><a href={`/products/${selectProduct.article}`}>{selectProduct.name }</a></td>
          <td className="px-6 py-4"><a href={`/products/${selectProduct.article}`}>{selectProduct.article }</a></td>
      <td className="px-6 py-4"><a href={`/products/${selectProduct.article}`}>{selectProduct.color}</a></td>
          <td className='px-6 py-4'><a href={`/products/${selectProduct.article}`}>{selectProduct.quantity }</a></td>
          </tr>
             
      </>
  

    );
}

export default TableProducts;
