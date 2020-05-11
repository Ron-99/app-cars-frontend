import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';


const Main = () => {

    const [vehicles, setVehicles] = useState([]);
    const [vehicleInfo, setVehicleInfo ] = useState({});
    const [page, setPage] = useState(1);

    
    useEffect(() => {
         loadVehicles(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    const loadVehicles = async (page = 1) => {
        const response = await api.get(`/vehicles?page=${page}`);

        const { docs, ...vehicleInfo} = response.data;
        setVehicles(docs);
        setVehicleInfo(vehicleInfo);
        setPage(page);
    };

    const prevPage = () => {
        if(page === 1) return;

        const pageNumber = page - 1;
        const brand = document.getElementById('search').value;
        if(brand === "")
            loadVehicles(pageNumber);
        else
            search(pageNumber);

    }
    const nextPage = () => {
        if(page === vehicleInfo.pages) return;

        

        const pageNumber = page + 1;
        const brand = document.getElementById('search').value;
        if(brand === "")
            loadVehicles(pageNumber);
        else
            search(pageNumber);
    }

    const search = async (page = 1) => {
        const brand = document.getElementById('search').value;
        if(brand === "") 
            loadVehicles()
        else{
            const response = await api.get(`/vehicles/brand?q=${brand}&page=${page}`);

            const { docs, ...vehicleInfo} = response.data;
            setVehicles(docs);
            setVehicleInfo(vehicleInfo);
            setPage(page);
        }
    }

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') 
          search()
        
    }

    return (
        
        <div className="vehicle-list">
            <input id="search" type="text" placeholder="Procurar.." name="search" onKeyDown={_handleKeyDown}/>
            <button className="icone red" onClick={search}><i className="fa fa-search"></i></button>
            <Link to={`/create`}><button className="icone green"><i className="fa fa-plus"></i></button></Link>
            
            {vehicles.map(vehicle => (
                <article key={vehicle.id}>
                    <strong>{vehicle.brand} {vehicle.vehicle}</strong>
                    <p>{vehicle.year}</p>

                    <p>{vehicle.description}</p>

                    <Link to={`/vehicle/${vehicle.id}`}>Acessar</Link>
                </article>
            ))}
            <div className="actions">
                <button disabled={page === 1} onClick={prevPage}>Anterior</button>
                <button disabled={page === vehicleInfo.pages} onClick={nextPage}>Próximo</button>
            </div>
        </div>
    
    )
}

export default Main;