import React, { useState } from "react";
import api from '../../services/api';
import Form from '../../components/Form';
import { CloseMessage } from "../../components/MessageQuestion";

const Create = (props) => {

    const [errors, setErrors] = useState([]);

    const createVehicle = async (data) => {
        try{
            await api.post(`/vehicles`, data);
        }catch(err){
            setErrors(err.response.data);
        }finally{
            CloseMessage();
        }
       
        
    }

    return (
        <Form exec={createVehicle} create={true} errors={errors}/>
    )
}

export default Create;