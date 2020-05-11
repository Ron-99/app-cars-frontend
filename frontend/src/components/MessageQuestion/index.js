import React from 'react';

import {clearForm} from '../Form';

import './styles.css';

const MessageQuestion = ({exec, message, data, del}) => (
    <div className="card" id="card">
        <div className="header">
            <div className="fechar" onClick={CloseMessage}>
                X
            </div>
        </div>
        <div className="card-body">
            <div className="texto">
                {message}
            </div>
            <div className="botoes">
                {
                    del
                    ? <button className="green" onClick={() => exec(data)}>Sim</button>
                    : <button className="green" onClick={() => {exec(data); clearForm();}}>Sim</button>
                }
                
                <button className="red" onClick={CloseMessage}>Não</button>
            </div>
        </div>
    </div>
)


const ShowMessage = () => {
    let card = document.getElementById('card');
    let header = document.getElementById('main-header');
    card.style.display = 'flex';
    header.style.opacity = '0.4';
}

const CloseMessage = ()  => {
    let card = document.getElementById('card');
    let header = document.getElementById('main-header');
    card.style.display = 'none';
    header.style.opacity = '1';
}

export default MessageQuestion;
export {CloseMessage, ShowMessage};