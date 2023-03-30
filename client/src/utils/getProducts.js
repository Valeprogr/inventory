export const getProducts = async (setProducts) => {
    
    try {
        const fetchProducts = await fetch("http://localhost:9090/items/get", {method: 'GET'});
        if (!fetchProducts.ok) throw Error(
            `Getting products  failed with a status of ${fetchProducts.status}`
        )
        return setProducts(await fetchProducts.json());
     }catch(error) {
        console.log(error)
     }
    }
