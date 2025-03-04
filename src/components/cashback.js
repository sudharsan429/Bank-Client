// frontend:

import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/cashback.css';


export default function Cashback() {
    let [dep, setDep] = useState(0);
    let [bal, setBal] = useState(0);
    let [product, setProducts] = useState([]);
    let [num,setNum]=useState()
    let [successMessage, setSuccessMessage] = useState(""); // State to hold success message


    useEffect(() => {
        async function axiosProd() {
            try {
                const response = await axios.get('https://bank-server-ni3f.onrender.com/data');
                setProducts(response.data);
                if (response.data[num]) {
                    setBal(response.data[num].amount); // Set initial balance
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        axiosProd();
    }, [num]);

    async function handleSubmit(e) {
        e.preventDefault();
        if(bal>=dep){
        let deposit = Number(dep);
        let updatedBalance = Number(bal) - deposit;
        setBal(updatedBalance);

        try {
            await axios.put(`https://bank-server-ni3f.onrender.com/update/${product[num]._id}`, {
                amount: updatedBalance
            });
            alert("Updated successfully!");
        } catch (error) {
            console.error("Error updating:", error);
        }
    }else{
        alert("invalid amount")
    }
    if (dep > 0 && dep <= bal) {
            setBal(bal - dep);
            setSuccessMessage("Withdrawal successful!"); // Set the success message
          } else if (dep > bal) {
            setSuccessMessage("Insufficient funds!"); // Error message if withdraw amount is more than balance
          } else {
            setSuccessMessage("Please enter a valid amount to withdraw!"); // Handle invalid input
          }
    }

    function Changeuser(e){
        setNum(Number(e))
        setBal(product[e].amount)
    }

    return (
        <>
            <div id='cashback'>
                <h1>CASHBACK</h1>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="accountSelect">User Account:</label><br></br>
                <select onChange={(e) => Changeuser(e.target.value)}>
                    <option value={0}>Choice the Acc</option>
                    {product.map((item, index) => (<option key={index} value={index}>{item.name}</option>))}
                </select>
                <label htmlFor="withdrawAmount" id="amt">
                          Enter Withdraw Amount:</label>
                    <input type="number" 
                    id="withdrawAmount"
                    placeholder="Enter withdrawal amount"
                    required
                    onChange={(e) => setDep(e.target.value)} />
                 <label htmlFor="pinCode" id="p">
                     Enter Your PIN</label>          
           <input
            type="password"
            id="pinCode"
            placeholder="Enter your PIN"
            required
          /></div>
          <button type="submit">Submit</button>
                </form>
                <h2>Balance : {bal} </h2>
            {successMessage && <p className="message">{successMessage}</p>}
         </div>
        </>
    );
}



// Assignment:

// import UserContext from "./context";
// import { useContext, useState } from "react";
// import '../styles/cashback.css';

// export default function Deposit() {
//   let users = useContext(UserContext);
//   let n = users.users.length;
//   let [bal, setBal] = useState(users.users[n - 1].amount);
//   let [dep, setDep] = useState(0);
//   let [successMessage, setSuccessMessage] = useState(""); // State to hold success message

//   function handleSubmit(e) {
//     e.preventDefault();
//     let deposit = Number(dep);

//     if (deposit > 0 && deposit <= bal) {
//       setBal(bal - deposit);
//       setSuccessMessage("Withdrawal successful!"); // Set the success message
//     } else if (deposit > bal) {
//       setSuccessMessage("Insufficient funds!"); // Error message if withdraw amount is more than balance
//     } else {
//       setSuccessMessage("Please enter a valid amount to withdraw!"); // Handle invalid input
//     }
//   }

//   // Update user's balance after withdrawal
//   users.users[n - 1].amount = bal;

//   return (
//     <>
//       <div id="cashback">
//         <h1>CASHBACK</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="withdrawAmount" id="amt">
//             Enter Amount to Withdraw:
//           </label>
//           <input
//             type="number"
//             id="withdrawAmount"
//             placeholder="Enter withdrawal amount"
//             required
//             onChange={(e) => setDep(e.target.value)}
//           />
//           <label htmlFor="pinCode" id="p">
//             Enter Your PIN:
//           </label>
//           <input
//             type="password"
//             id="pinCode"
//             placeholder="Enter your PIN"
//             required
//           />
//           <button type="submit">Withdraw</button>
//         </form>
//         <h2>Balance: {bal}</h2>

//         {/* Conditional rendering for success or error message */}
//         {successMessage && <p className="message">{successMessage}</p>}
//       </div>
//     </>
//   );
// }
