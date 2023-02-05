import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home'
import Student from '../Components/Student'
import Error from '../Components/Error'
import Add from '../Redux/Action/Add'
import Edit from '../Redux/Action/Edit'
import ContactUs from '../Components/ContactUs'
const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/Student" element={<Student />}></Route>
                <Route path="/addstudent" element={<Add />}></Route>
                <Route path="/editstudent" element={<Edit />}></Route>
                <Route path="/ContactUs" element={<ContactUs />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </div>
    )
}
export default Main;