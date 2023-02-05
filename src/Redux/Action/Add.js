import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Add = () => {
    const navigate = useNavigate();
    const [inputData, setInputdata] = useState({
        name: "",
        age: "",
        course: "",
        batch: ""
    });
    const [inputStore, setInputstore] = useState([]);
    const changeHandle = (event) => {
        setInputdata({ ...inputData, [event.target.name]: event.target.value })
    }
    let { name, age, course, batch } = inputData;
    const AddStudents = () => {
        setInputstore([...inputStore, { name, age, course, batch }])
        setInputdata({ name: "", age: "", course: "", batch: "" })
        navigate(-1)
    }
    return (
        <div>
            <div id="row-container">
                <div id="row-1">
                    <label for="Name">Name </label><br/>
                    <input name='name' placeholder="Name" value={inputData.name} onChange={changeHandle}/>
                    <label for="Name">Age </label><br/>
                    <input name='age' placeholder="Age" value={inputData.age} onChange={changeHandle}/>
                </div>
                <div id="row-2">
                    <label for="Name">Course </label><br/>
                    <input name='course' placeholder="Course" value={inputData.course} onChange={changeHandle}/>
                    <label for="Name">Batch </label><br/>
                    <input name='batch' placeholder="Batch" value={inputData.batch} onChange={changeHandle}/>
                </div>
                <div id="row-3">
                    <button type="submit" onClick={AddStudents}>Add</button>
                    <button onClick={()=>{navigate(-1)}}>Back</button>
                </div>
            </div>

        </div>
    )
}
export default Add;