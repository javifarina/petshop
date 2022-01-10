import  React, {createContext, useContext, useState} from 'react'

const contexto = createContext()
export const { Provider } = contexto

export const useContexCart = () =>{
    return useContext(contexto)
}
const CartContex = ({children}) => {
 
    const [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)
    /**
     * Funcion que Agrega productos al carrito de Compras
     */
    const addToCart = (product,qty) =>{
    
      if (isInCart(product.id)){
        let new_pro =[...cart]
        let match = new_pro.find((p)=> p.id === product.id)
        match.qty += qty
        setCart(new_pro) 
       
      }else{
        const new_pro ={...product}
        new_pro.qty = qty
        setCart([...cart,new_pro]) 
        
      }
    
      setCartCount(cartCount + qty)
    }
      /**
       * 
       * Funcion que busca si existe elemento para actualizar cantidad
       */
    const isInCart = (id) => cart.some((p) => p.id === id)
    
     /**
      * Funcion que elimina elementos del carriro de compras
      */
     const deletById = (id) =>{
       let newCart = cart.filter((p) =>p.id !== id )
       setCart(newCart)
     }

     /**
      * Funcion Cuenta los productos del carrito 
      */
     const allProducInCart =()=>{
       let totalInCart = 0
       cart.forEach((p) => (totalInCart += p.qty))
       return totalInCart
     }
     /**
      * Funcion elimina todos los elementos del carrito
      */
     const deletAllProduct =()=>{
       setCart([])
     }
    const valueToContext ={
        cart,
        addToCart,
        deletById,
        allProducInCart,
        deletAllProduct
    }



    return (
        <Provider value={valueToContext}>
            {children}
        </Provider>
    )
}

export default CartContex
