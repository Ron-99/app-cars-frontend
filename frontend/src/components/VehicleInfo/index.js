import React from 'react';
import './styles.css';
import MessageQuestion, { ShowMessage} from '../MessageQuestion';
import Form from '../Form';
import { useDispatch, useSelector} from 'react-redux';

function showFormAction(showForm){
    return {type: 'SHOW_FORM', showForm};
}

const VehicleInfo = ({vehicle, deleteVehicle, updateVehicle, props, errors}) => {

    const dispatch = useDispatch();
    const form = useSelector(state => state.showForm);

    const showForm = (show) => {
        dispatch(showFormAction(show));

    }



    return(
        <>
            <div className="vehicle-info">
                <h1>{vehicle.brand} {vehicle.vehicle}</h1>
                <h5>{vehicle.year}</h5>
                <p>{vehicle.description}</p>
                <div className="actions">
                    <button id="edit" onClick={() => showForm(true)}>Editar</button>
                    <button id="delete" onClick={ShowMessage} disabled={form}>Excluir</button>
                </div>
            </div>
            {
                !form
                ? <MessageQuestion exec={deleteVehicle} message={`Deseja realmente excluir o ${vehicle.brand} ${vehicle.vehicle} ?`} data={props.match.params.id} del={true}/>
                : <Form exec={updateVehicle} create={false} errors={errors}/> 
            }
            
        </>
    );
}

export default VehicleInfo