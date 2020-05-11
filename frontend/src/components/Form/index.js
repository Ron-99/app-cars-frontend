import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import './styles.css';
import MessageQuestion, { ShowMessage } from '../MessageQuestion';

function showFormAction(show){
    return {type: 'SHOW_FORM', show};
}

const clearForm = () => {
    document.getElementById('mainForm').reset();
}

const Form = ({exec, create, errors}) => {

    const [data, setData] = useState({});

    const dispatch = useDispatch();

    function showForm(show){
        dispatch(showFormAction(show));
    }

    function save(e){
        e.preventDefault();
        const data = {
            vehicle: getValueOfInput("vehicle"),
            brand: getValueOfInput("brand"),
            year: Number(getValueOfInput("year")),
            description: getValueOfInput("description") || ""
        }

        if(create)
            data.id = getValueOfInput("id");

        setData(data);

        ShowMessage();
    }

    const getValueOfInput = (input) => document.getElementById(input).value;
    
    return(
        <>
        <div className="formulario">
            <form id="mainForm">
                <h1>Formulário de Veículo</h1>

                {
                    create 
                    ? (
                        <>
                            <label htmlFor="id">Id do Veículo</label>
                            <input type="text" name="id" id="id" placeholder="Id"/>
                        </>
                    )
                    : ""
                }
                
                
                <label htmlFor="vehicle">Nome do Veículo</label>
                <input 
                    type="text" 
                    name="vehicle" 
                    id="vehicle" 
                    placeholder="Nome" 
                />
                
                
                <label htmlFor="brand">Marca do Veículo</label>
                <input 
                    type="text" 
                    name="brand" 
                    id="brand" 
                    placeholder="Marca"
                />

                <label htmlFor="year">Ano do Veículo</label>
                <input 
                    type="text" 
                    name="year" 
                    id="year" 
                    placeholder="Ano"
                />

                <label htmlFor="description">Descrição do Veículo</label>
                <input 
                    type="text" 
                    id="description" 
                    name="description" 
                    placeholder="Descrição"
                />

                <div className="errors">
                    {
                    errors 
                        && 
                    errors.map(error => (
                            <p key={error.message}>* {error.message}</p>
                        ))
                    }
                </div>
                
                <div className="actions">
                    <button id="save" type="submit" className="green" onClick={e => save(e)}>Salvar</button>
                    {
                        create
                        ? <Link to="/home"><button id="cancel" type="reset" className="red">Cancelar</button></Link>
                        : <button id="cancel" type="reset" className="red" onClick={() => showForm(false)}>Cancelar</button>
                    }
                    
                </div>
            </form>
        </div>

        {
            create
            ? <MessageQuestion exec={exec} message={'Deseja cadastrar o veículo ? '} data={data} del={false}/>
            : <MessageQuestion exec={exec} message={'Deseja realmente realizar a alteração ? '} data={data} del={false}/>
        }
          
    </>
  )
}

export default Form;
export {clearForm};