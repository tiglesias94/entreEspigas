import { useState } from "react";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from "firebase/firestore"


const FormDistri = () => {
    
    const database = getFirestore();
    
    const defaultValue = {
        nombre:"",
        apellido:"",
        localidad:"",
        provincia:"",
        email:"",
        telefono:"",
    }

    const [submitValue, setSubmitValue] = useState(defaultValue)

    const captureForm = (evt) => {
        const {name, value} = evt.target;
        setSubmitValue ({...submitValue, [name]:value})
    }

    const storeData = async (evt) => {
        evt.preventDefault();
        
        //console.log(submitValue)
        
        try {
            await addDoc(collection(database,"distribuidores"),{
                ...submitValue
            })
        } catch (error) {
            console.log(error)
        }
        setSubmitValue({...defaultValue})
    }
    

    return ( 
        <form className="Form" onSubmit={storeData}>

        <label htmlFor="nombre" className="Form__label">Nombre</label>
           
           <input
            type = "text"
            id = "nombre"
            name = "nombre"
            onChange={captureForm}
            value={submitValue.nombre}    
            />

        <label htmlFor="apellido" className="Form__label">Apellido</label>
            <input
            type = "text"
            id = "apellido"
            name = "apellido"
            onChange={captureForm}
            value={submitValue.apellido}             
            />

        <label htmlFor="localidad" className="Form__label">Localidad</label>
            <input
            type = "text"
            id = "localidad"
            name = "localidad"
            onChange={captureForm}
            value={submitValue.localidad}           
            />

        <label htmlFor="provincia" className="Form__label">Provincia</label>
            <input
            type = "text"
            id = "provincia"
            name = "provincia"
            onChange={captureForm}
            value={submitValue.provincia}           
            />

        <label htmlFor="email" className="Form__label">Email</label>
            <input
            type = "email"
            id = "email"
            name = "email"
            onChange={captureForm}
            value={submitValue.email}           
            />

        <label htmlFor="telefono" className="Form__label">Telefono</label>
            <input
            type = "telefono"
            id = "telefono"
            name = "telefono"
            onChange={captureForm}
            value={submitValue.telefono}           
            />
        <input type="submit" value="Submit" />

        </form>
     );
}
 
export default FormDistri;