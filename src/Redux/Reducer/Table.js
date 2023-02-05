import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Add from '../Action/Add'
// import Edit from '../Action/Edit'

function Table() {
  const array = useSelector((state) => state.data);

  const addBtn = () => {
    <Add />
  }
  return (
    <>
      <div id="head">
        <h1>Students Details</h1>
        <button onClick={addBtn} ><Link style={{ textDecoration: "none", color: "white", background: "rgb(27, 27, 92)" }} to="/addStudent">Add New Student</Link></button>
      </div>
      <table border={1} cellSpacing={0.5}>
        <thead>
          <tr id="th">
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {
            array.map((item, index) => (
              // each item is an object
              <tr id="tr" key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>
                <td>
                  {/* Pass the ID of the row to fetch the data in the edit compoennt */}
                  <Link to="/editstudent" state={{ data: index }}>
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;