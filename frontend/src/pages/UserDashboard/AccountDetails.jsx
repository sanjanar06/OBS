import React, { useEffect, useState } from 'react';
import AccountService from '../../services/AccountService';
import '../style/AccountDetails.css';

function AccountDetails() {
    const [account, setAccount] = useState([]);

    useEffect(() => {

<<<<<<< HEAD
  return (
    <div className="display-details">
    <h2>Account Details</h2>
    <table>
        <thead>
            <tr>
                {/* <th>Serial Number</th> */}
                <th>Name</th>
                <th>Account Number</th>
                <th>Account Type</th>
                <th>Account Balance</th>
            </tr>
        </thead>
        <tbody>
            {details.map((beneficiary, index) => (
                <tr key={beneficiary.id}>
                    {/* <td>{index + 1}</td> */}
                    <td>{beneficiary.accountHolderName}</td>
                    <td>{beneficiary.accountNumber}</td>
                    <td>{beneficiary.accountType}</td>
                    <td>beneficiary.accountBalance</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  );
=======
        AccountService.viewAccount().then((response) => {
            console.log(response.data);
            setAccount(response.data);
        })
            .catch((error) => {
                console.log("Error fetching account details");
            });
    }, []);

    return (
        <div className="display-details">
            <h2>ACCOUNT DETAILS</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Account Number</th>
                        <th>Account Type</th>
                        <th>Account Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {details.map((account) => ( */}
                    <tr key={account.accountNumber}>
                        <td>{account.accountName}</td>
                        <td>{account.accountNumber}</td>
                        <td>{account.accountType}</td>
                        <td>{account.balance}</td>
                    </tr>
                    {/* ))} */}
                </tbody>
            </table>
        </div>
    );
>>>>>>> c3693c5d06dc685be486600484b8f13bd26818ad
}

export default AccountDetails;
