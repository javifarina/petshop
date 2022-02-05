import React, { useEffect, useState } from "react";
import { useContexCart } from "../../context/CartContex";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const FormSale = () => {
  const { cart, deletAllProduct, totalPrice } = useContexCart();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [idcompra, setIdcompra] =useState("")
  let navigate = useNavigate()
  const goHome = () => {
    navigate("/");
  };

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
    goHome()
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
  },);
  
  
  const limpiarForm =()=>{
    setNombre("")
    setApellido("")
    setEmail("")
   
  }
  return (
    <div className="container" style={{ marginTop: "100px", width: "40%" }}>
      <h3 className="text-center"> Terminar su Compra</h3>
      <form onSubmit={checkout} >
      <div className="mb-3">
      <input
          type="text"
          className="form-control mb-2"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
          name="nombre"
          required
          minLength="4"
          maxLength="20"
          pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}"
          title="Solo se aceptan Caracteres"
        />
      </div>
        
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Apellido"
          onChange={(e) => setApellido(e.target.value)}
          value={apellido}
          name="apellido"
          required
          minLength="4"
          maxLength="20"
          pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}"
          title="Solo se aceptan Caracteres"
        />
        </div>
        <div className="mb-3">
        <input
          type="mail"
          className="form-control "
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          required
          minLength="6"
          maxLength="40"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Ingrese correo válido  con formato nombre@dominio.com "
        />
        </div>
        <div className="text-center">
            <button className="btn btn-success  " type="submit"
            disabled={nombre ==="" && apellido==="" && email ===""  ? true : null}>
              Terminar Compra
            </button>
        </div>
       
      </form>
    </div>
  );
};

export default FormSale;
