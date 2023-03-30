import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const ProductInfo = () => {
  const { itemArticle } = useParams();
 
  const [product, setProduct] = useState(null);
  console.log(product)

  useEffect(() => {
    fetch(`http://localhost:9090/items/get/${itemArticle}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error)=>console.log(`Getting products  failed with a status of ${error}`))
},[])
  
  return (
    <>
      {product !== null ?
        <div className='bg-gray-100'>
        <h1>Products info</h1>
          {/* <p>{product.item[0].brand}</p> */}
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
