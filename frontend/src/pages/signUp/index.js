import React,{ useState } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";

import './styles.css';

const SignUp = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async e => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError("* Preencha todos os dados para se cadastrar");
        } else {
            try {
                await api.post("/users", { name, email, password });
                props.history.push("/");
            } catch (err) {
                console.log(err.response);
                setError(`* ${err.response.data.message}`);
            }
        }
    };


    return (
        <div className="formulario">
            <form onSubmit={handleSignUp}>
                <h1>Criar Conta</h1>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Nome de usuário"
                    onChange={e => setName(e.target.value)}
                />
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
                    id="senha"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />
                {error && <p className="errors">{error}</p>}
                <div className="actions">
                    <button type="submit" className="green">Cadastrar</button>
                    <Link to="/"><button className="blue">Fazer Login</button></Link>
                </div>
                
            </form>
        </div>
    );

}

export default withRouter(SignUp);