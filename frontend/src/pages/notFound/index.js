import React from 'react';
import { withRouter } from 'react-router-dom';

import './styles.css';

const NotFound = () => (
    <div className="notFound">
        <h1>404</h1>
        <h2>PÁGINA NÃO ENCONTRADA</h2>
    </div>
)

export default withRouter(NotFound);