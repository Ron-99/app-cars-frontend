import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import VehicleInfo from '../../components/VehicleInfo';
import {CloseMessage} from '../../components/MessageQuestion';
import VehicleNotFound from '../../components/VehicleNotFound';
import { useDispatch} from 'react-redux';

function showFormAction(showForm){
    return {type: 'SHOW_FORM', showForm};
}

const Vehicle = (props) => {
    const [vehicle, setVehicle] = useState({});
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const showForm = (show) => {
        dispatch(showFormAction(show));
    }

    useEffect(() => {
        const {id} = props.match.params;
        loadVehicle(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params]);

    const loadVehicle = async(id) =>{
        const response = await api.get(`/vehicles/${id}`);
        setVehicle(response.data);
    }

    const deleteVehicle = async(id) => {
        await api.delete(`/vehicles/${id}`);
        CloseMessage();
    };

    const updateVehicle = async(data) => {
        try{
            const {id} = props.match.params;
            const response = await api.put(`/vehicles/${id}`, data);
            setVehicle(response.data.data);
            showForm(false);
        }catch(err){
            setErrors(err.response.data);
        }finally{
            CloseMessage();
        }
    }

    return (
        <>
            {
            vehicle
            ? <VehicleInfo vehicle={vehicle} deleteVehicle={deleteVehicle} updateVehicle={updateVehicle} props={props} errors={errors}/> 
            : <VehicleNotFound/>
            }
        </>
    )
}

export default Vehicle;