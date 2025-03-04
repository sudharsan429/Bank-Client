//frontend:

import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/deposit.css';


export default function Deposit() {
    let [dep, setDep] = useState(0);
    let [bal, setBal] = useState(0);
    let [product, setProducts] = useState([]);
    let [num,setNum]=useState()
    let [successMessage, setSuccessMessage] = useState(""); 


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
        let deposit = Number(dep);
        let updatedBalance = Number(bal) + deposit;
        setBal(updatedBalance);

        try {
            await axios.put(`https://bank-server-ni3f.onrender.com/update/${product[num]._id}`, {
                amount: updatedBalance
            });
            alert("Updated successfully!");
        } catch (error) {
            console.error("Error updating:", error);
        }

        if (deposit > 0) {
                        setBal(bal + deposit);
                        setSuccessMessage("Deposit successful!"); // Show success message
                    } else {
                        setSuccessMessage("Please enter a valid deposit amount.");
                    }
    }


        

    function Changeuser(e){
        setNum(Number(e))
        setBal(product[e].amount)
    }

    return (
        <>
            <div id='deposit'>
                <h3>Deposit</h3>
                <div className="container">
                <form id="depositForm" onSubmit={handleSubmit}>
                
                <div className="form-group">
                            <label htmlFor="accountSelect">Select Account:</label>
                             <select id="accountSelect" name="accountSelect" required>
                                 <option value="checking">Checking Account</option>
                                 <option value="savings">Savings Account</option>
                                 <option value="business">Business Account</option>
                             </select>
                         </div>

                <div className="form-group">
                <label htmlFor="accountSelect">User Account:</label>
                <select onChange={(e) => Changeuser(e.target.value)}>
                    <option value={0}>Choice the Acc</option>
                    {product.map((item, index) => (<option key={index} value={index}>{item.name}</option>))}
                </select>
                    <label htmlFor="accountno">Account No:</label>
                    <input type="number" id="accountno" name="accountno" placeholder="Enter Account No" required />
                    <label htmlFor="">Deposit Amount:</label>
                    <input type="number" 
                           id="depositAmount"                                
                           name="depositAmount"                               
                           placeholder="Amount..."
                           required
                           onChange={(e) => setDep(e.target.value)}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <h2>Balance : {bal} </h2>
                {successMessage && <p className="message success">{successMessage}</p>}

            </div>
            </div>
        </>
    );
}



// Assignment:


// import UserContext from "./context";
// import { useContext, useState } from "react";
// import { Button } from "react-bootstrap";
// import '../styles/deposit.css';

// export default function Deposit() {
//     let users = useContext(UserContext);
//     let n = users.users.length;
//     let [bal, setBal] = useState(users.users[n - 1].amount);
//     let [dep, setDep] = useState(0);
//     let [successMessage, setSuccessMessage] = useState(""); 

//     function handleSubmit(e) {
//         e.preventDefault();
//         let deposit = Number(dep);

//         if (deposit > 0) {
//             setBal(bal + deposit);
//             setSuccessMessage("Deposit successful!"); // Show success message
//         } else {
//             setSuccessMessage("Please enter a valid deposit amount.");
//         }
//     }

//     // Update the user's balance after deposit
//     users.users[n - 1].amount = bal;

//     return (
//         <>
//             <div id="deposit">
//                 <h3>Deposit</h3>
//                 <div className="container">
//                     <form id="depositForm" onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             <label htmlFor="accountSelect">Select Account:</label>
//                             <select id="accountSelect" name="accountSelect" required>
//                                 <option value="checking">Checking Account</option>
//                                 <option value="savings">Savings Account</option>
//                                 <option value="business">Business Account</option>
//                             </select>
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="accountno">Account No</label>
//                             <input type="number" id="accountno" name="accountno" placeholder="Enter Account No" required />
//                             <label htmlFor="depositAmount">Deposit Amount:</label>
//                             <input
//                                 type="number"
//                                 id="depositAmount"
//                                 name="depositAmount"
//                                 placeholder="Amount..."
//                                 required
//                                 onChange={(e) => setDep(e.target.value)}
//                             />
//                         </div>

//                         <Button type="submit">Deposit</Button>
//                     </form>

//                     <br />
//                     <h2>Balance: {bal}</h2>

//                     {/* Conditional rendering for success message */}
//                     {successMessage && <p className="message success">{successMessage}</p>}
//                 </div>
//             </div>
//         </>
//     );
// }
