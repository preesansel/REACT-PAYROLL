// import React, { useState, useEffect } from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// Chart.register(ArcElement, Tooltip, Legend);

// const PayComponent = ({ empId, month, year, employeeDetails: initialEmployeeDetails = {}, isDashboard = false }) => {
//     const [employeeDetails, setEmployeeDetails] = useState(initialEmployeeDetails);
//     const [salaryDetails, setSalaryDetails] = useState({});
//     const [masked, setMasked] = useState(true);
//     const [chartData, setChartData] = useState({
//         labels: ['Take Home', 'Deductions'],
//         datasets: [{
//             data: [0, 0],
//             backgroundColor: ['#28a745', '#dc3545']
//         }]
//     });
//     const [currentMonth, setCurrentMonth] = useState('');
//     const navigate = useNavigate();

//     const getPreviousMonth = () => {
//         const date = new Date();
//         date.setMonth(date.getMonth() - 1);
//         return { month: date.getMonth() + 1, year: date.getFullYear() };
//     };

//     useEffect(() => {
//         const fetchDetails = async () => {
//             try {
//                 if (isDashboard) {
//                     const { month, year } = getPreviousMonth();
//                     const employeeResponse = await axios.get(`http://localhost:8882/payroll/EmployeeDetails/${empId}`);
//                     setEmployeeDetails(employeeResponse.data);

//                     const salaryResponse = await axios.get(`http://localhost:8882/payroll/details`, {
//                         params: { employeeId: empId, year, month }
//                     });
//                     const data = salaryResponse.data;
//                     setSalaryDetails({
//                         basicPay: data.basicPay,
//                         houseRentAllowance: data.houseRentAllowance,
//                         specialAllowance: data.specialAllowance,
//                         epf: data.epf,
//                         incomeTax: data.incomeTax,
//                         professionalTax: data.professionalTax,
//                         lop: data.lop,
//                         grossEarning: data.grossEarning,
//                         grossDeduction: data.grossDeduction,
//                         netPay: data.netPay,
//                         ytdBasicPay: data.ytdBasicPay,
//                         ytdHouseRentAllowance: data.ytdHouseRentAllowance,
//                         ytdSpecialAllowance: data.ytdSpecialAllowance,
//                         ytdEpf: data.ytdEpf,
//                         ytdIncomeTax: data.ytdIncomeTax,
//                         ytdProfessionalTax: data.ytdProfessionalTax,
//                         ytdGrossEarnings: data.ytdGrossEarnings,
//                         ytdGrossDeductions: data.ytdGrossDeductions
//                     });
//                     setChartData({
//                         labels: ['Take Home', 'Deductions'],
//                         datasets: [{
//                             data: [data.netPay, data.grossDeduction],
//                             backgroundColor: ['#28a745', '#dc3545']
//                         }]
//                     });
//                     setCurrentMonth(`${new Date(year, month - 1).toLocaleString('default', { month: 'short' })}'${year.toString().slice(-2)}`);
//                 } else {
//                     const salaryResponse = await axios.get(`http://localhost:8882/payroll/details`, {
//                         params: { employeeId: empId, year, month }
//                     });
//                     const data = salaryResponse.data;
//                     setSalaryDetails({
//                         basicPay: data.basicPay,
//                         houseRentAllowance: data.houseRentAllowance,
//                         specialAllowance: data.specialAllowance,
//                         epf: data.epf,
//                         incomeTax: data.incomeTax,
//                         professionalTax: data.professionalTax,
//                         lop: data.lop,
//                         grossEarning: data.grossEarning,
//                         grossDeduction: data.grossDeduction,
//                         netPay: data.netPay,
//                         ytdBasicPay: data.ytdBasicPay,
//                         ytdHouseRentAllowance: data.ytdHouseRentAllowance,
//                         ytdSpecialAllowance: data.ytdSpecialAllowance,
//                         ytdEpf: data.ytdEpf,
//                         ytdIncomeTax: data.ytdIncomeTax,
//                         ytdProfessionalTax: data.ytdProfessionalTax,
//                         ytdGrossEarnings: data.ytdGrossEarnings,
//                         ytdGrossDeductions: data.ytdGrossDeductions
//                     });
//                     setChartData({
//                         labels: ['Take Home', 'Deductions'],
//                         datasets: [{
//                             data: [data.netPay, data.grossDeduction],
//                             backgroundColor: ['#28a745', '#dc3545']
//                         }]
//                     });
//                     setCurrentMonth(`${new Date(year, month - 1).toLocaleString('default', { month: 'short' })}'${year.toString().slice(-2)}`);
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         fetchDetails();
//     }, [empId, month, year, isDashboard]);

//     const toggleVisibility = () => {
//         setMasked(!masked);
//     };

//     const handleShowPayslip = () => {
//         navigate('/payslip', { state: { employeeDetails, salaryDetails, month, year } });
//     };

//     const handlePayHistory = () => {
//         navigate('/payhistory', { state: { employeeDetails } });
//     };

//     const options = {
//         plugins: {
//             tooltip: {
//                 callbacks: {
//                     label: function (tooltipItem) {
//                         const label = chartData.labels[tooltipItem.dataIndex];
//                         const value = chartData.datasets[0].data[tooltipItem.dataIndex];
//                         return `${label}: ₹ ${value.toLocaleString()}`;
//                     }
//                 }
//             },
//             legend: {
//                 display: false
//             }
//         },
//         cutout: '80%'
//     };

//     return (
//         <div className="container mt-5">
//             <div className="card shadow-sm" style={{ maxWidth: '400px', margin: '0 auto' }}>
//                 <div className="card-body">
//                     <h4 className="card-title">{isDashboard ? 'Pay' : currentMonth}</h4>
//                     <div className="d-flex justify-content-between align-items-center">
//                         <span>Gross pay</span>
//                         <div className="d-flex align-items-center">
//                             <span className="salary-mask">
//                                 ₹ {masked ? '*******' : salaryDetails.grossEarning}
//                             </span>
//                             <FontAwesomeIcon
//                                 icon={masked ? faEye : faEyeSlash}
//                                 className="ms-2"
//                                 onClick={toggleVisibility}
//                                 style={{ cursor: 'pointer' }}
//                             />
//                         </div>
//                     </div>
//                     <div className="d-flex align-items-center mt-3">
//                         <div style={{ width: '200px', height: '200px', position: 'relative' }}>
//                             <Doughnut data={chartData} options={options} />
//                             <div className="position-absolute top-50 start-50 translate-middle text-center" style={{ pointerEvents: 'none' }}>
//                                 <strong><small>{currentMonth}</small></strong>
//                             </div>
//                         </div>
//                         <div className="ms-4">
//                             <div className="d-flex justify-content-between">
//                                 <span>Take home</span>
//                                 <span className="salary-mask">
//                                     ₹ {masked ? '*******' : salaryDetails.netPay}
//                                 </span>
//                             </div>
//                             <div className="mt-3 d-flex justify-content-between">
//                                 <span>Deductions</span>
//                                 <span className="salary-mask">
//                                     ₹ {masked ? '*******' : salaryDetails.grossDeduction}
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mt-4 d-flex justify-content-around">
//                         {isDashboard ? (
//                             <>
//                                 <button className="btn btn-primary" onClick={handleShowPayslip}>
//                                     View Payslip
//                                 </button>
//                                 <button className="btn btn-outline-primary" onClick={handlePayHistory}>
//                                     Pay History
//                                 </button>
//                             </>
//                         ) : (
//                             <button className="btn btn-primary" onClick={handleShowPayslip}>
//                                 View Payslip
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PayComponent;
import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

Chart.register(ArcElement, Tooltip, Legend);

const PayComponent = ({ empId, month, year, employeeDetails: initialEmployeeDetails = {}, isDashboard = false }) => {
    const [employeeDetails, setEmployeeDetails] = useState(initialEmployeeDetails);
    const [salaryDetails, setSalaryDetails] = useState({});
    const [masked, setMasked] = useState(true);
    const [chartData, setChartData] = useState({
        labels: ['Take Home', 'Deductions'],
        datasets: [{
            data: [0, 0],
            backgroundColor: ['#28a745', '#dc3545']
        }]
    });
    const [currentMonth, setCurrentMonth] = useState('');
    const navigate = useNavigate();

    const getPreviousMonth = () => {
        const date = new Date();
        date.setMonth(date.getMonth() - 1);
        return { month: date.getMonth() + 1, year: date.getFullYear() };
    };

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const { month: prevMonth, year: prevYear } = getPreviousMonth();
                const targetMonth = month || prevMonth;
                const targetYear = year || prevYear;

                // Fetch employee details if not provided
                if (!initialEmployeeDetails.employeeId) {
                    const employeeResponse = await axios.get(`http://localhost:8882/payroll/employeeDetails/${empId}`);
                    setEmployeeDetails(employeeResponse.data);
                }

                // Fetch salary details
                const salaryResponse = await axios.get(`http://localhost:8882/payroll/details`, {
                    params: { employeeId: empId, year: targetYear, month: targetMonth }
                });
                const data = salaryResponse.data;
                setSalaryDetails({
                    basicPay: data.basicPay,
                    houseRentAllowance: data.houseRentAllowance,
                    specialAllowance: data.specialAllowance,
                    epf: data.epf,
                    incomeTax: data.incomeTax,
                    professionalTax: data.professionalTax,
                    lop: data.lop,
                    grossEarning: data.grossEarning,
                    grossDeduction: data.grossDeduction,
                    netPay: data.netPay,
                    ytdBasicPay: data.ytdBasicPay,
                    ytdHouseRentAllowance: data.ytdHouseRentAllowance,
                    ytdSpecialAllowance: data.ytdSpecialAllowance,
                    ytdEpf: data.ytdEpf,
                    ytdIncomeTax: data.ytdIncomeTax,
                    ytdProfessionalTax: data.ytdProfessionalTax,
                    ytdGrossEarnings: data.ytdGrossEarnings,
                    ytdGrossDeductions: data.ytdGrossDeductions
                });
                setChartData({
                    labels: ['Take Home', 'Deductions'],
                    datasets: [{
                        data: [data.netPay, data.grossDeduction],
                        backgroundColor: ['#28a745', '#dc3545']
                    }]
                });
                setCurrentMonth(`${new Date(targetYear, targetMonth - 1).toLocaleString('default', { month: 'short' })}'${targetYear.toString().slice(-2)}`);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDetails();
    }, [empId, month, year, initialEmployeeDetails.employeeId]);

    const toggleVisibility = () => {
        setMasked(!masked);
    };

    const handleShowPayslip = () => {
        const { month: prevMonth, year: prevYear } = getPreviousMonth();
        const targetMonth = month || prevMonth;
        const targetYear = year || prevYear;
        navigate('/payslip', { state: { employeeDetails, salaryDetails, month: targetMonth, year: targetYear } });
    };

    const handlePayHistory = () => {
        navigate('/payhistory', { state: { employeeDetails } });
    };

    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        const label = chartData.labels[tooltipItem.dataIndex];
                        const value = chartData.datasets[0].data[tooltipItem.dataIndex];
                        return `${label}: ₹ ${value.toLocaleString()}`;
                    }
                }
            },
            legend: {
                display: false
            }
        },
        cutout: '80%'
    };

    return (
        // <div className="container mt-5">
        //     <div className="card shadow" style={{ maxWidth: '400px', margin: '0 auto' }}>
        //         <div className="card-body">
        //             <h4 className="card-title">{isDashboard ? 'Pay' : currentMonth}</h4>
        //             <div className="d-flex justify-content-between align-items-center">
        //                 <span>Gross pay</span>
        //                 <div className="d-flex align-items-center">
        //                     <span className="salary-mask">
        //                         ₹ {masked ? '*******' : salaryDetails.grossEarning}
        //                     </span>
        //                     <FontAwesomeIcon
        //                         icon={masked ? faEye : faEyeSlash}
        //                         className="ms-2"
        //                         onClick={toggleVisibility}
        //                         style={{ cursor: 'pointer' }}
        //                     />
        //                 </div>
        //             </div>
        //             <div className="d-flex align-items-center mt-3">
        //                 <div style={{ width: '200px', height: '200px', position: 'relative' }}>
        //                     <Doughnut data={chartData} options={options} />
        //                     <div className="position-absolute top-50 start-50 translate-middle text-center" style={{ pointerEvents: 'none' }}>
        //                         <strong><small>{currentMonth}</small></strong>
        //                     </div>
        //                 </div>
        //                 <div className="ms-4">
        //                     <div className="d-flex justify-content-between">
        //                         <span>Take home</span>
        //                         <span className="salary-mask">
        //                             ₹ {masked ? '*******' : salaryDetails.netPay}
        //                         </span>
        //                     </div>
        //                     <div className="mt-3 d-flex justify-content-between">
        //                         <span>Deductions</span>
        //                         <span className="salary-mask">
        //                             ₹ {masked ? '*******' : salaryDetails.grossDeduction}
        //                         </span>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="mt-4 d-flex justify-content-around">
        //                 {isDashboard ? (
        //                     <>
        //                         <button className="btn btn-primary" onClick={handleShowPayslip}>
        //                             View Payslip
        //                         </button>
        //                         <button className="btn btn-outline-primary" onClick={handlePayHistory}>
        //                             Pay History
        //                         </button>
        //                     </>
        //                 ) : (
        //                     <button className="btn btn-primary" onClick={handleShowPayslip}>
        //                         View Payslip
        //                     </button>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <Card className="shadow mt-5" style={{ maxWidth: '400px', margin: '0 auto' }}>
    <Card.Body>
        <Card.Title>{isDashboard ? 'Pay' : currentMonth}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
            <span>Gross pay</span>
            <div className="d-flex align-items-center">
                <span className="salary-mask">
                    ₹ {masked ? '*******' : salaryDetails.grossEarning}
                </span>
                <FontAwesomeIcon
                    icon={masked ? faEye : faEyeSlash}
                    className="ms-2"
                    onClick={toggleVisibility}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        </div>
        <div className="d-flex align-items-center mt-3">
            <div style={{ width: '200px', height: '200px', position: 'relative' }}>
                <Doughnut data={chartData} options={options} />
                <div className="position-absolute top-50 start-50 translate-middle text-center" style={{ pointerEvents: 'none' }}>
                    <strong><small>{currentMonth}</small></strong>
                </div>
            </div>
            <div className="ms-4">
                <div className="d-flex justify-content-between">
                    <span>Take home</span>
                    <span className="salary-mask">
                        ₹ {masked ? '*******' : salaryDetails.netPay}
                    </span>
                </div>
                <div className="mt-3 d-flex justify-content-between">
                    <span>Deductions</span>
                    <span className="salary-mask">
                        ₹ {masked ? '*******' : salaryDetails.grossDeduction}
                    </span>
                </div>
            </div>
        </div>
        <div className="mt-4 d-flex justify-content-around">
            {isDashboard ? (
                <>
                    <Button variant="primary" onClick={handleShowPayslip}>
                        View Payslip
                    </Button>
                    <Button variant="outline-primary" onClick={handlePayHistory}>
                        Pay History
                    </Button>
                </>
            ) : (
                <Button variant="primary" onClick={handleShowPayslip}>
                    View Payslip
                </Button>
            )}
        </div>
    </Card.Body>
</Card>

    );
};

export default PayComponent;
