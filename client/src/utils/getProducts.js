export const getProducts = async (setProducts) => {
    
    try {
        const fetchProducts = await fetch(`${process.env.REACT_APP_API_BASE_URL}shoes/allShoes`, {method: 'GET'});
        if (!fetchProducts.ok) throw Error(
            `Getting products  failed with a status of ${fetchProducts.status}`
        )
        return setProducts(await fetchProducts.json());
     }catch(error) {
        console.log(error)
     }
    }
