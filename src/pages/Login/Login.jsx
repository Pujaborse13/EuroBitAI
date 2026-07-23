import { useState } from "react";
import "./Login.css";


function Login({ setLoggedIn }) {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");


    const login = () => {

        if(
            email === "kapilgandhi@gmail.com" &&
            password === "1234"
        ){

            setLoggedIn(true);

        }
        else{

            setError("Invalid email or password");

        }

    };


    return (

        <div className="login-page">

            <div className="login-card">

                <h1>EuroBitAI</h1>

                <p>
                    Intelligent Operations Assistant
                </p>


                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />


                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />


                {
                    error &&
                    <div className="error">
                        {error}
                    </div>
                }


                <button onClick={login}>
                    Login
                </button>


            </div>

        </div>

    );

}


export default Login;