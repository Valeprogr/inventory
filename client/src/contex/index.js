import { useState, useEffect, createContext, useContext } from "react";
import { getProducts } from "../utils/getProducts";

export const AppContext = createContext();
//Cosi posso Chiamarla piu Facilmente
export const useAppContex = () => useContext(AppContext);


export const AppProvider = ({ children }) => {
    const [products, setProducts] = useState('');
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(false)
        getProducts(setProducts);
        
        
    }, []);
    
    return (
        <AppContext.Provider
            value={{products,setProducts,show,setShow}}>
            {children}
        </AppContext.Provider>
    )
}

