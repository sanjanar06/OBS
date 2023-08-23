import React, { useEffect, useState } from 'react';
import AccountService from '../../services/AccountService';
import '../style/DisplayBeneficiary.css';

function DisplayBeneficiary() {
    const [beneficiaries, setBeneficiaries] = useState([]);

    useEffect(() => {
        // axios.get('http://localhost:3001/beneficiary')
        //   .then(response => {
        //     console.log(response.data);
        //     setBeneficiaries(response.data);
        //   })
        //   .catch(error => {
        //     console.error('Error fetching beneficiaries:', error);
        //   });
        AccountService.viewBeneficiaries().then((response) => {
            console.log(response.data);
            setBeneficiaries(response.data);
        })
            .catch((error) => {
                console.log("Error fetching beneficiaries");
            });
    }, []);

    return (
        <div className="display-beneficiary">
            <h2>Beneficiaries</h2>
            <table>
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Beneficiary Name</th>
                        <th>Beneficiary Account Number</th>
                        <th>Nick Name</th>
                    </tr>
                </thead>
                <tbody>
                    {beneficiaries.map((beneficiary, index) => (
                        <tr key={beneficiary.beneficiaryId}>
                            <td>{index + 1}</td>
                            <td>{beneficiary.beneficiaryName}</td>
                            <td>{beneficiary.beneficiaryAccount}</td>
                            <td>{beneficiary.beneficiaryNickName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayBeneficiary;
