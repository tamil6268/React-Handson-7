import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { editData } from './slice';


function Edit() {
    const location = useLocation(); // returns the location object 
    const navigate = useNavigate();
    const index = (location.state.data);
    const dispatch = useDispatch();
    const array = useSelector((state) => state.data);

    // array of objects : context.entries
    // function         : context.updateFunction


    // the object in which the changes will be done 
    const newObj = {
        name: array[index].name,
        age: array[index].age,
        course: array[index].course,
        batch: array[index].batch,
    }

    const handleChange = (event) => {
        newObj[event.target.name] = event.target.value;
        // console.log(newObj);     
    }

    const handleUpdate = (event) => {
        dispatch(editData({ newObj, index }));
        navigate(-1);
    }

    return (
        <div id="row-container">
            <div id="row-1">
                <label for="Name">Name </label><br />
                <input onChange={handleChange} name='name' placeholder={array[index].name} />
                <label for="Name">Age  </label><br />
                <input onChange={handleChange} name='age' placeholder={array[index].age} />
            </div>
            <div id="row-2">
                <label for="Name">Course   </label><br />
                <input onChange={handleChange} name='course' placeholder={array[index].course} />
                <label for="Name">Batch   </label><br />
                <input onChange={handleChange} name='batch' placeholder={array[index].batch} />
            </div>


            <div id="row-3">
                <button onClick={handleUpdate}>Update</button>
                <button onClick={() => { navigate(-1) }}>Back</button>
            </div>
        </div>

    )
}

export default Edit;