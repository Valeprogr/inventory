import React from 'react';

const TableProducts = () => {
    return (
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
    <tr>
      <td className="px-6 py-4">Air Force</td>
      <td className="px-6 py-4">123</td>
      <td className="px-6 py-4">white</td>
      <td className='px-6 py-4'> 3</td>
    </tr>
  </tbody>
</table>
        </div>
    );
}

export default TableProducts;
