// frontend

import axios from "axios";
import { useState, useEffect } from "react";
import '../styles/alldata.css';


export default function Alldata() {
  let [data, setData] = useState([]);
  let [editId, setEditId] = useState(null);
  let [editUser, setEditUser] = useState({ name: "", email: "", password: "",phoneno:"", amount: 0 });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let result = await axios.get("https://bank-server-ni3f.onrender.com/data");
    setData(result.data);
  }

  async function handleDelete(id) {
    await axios.delete(`https://bank-server-ni3f.onrender.com/delete/${id}`);
    fetchData();
  }

  function handleEdit(user) {
    setEditId(user._id);
    setEditUser(user);
  }

  async function handleUpdate(e) {
    e.preventDefault();
    await axios.put(`https://bank-server-ni3f.onrender.com/update/${editId}`, editUser);
    setEditId(null);
    fetchData();
  }

  return (
    <>
    <div id="alldata">
      <h1>ALL DATA</h1>
      <table className="table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>E-MAIL</th>
            <th>PHONE NO</th>
            <th>PASSWORD</th>
            <th>AMOUNT</th>
            <th>UPDATE</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneno}</td>
              <td>{user.password}</td>
              <td>{user.amount}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
              </td>
              <td>
              <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editId && (
        <div>
        <form onSubmit={handleUpdate}>
        <h2>Edit User</h2>
          <input
            type="text"
            value={editUser.name}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="email"
            value={editUser.email}
            onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
            placeholder="Email"
          />
          <input
            type="number"
            value={editUser.phoneno}
            onChange={(e) => setEditUser({ ...editUser, phoneno: e.target.value })}
            placeholder="Phoneno"
          />
          <input
            type="text"
            value={editUser.password}
            onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
            placeholder="Password"
          />
          <input
            type="number"
            value={editUser.amount}
            onChange={(e) => setEditUser({ ...editUser, amount: e.target.value })}
            placeholder="Balance"
          />
          <button type="submit">Update</button>
        </form>
        </div>
      )}
      </div>
    </>
  );
}







// Assignment


// import UserContext from "./context";
// import { useContext, useState } from "react";
// import '../styles/alldata.css';

// export default function Alldata() {
//     const { users, setUsers } = useContext(UserContext);
//     const [editUser, setEditUser] = useState(null);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [phoneno, setPhoneno] = useState('');
//     const [amount, setAmount] = useState('');

//     const handleEdit = (user) => {
//         setEditUser(user);
//         setName(user.name);
//         setEmail(user.email);
//         setPassword(user.password);
//         setPhoneno(user.phoneno);
//         setAmount(user.amount);
//     };

//     const handleUpdate = () => {
//         const updatedUsers = users.map(user => 
//             user.email === editUser.email ? { ...user, name, email, phoneno, password, amount } : user
//         );
//         setUsers(updatedUsers);
//         resetForm();
//     };

//     const handleDelete = (email) => {
//         setUsers(users.filter(user => user.email !== email));
//     };

//     const resetForm = () => {
//         setEditUser(null);
//         setName('');
//         setEmail('');
//         setPhoneno('');
//         setPassword('');
//         setAmount('');
//     };

//     return (
//         <div id='alldata'>
//             <h1>ALL-DATA</h1>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th scope="col">NAME</th>
//                         <th scope="col">E-MAIL</th>
//                         <th scope="col">PHONE NO</th>
//                         <th scope="col">PASSWORD</th>
//                         <th scope="col">AMOUNT</th>
//                         <th scope="col">UPDATE</th>
//                         <th scope="col">DELETE</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((item) => (
//                         <tr key={item.email}>
//                             <td>{item.name}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phoneno}</td>
//                             <td>{item.password}</td>
//                             <td>{item.amount}</td>
//                             <td>
//                                 <button onClick={() => handleEdit(item)}>Edit</button>
//                             </td>
//                             <td>
//                                 <button onClick={() => handleDelete(item.email)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             {editUser && (
//                 <div>
//                     <h2>Edit User</h2>
//                     <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//                     <input type="text" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} placeholder="Phone No" />
//                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//                     <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
//                     <button onClick={handleUpdate}>Update</button>
//                     <button onClick={resetForm}>Cancel</button>
//                 </div>
//             )}
//         </div>
//     );
// }
