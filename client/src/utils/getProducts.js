export const getProducts = async (setProducts) => {
    
    try {
        const fetchProducts = await fetch("https://inventory-beige-ten.vercel.app/items/get", {method: 'GET'});
        if (!fetchProducts.ok) throw Error(
            `Getting products  failed with a status of ${fetchProducts.status}`
        )
        return setProducts(await fetchProducts.json());
     }catch(error) {
        console.log(error)
     }
    }
