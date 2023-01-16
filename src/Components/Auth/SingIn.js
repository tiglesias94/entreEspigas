import { useState } from "react";
import { useUserAuth } from "../../Context/UserAuthContext";
import {Link, useNavigate} from "react-router-dom"


const SignIn = () => {
    
    const[email, setEmail] = useState ("")
    const [password, setPassword] = useState("")
    const {logIn} = useUserAuth();
    const [error, setError] = useState("")
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/productos") ;
        }catch(err){
            setError(err.message);
        }

    }

    return ( 
        <div className="sign-in-container">
            <form onSubmit={handleSubmit}>
                <h1>Crear Cuenta</h1>
                <input 
                type="email"
                placeholder="Enter your Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                ></input>
                <input
                type="password"
                placeholder="Enter your Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}>
                </input>
                <button type="submit">Iniciar Sesion</button>
            </form>
        </div> 
        );
}
 
export default SignIn;