import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

const SignIn = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleSignIn = async e => {
        e.preventDefault();
        if (!email || !password) {
            setError("Preencha e-mail e senha para continuar!");
        } else {
            try {
                const response = await api.post("/users/authenticate", { email, password });
                login(response.data.token);
                props.history.push("/home");
            } catch (err) {
                setError("Houve um problema com o login, verifique suas credenciais.");   
            }
        }
    };

  
    return (
        <div className="formulario">
            <form onSubmit={handleSignIn}>
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Endereço de e-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value) }
                />
                {error && <p>{error}</p>}

                <div className="actions">
                    <button type="submit" className="green">Entrar</button>
                    <Link to="/signup"><button className="blue">Criar Conta</button></Link>
                </div>
            </form>
        </div>
    );
  
}

export default withRouter(SignIn);