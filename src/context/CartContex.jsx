import  React, {createContext, useContext, useState} from 'react'

const contexto = createContext()
export const { Provider } = contexto

export const useContexCart = () =>{
    return useContext(contexto)
}
const CartContex = ({children}) => {

  let cartLocalStorage = JSON.parse(localStorage.getItem("cartLocal"))
 
    const [cart, setCart] = useState(
      cartLocalStorage ? cartLocalStorage :[])

    const [cartCount, setCartCount] = useState(0)

    localStorage.setItem("cartLocal",JSON.stringify(cart))
    
    const addToCart = (product,qty) =>{
    
      if (isInCart(product.id)){
        let new_pro =[...cart]
        let match = new_pro.find((p)=> p.id === product.id)
        match.qty += qty
        setCart(new_pro) 
        console.log("nuevo",cart)
       
      }else{
        const new_pro ={...product}
        new_pro.qty = qty
        setCart([...cart,new_pro]) 
        
      }
    
      setCartCount(cartCount + qty)
    }
      
    const isInCart = (id) => cart.some((p) => p.id === id)
    
    
     const deletById = (id) =>{
       let newCart = cart.filter((p) =>p.id !== id )
       setCart(newCart)
     }

     
     const allProducInCart =()=>{
       let totalInCart = 0
       cart.forEach((p) => (totalInCart += p.qty))
       return totalInCart
     }
    

     const totalPrice = () =>{
       let total = 0
       cart.forEach((p) =>(total += p.price * p.qty))
       return total
     }
     
     const deletAllProduct =()=>{
       setCart([])
     }
    const valueToContext ={
        cart,
        addToCart,
        deletById,
        allProducInCart,
        deletAllProduct,
        totalPrice
    }



    return (
        <Provider value={valueToContext}>
            {children}
        </Provider>
    )
}

export default CartContex
