import React, { useEffect, useState } from "react";
import { useContexCart } from "../../context/CartContex";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import swal from "sweetalert";
const FormSale = () => {
  const { cart, deletAllProduct, totalPrice } = useContexCart();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [idcompra, setIdcompra] =useState("")

  const itmsVentas = cart.map((item) => {
    const cartFilter = {};
    cartFilter.id = item.id;
    cartFilter.decripcion = item.description;
    cartFilter.precio = item.price;
    cartFilter.cantidad = item.qty;
    return cartFilter;
  });
  const checkoutOK = (id) => {
    
    swal({
      title: "Gracias por tu Compra PetShop Patitas ",
      text: "El número de tu compra es: "+id,
      icon: "success",
      buttons: "Aceptar",
    })
    
  };
 
  let total = totalPrice();
  const checkout = (e) => {
    e.preventDefault();
    const saleCollection = collection(db, "Ventas");
   
    addDoc(saleCollection, {
      comprador: {
        name: nombre,
        lastname: apellido,
        email: email,
      },
      items: itmsVentas,
      date: serverTimestamp(),
      total: total,
      
    }).then((res) => {
      const docs = res
      const id = docs.id
      setIdcompra(id)
     
      
    });
    
    deletAllProduct();
    limpiarForm() 
    
  };
  useEffect(() => {
    if (idcompra !== ""){
      checkoutOK(idcompra);
    } 
  }, [idcompra]);
  
  const limpiarForm =()=>{
    setNombre("")
    setApellido("")
    setEmail("")
  }
  return (
    <div className="container" style={{ marginTop: "100px", width: "40%" }}>
      <h3> Terminar su Compra</h3>
      <form onSubmit={checkout}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Apellido"
          onChange={(e) => setApellido(e.target.value)}
          value={apellido}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <button className="btn btn-success me-2 " type="submit">
          Terminar Compra
        </button>
      </form>
    </div>
  );
};

export default FormSale;
