
import { ProductList } from '../../data/data'

//Promesa que resuelve todos los productos de un Array (ProductList)
const getProductsByList= new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(ProductList)
    },2000)
})

//Funcion que Trae Todos los productos 
const getProductos = async (setState) =>{
    try{
        const result = await getProductsByList
        setState(result)
    }
    catch (error){
        console.log(error)
    }
}

//Funcion para Buscar un elemento en particular dentro del array
const getByID = (id, arr) => arr.find((b) => b.id ===id)

// Funcion que filtra por Id de Producto
const getItem = async(id, setState) =>{
    try{
        const result = await getProductsByList
        setState(getByID(id,result))

    }catch (error){
        console.log(error)
    }

}
// Funcion que Filtra Porductos Por Categoria

const byCategory =(pet,arr) => arr.filter((c) => c.pet === pet)

const getProductByCategory = async(pet,setState) =>{
    try{
        const result = await getProductsByList
        setState(byCategory(pet,result))
        
    } 
    catch(error){
        console.log(error)
    }

}
//exporta la funciones para ser usadas en ItemDetailContainer e ItemListContainer
export { getProductos, getItem, getProductByCategory  }