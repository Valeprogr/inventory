import React from 'react';

const TableProducts = ({ selectProduct }) => {
  
    return (
      <>
      <tr className='cursor-pointer border-b border-gray-200'>
      <td className="px-6 py-4">{selectProduct.name }</td>
          <td className="px-6 py-4">{selectProduct.article }</td>
      <td className="px-6 py-4">{selectProduct.color}</td>
          <td className='px-6 py-4'>{selectProduct.quantity }</td>
    </tr> 
      </>
  

    );
}

export default TableProducts;
