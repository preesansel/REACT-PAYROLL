
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//     };

//     const getMonthsInFinancialYear = (financialYear) => {
//         const [startYear, endYear] = financialYear.split('-').map(Number);
//         const today = new Date();
//         const currentMonth = today.getMonth() + 1;
//         const currentYear = today.getFullYear();

//         let months = [];

//         if (financialYear === getCurrentFinancialYear()) {
//             const limitMonth = currentMonth - 1;
//             months = [
//                 ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ];
//         } else {
//             months = [
//                 ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ];
//         }

//         return months;
//     };

//     const monthsInSelectedYear = getMonthsInFinancialYear(selectedFinancialYear);

//     return (
//         <div className="container mt-5">
//             <h3>Pay Info</h3>
//             <div className="form-group">
//                 <label htmlFor="financialYear">Financial Year</label>
//                 <select
//                     id="financialYear"
//                     className="form-control"
//                     value={selectedFinancialYear}
//                     onChange={handleFinancialYearChange}
//                 >
//                     {financialYears.map(fy => (
//                         <option key={fy} value={fy}>{fy}</option>
//                     ))}
//                 </select>
//             </div>
//             <div className="row">
//                 {monthsInSelectedYear.map(({ month, year }) => (
//                     <div key={`${year}-${month}`} className="col-md-6 mb-4">
//                         <PayComponent empId={employeeDetails.employeeId} month={month} year={year} employeeDetails={employeeDetails} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default PayHistory;
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
//     const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
//     const [selectedMonth, setSelectedMonth] = useState(null);

//     useEffect(() => {
//         setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear));
//     }, [selectedFinancialYear]);

//     useEffect(() => {
//         if (monthsInSelectedYear.length > 0) {
//             setSelectedMonth(monthsInSelectedYear[0].month);
//         }
//     }, [monthsInSelectedYear]);

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//     };

//     const handleMonthChange = (event) => {
//         setSelectedMonth(Number(event.target.value));
//     };

//     const getMonthsInFinancialYear = (financialYear) => {
//         const [startYear, endYear] = financialYear.split('-').map(Number);
//         const today = new Date();
//         const currentMonth = today.getMonth() + 1;
//         const currentYear = today.getFullYear();

//         let months = [];

//         if (financialYear === getCurrentFinancialYear()) {
//             const limitMonth = currentMonth - 1;
//             months = [
//                 ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ];
//         } else {
//             months = [
//                 ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ];
//         }

//         return months;
//     };

//     return (
//         <div className="container mt-5">
//             <h3>Pay Info</h3>
//             <div className="form-group">
//                 <label htmlFor="financialYear">Financial Year</label>
//                 <select
//                     id="financialYear"
//                     className="form-control"
//                     value={selectedFinancialYear}
//                     onChange={handleFinancialYearChange}
//                 >
//                     {financialYears.map(fy => (
//                         <option key={fy} value={fy}>{fy}</option>
//                     ))}
//                 </select>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="month">Month</label>
//                 <select
//                     id="month"
//                     className="form-control"
//                     value={selectedMonth}
//                     onChange={handleMonthChange}
//                 >
//                     {monthsInSelectedYear.map(({ month }) => (
//                         <option key={month} value={month}>
//                             {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             <div className="row">
//                 {monthsInSelectedYear
//                     .filter(({ month }) => month === selectedMonth)
//                     .map(({ month, year }) => (
//                         <div key={`${year}-${month}`} className="col-md-6 mb-4">
//                             <PayComponent empId={employeeDetails.employeeId} month={month} year={year} employeeDetails={employeeDetails} />
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default PayHistory;
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
//     const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
//     const [selectedMonth, setSelectedMonth] = useState(null);

//     useEffect(() => {
//         setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear));
//     }, [selectedFinancialYear]);

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//         setSelectedMonth(null);
//     };

//     const handleMonthChange = (event) => {
//         setSelectedMonth(Number(event.target.value));
//     };

//     const getMonthsInFinancialYear = (financialYear) => {
//         const [startYear, endYear] = financialYear.split('-').map(Number);
//         const today = new Date();
//         const currentMonth = today.getMonth() + 1;
//         const currentYear = today.getFullYear();

//         let months = [];

//         if (financialYear === getCurrentFinancialYear()) {
//             const limitMonth = currentMonth - 1;
//             months = [
//                 ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ];
//         } else {
//             months = [
//                 ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ];
//         }

//         return months;
//     };

//     return (
//         <div className="container mt-5">
//             <h3>Pay Info</h3>
//             <div className="form-group">
//                 <label htmlFor="financialYear">Financial Year</label>
//                 <select
//                     id="financialYear"
//                     className="form-control"
//                     value={selectedFinancialYear}
//                     onChange={handleFinancialYearChange}
//                 >
//                     {financialYears.map(fy => (
//                         <option key={fy} value={fy}>{fy}</option>
//                     ))}
//                 </select>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="month">Month</label>
//                 <select
//                     id="month"
//                     className="form-control"
//                     value={selectedMonth || ''}
//                     onChange={handleMonthChange}
//                 >
//                     <option value=''>All Months</option>
//                     {monthsInSelectedYear.map(({ month }) => (
//                         <option key={month} value={month}>
//                             {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             <div className="row">
//                 {monthsInSelectedYear
//                     .filter(({ month }) => !selectedMonth || month === selectedMonth)
//                     .map(({ month, year }) => (
//                         <div key={`${year}-${month}`} className="col-md-6 mb-4">
//                             <PayComponent empId={employeeDetails.employeeId} month={month} year={year} employeeDetails={employeeDetails} />
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default PayHistory;
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
//     const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
//     const [selectedMonth, setSelectedMonth] = useState(null);

//     useEffect(() => {
//         setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear));
//     }, [selectedFinancialYear]);

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//         setSelectedMonth(null);
//     };

//     const handleMonthChange = (event) => {
//         setSelectedMonth(Number(event.target.value));
//     };

//     const getMonthsInFinancialYear = (financialYear) => {
//         const [startYear, endYear] = financialYear.split('-').map(Number);
//         const today = new Date();
//         const currentMonth = today.getMonth() + 1;
//         const currentYear = today.getFullYear();

//         let months = [];

//         if (financialYear === getCurrentFinancialYear()) {
//             const limitMonth = currentMonth - 1;
//             months = [
//                 ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ];
//         } else {
//             months = [
//                 ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ];
//         }

//         return months;
//     };

//     return (
//         <div className="container mt-5">
//             <h3>Pay Info</h3>
//             <div className="form-row">
//                 <div className="form-group col-md-6">
//                     <label htmlFor="financialYear">Financial Year</label>
//                     <select
//                         id="financialYear"
//                         className="form-control"
//                         value={selectedFinancialYear}
//                         onChange={handleFinancialYearChange}
//                     >
//                         {financialYears.map(fy => (
//                             <option key={fy} value={fy}>{fy}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="form-group col-md-6">
//                     <label htmlFor="month">Month</label>
//                     <select
//                         id="month"
//                         className="form-control"
//                         value={selectedMonth || ''}
//                         onChange={handleMonthChange}
//                     >
//                         <option value=''>All Months</option>
//                         {monthsInSelectedYear.map(({ month }) => (
//                             <option key={month} value={month}>
//                                 {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>
//             <div className="row">
//                 {monthsInSelectedYear
//                     .filter(({ month }) => !selectedMonth || month === selectedMonth)
//                     .map(({ month, year }) => (
//                         <div key={`${year}-${month}`} className="col-md-6 mb-4">
//                             <PayComponent empId={employeeDetails.employeeId} month={month} year={year} employeeDetails={employeeDetails} />
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default PayHistory;
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
//     const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
//     const [selectedMonth, setSelectedMonth] = useState(null);

//     useEffect(() => {
//         setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear));
//     }, [selectedFinancialYear]);

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//         setSelectedMonth(null);
//     };

//     const handleMonthChange = (event) => {
//         setSelectedMonth(Number(event.target.value));
//     };

//     const getMonthsInFinancialYear = (financialYear) => {
//         const [startYear, endYear] = financialYear.split('-').map(Number);
//         const today = new Date();
//         const currentMonth = today.getMonth() + 1;
//         const currentYear = today.getFullYear();

//         let months = [];

//         if (financialYear === getCurrentFinancialYear()) {
//             const limitMonth = currentMonth - 1;
//             months = [
//                 ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ];
//         } else {
//             months = [
//                 ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ];
//         }

//         return months;
//     };

//     return (
//         <div className="container mt-5">
//             <h3>Pay Info</h3>
//             <div className="form-row align-items-center">
//                 <div className="col-md-6">
//                     <label htmlFor="financialYear">Financial Year</label>
//                     <select
//                         id="financialYear"
//                         className="form-control"
//                         value={selectedFinancialYear}
//                         onChange={handleFinancialYearChange}
//                     >
//                         {financialYears.map(fy => (
//                             <option key={fy} value={fy}>{fy}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="month">Month</label>
//                     <select
//                         id="month"
//                         className="form-control"
//                         value={selectedMonth || ''}
//                         onChange={handleMonthChange}
//                     >
//                         <option value=''>All Months</option>
//                         {monthsInSelectedYear.map(({ month }) => (
//                             <option key={month} value={month}>
//                                 {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>
//             <div className="row mt-4">
//                 {monthsInSelectedYear
//                     .filter(({ month }) => !selectedMonth || month === selectedMonth)
//                     .map(({ month, year }) => (
//                         <div key={`${year}-${month}`} className="col-md-6 mb-4">
//                             <PayComponent empId={employeeDetails.employeeId} month={month} year={year} employeeDetails={employeeDetails} />
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default PayHistory;

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// // Utility function to get months in a given financial year
// const getMonthsInFinancialYear = (financialYear, joiningDate) => {
//     const [startYear, endYear] = financialYear.split('-').map(Number);
//     const today = new Date();
//     const currentMonth = today.getMonth() + 1;
//     const currentYear = today.getFullYear();
//     const joiningYear = new Date(joiningDate).getFullYear();
//     const joiningMonth = new Date(joiningDate).getMonth() + 1;

//     let months = [];

//     // If the selected financial year is the current financial year
//     if (financialYear === getCurrentFinancialYear()) {
//         const limitMonth = currentMonth - 1;
//         months = [
//             ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//             ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//         ];
//     } else {
//         months = [
//             ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//             ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//         ];
//     }

//     // Filter months based on joining date
//     return months.filter(({ month, year }) => {
//         if (year === joiningYear && month < joiningMonth) {
//             return false;
//         }
//         return true;
//     });
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
//     const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
//     const [selectedMonth, setSelectedMonth] = useState(null);

//     useEffect(() => {
//         setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear, joiningDate));
//     }, [selectedFinancialYear, joiningDate]);

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//         setSelectedMonth(null);
//     };

//     const handleMonthChange = (event) => {
//         setSelectedMonth(Number(event.target.value));
//     };

//     return (
//         <div className="container mt-5">
//             <h3>Pay Info</h3>
//             <div className="form-row align-items-center">
//                 <div className="col-md-6">
//                     <label htmlFor="financialYear">Financial Year</label>
//                     <select
//                         id="financialYear"
//                         className="form-control"
//                         value={selectedFinancialYear}
//                         onChange={handleFinancialYearChange}
//                     >
//                         {financialYears.map(fy => (
//                             <option key={fy} value={fy}>{fy}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="month">Month</label>
//                     <select
//                         id="month"
//                         className="form-control"
//                         value={selectedMonth || ''}
//                         onChange={handleMonthChange}
//                     >
//                         <option value=''>All Months</option>
//                         {monthsInSelectedYear.map(({ month }) => (
//                             <option key={month} value={month}>
//                                 {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>
//             <div className="row mt-4">
//                 {monthsInSelectedYear
//                     .filter(({ month }) => !selectedMonth || month === selectedMonth)
//                     .map(({ month, year }) => (
//                         <div key={`${year}-${month}`} className="col-md-6 mb-4">
//                             <PayComponent empId={employeeDetails.employeeId} month={month} year={year} employeeDetails={employeeDetails} />
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default PayHistory;
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// // Utility function to get months in a given financial year
// const getMonthsInFinancialYear = (financialYear, joiningDate) => {
//     const [startYear, endYear] = financialYear.split('-').map(Number);
//     const today = new Date();
//     const currentMonth = today.getMonth() + 1;
//     const currentYear = today.getFullYear();
//     const joiningYear = new Date(joiningDate).getFullYear();
//     const joiningMonth = new Date(joiningDate).getMonth() + 1;

//     let months = [];

//     // If the selected financial year is the current financial year
//     if (financialYear === getCurrentFinancialYear()) {
//         const limitMonth = currentMonth - 1;
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: limitMonth - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: limitMonth }, (_, i) => ({ month: i + 1, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     } else {
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: 12 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: 3 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     }

//     return months;
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
//     const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
//     const [selectedMonth, setSelectedMonth] = useState(null);

//     useEffect(() => {
//         setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear, joiningDate));
//     }, [selectedFinancialYear, joiningDate]);

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//         setSelectedMonth(null);
//     };

//     const handleMonthChange = (event) => {
//         setSelectedMonth(Number(event.target.value));
//     };

//     return (
//         <div className="container mt-5">
//             <h3>Pay Info</h3>
//             <div className="form-row align-items-center">
//                 <div className="col-md-6">
//                     <label htmlFor="financialYear">Financial Year</label>
//                     <select
//                         id="financialYear"
//                         className="form-control"
//                         value={selectedFinancialYear}
//                         onChange={handleFinancialYearChange}
//                     >
//                         {financialYears.map(fy => (
//                             <option key={fy} value={fy}>{fy}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="month">Month</label>
//                     <select
//                         id="month"
//                         className="form-control"
//                         value={selectedMonth || ''}
//                         onChange={handleMonthChange}
//                     >
//                         <option value=''>All Months</option>
//                         {monthsInSelectedYear.map(({ month }) => (
//                             <option key={month} value={month}>
//                                 {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>
//             <div className="row mt-4">
//                 {monthsInSelectedYear
//                     .filter(({ month }) => !selectedMonth || month === selectedMonth)
//                     .map(({ month, year }) => (
//                         <div key={`${year}-${month}`} className="col-md-6 mb-4">
//                             <PayComponent empId={employeeDetails.employeeId} month={month} year={year} employeeDetails={employeeDetails} />
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default PayHistory;
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// // Utility function to get months in a given financial year
// const getMonthsInFinancialYear = (financialYear, joiningDate) => {
//     const [startYear, endYear] = financialYear.split('-').map(Number);
//     const today = new Date();
//     const currentMonth = today.getMonth() + 1;
//     const currentYear = today.getFullYear();
//     const joiningYear = new Date(joiningDate).getFullYear();
//     const joiningMonth = new Date(joiningDate).getMonth() + 1;

//     let months = [];

//     // If the selected financial year is the current financial year
//     if (financialYear === getCurrentFinancialYear()) {
//         const limitMonth = currentMonth - 1;
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: limitMonth - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: limitMonth }, (_, i) => ({ month: i + 1, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     } else {
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: 12 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: 3 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     }

//     return months;
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
//     const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
//     const [selectedMonth, setSelectedMonth] = useState(null);

//     useEffect(() => {
//         setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear, joiningDate));
//     }, [selectedFinancialYear, joiningDate]);

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//         setSelectedMonth(null);
//     };

//     const handleMonthChange = (event) => {
//         setSelectedMonth(Number(event.target.value));
//     };

//     return (
//         <div className="container mt-5">
//             <h3>Pay Info</h3>
//             <div className="form-row align-items-center">
//                 <div className="col-md-6">
//                     <label htmlFor="financialYear">Financial Year</label>
//                     <select
//                         id="financialYear"
//                         className="form-control"
//                         value={selectedFinancialYear}
//                         onChange={handleFinancialYearChange}
//                     >
//                         {financialYears.map(fy => (
//                             <option key={fy} value={fy}>{fy}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="month">Month</label>
//                     <select
//                         id="month"
//                         className="form-control"
//                         value={selectedMonth || ''}
//                         onChange={handleMonthChange}
//                     >
//                         <option value=''>All Months</option>
//                         {monthsInSelectedYear.map(({ month }) => (
//                             <option key={month} value={month}>
//                                 {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>
//             <div className="row mt-4">
//                 {monthsInSelectedYear
//                     .filter(({ month }) => !selectedMonth || month === selectedMonth)
//                     .map(({ month, year }) => (
//                         <div key={`${year}-${month}`} className="col-md-6 mb-4">
//                             <PayComponent empId={employeeDetails.employeeId} month={month} year={year} employeeDetails={employeeDetails} />
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default PayHistory;
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// // Utility function to get months in a given financial year
// const getMonthsInFinancialYear = (financialYear, joiningDate) => {
//     const [startYear, endYear] = financialYear.split('-').map(Number);
//     const today = new Date();
//     const currentMonth = today.getMonth() + 1;
//     const joiningYear = new Date(joiningDate).getFullYear();
//     const joiningMonth = new Date(joiningDate).getMonth() + 1;

//     let months = [];

//     // If the selected financial year is the current financial year
//     if (financialYear === getCurrentFinancialYear()) {
//         const limitMonth = currentMonth - 1;
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: limitMonth - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: limitMonth }, (_, i) => ({ month: i + 1, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     } else {
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: 12 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: 3 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     }

//     return months;
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
//     const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
//     const [selectedMonth, setSelectedMonth] = useState(null);

//     useEffect(() => {
//         setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear, joiningDate));
//     }, [selectedFinancialYear, joiningDate]);

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//         setSelectedMonth(null);
//     };

//     const handleMonthChange = (event) => {
//         setSelectedMonth(Number(event.target.value));
//     };

//     return (
//         <div className="container mt-5">
//             <h3>Pay Info</h3>
//             <div className="form-row align-items-center">
//                 <div className="col-md-6">
//                     <label htmlFor="financialYear">Financial Year</label>
//                     <select
//                         id="financialYear"
//                         className="form-control"
//                         value={selectedFinancialYear}
//                         onChange={handleFinancialYearChange}
//                     >
//                         {financialYears.map(fy => (
//                             <option key={fy} value={fy}>{fy}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="month">Month</label>
//                     <select
//                         id="month"
//                         className="form-control"
//                         value={selectedMonth || ''}
//                         onChange={handleMonthChange}
//                     >
//                         {monthsInSelectedYear.map(({ month }) => (
//                             <option key={month} value={month}>
//                                 {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>
//             <div className="row mt-4">
//                 {monthsInSelectedYear
//                     .filter(({ month }) => !selectedMonth || month === selectedMonth)
//                     .map(({ month, year }) => (
//                         <div key={`${year}-${month}`} className="col-md-6 mb-4">
//                             <PayComponent empId={employeeDetails.employeeId} month={month} year={year} employeeDetails={employeeDetails} />
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default PayHistory;
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// // Utility function to get months in a given financial year
// const getMonthsInFinancialYear = (financialYear, joiningDate) => {
//     const [startYear, endYear] = financialYear.split('-').map(Number);
//     const today = new Date();
//     const currentMonth = today.getMonth() + 1;
//     const joiningYear = new Date(joiningDate).getFullYear();
//     const joiningMonth = new Date(joiningDate).getMonth() + 1;

//     let months = [];

//     // If the selected financial year is the current financial year
//     if (financialYear === getCurrentFinancialYear()) {
//         const limitMonth = currentMonth - 1;
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: limitMonth - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: limitMonth }, (_, i) => ({ month: i + 1, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     } else {
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: 12 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: 3 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     }

//     return months;
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
//     const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
//     const [selectedMonth, setSelectedMonth] = useState('');

//     useEffect(() => {
//         setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear, joiningDate));
//     }, [selectedFinancialYear, joiningDate]);

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//         setSelectedMonth('');
//     };

//     const handleMonthChange = (event) => {
//         setSelectedMonth(event.target.value);
//     };

//     return (
//         <div className="container mt-5">
//             <h3>Pay Info</h3>
//             <div className="form-row align-items-center">
//                 <div className="col-md-6">
//                     <label htmlFor="financialYear">Financial Year</label>
//                     <select
//                         id="financialYear"
//                         className="form-control"
//                         value={selectedFinancialYear}
//                         onChange={handleFinancialYearChange}
//                     >
//                         {financialYears.map(fy => (
//                             <option key={fy} value={fy}>{fy}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="month">Month</label>
//                     <select
//                         id="month"
//                         className="form-control"
//                         value={selectedMonth}
//                         onChange={handleMonthChange}
//                     >
//                         <option value="">Select month</option>
//                         {monthsInSelectedYear.map(({ month }) => (
//                             <option key={month} value={month}>
//                                 {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>
//             <div className="row mt-4">
//                 {selectedMonth && monthsInSelectedYear
//                     .filter(({ month }) => month === parseInt(selectedMonth))
//                     .map(({ month, year }) => (
//                         <div key={`${year}-${month}`} className="col-md-6 mb-4">
//                             <PayComponent empId={employeeDetails.employeeId} month={month} year={year} employeeDetails={employeeDetails} />
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default PayHistory;
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// // Utility function to get months in a given financial year
// const getMonthsInFinancialYear = (financialYear, joiningDate) => {
//     const [startYear, endYear] = financialYear.split('-').map(Number);
//     const today = new Date();
//     const currentMonth = today.getMonth() + 1;
//     const joiningYear = new Date(joiningDate).getFullYear();
//     const joiningMonth = new Date(joiningDate).getMonth() + 1;

//     let months = [];

//     // If the selected financial year is the current financial year
//     if (financialYear === getCurrentFinancialYear()) {
//         const limitMonth = currentMonth - 1;
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: limitMonth - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: limitMonth }, (_, i) => ({ month: i + 1, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     } else {
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: 12 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: 3 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     }

//     return months;
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
//     const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
//     const [selectedMonth, setSelectedMonth] = useState('');

//     useEffect(() => {
//         setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear, joiningDate));
//     }, [selectedFinancialYear, joiningDate]);

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//         setSelectedMonth('');
//     };

//     const handleMonthChange = (event) => {
//         setSelectedMonth(event.target.value);
//     };

//     return (
//         <div className="container mt-5">
//             <h3>Pay Info</h3>
//             <div className="form-row align-items-center mb-3">
//                 <div className="col-md-6 mb-2">
//                     <label htmlFor="financialYear" className="form-label">Financial Year</label>
//                     <select
//                         id="financialYear"
//                         className="form-select"
//                         value={selectedFinancialYear}
//                         onChange={handleFinancialYearChange}
//                     >
//                         {financialYears.map(fy => (
//                             <option key={fy} value={fy}>{fy}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="col-md-6 mb-2">
//                     <label htmlFor="month" className="form-label">Month</label>
//                     <select
//                         id="month"
//                         className="form-select"
//                         value={selectedMonth}
//                         onChange={handleMonthChange}
//                     >
//                         <option value="">Select month</option>
//                         {monthsInSelectedYear.map(({ month }) => (
//                             <option key={month} value={month}>
//                                 {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>
//             <div className="row mt-4">
//                 {selectedMonth && monthsInSelectedYear
//                     .filter(({ month }) => month === parseInt(selectedMonth))
//                     .map(({ month, year }) => (
//                         <div key={`${year}-${month}`} className="col-md-6 mb-4">
//                             <PayComponent empId={employeeDetails.employeeId} month={month} year={year} employeeDetails={employeeDetails} />
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default PayHistory;
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// // Utility function to get months in a given financial year
// const getMonthsInFinancialYear = (financialYear, joiningDate) => {
//     const [startYear, endYear] = financialYear.split('-').map(Number);
//     const today = new Date();
//     const currentMonth = today.getMonth() + 1;
//     const joiningYear = new Date(joiningDate).getFullYear();
//     const joiningMonth = new Date(joiningDate).getMonth() + 1;

//     let months = [];

//     // If the selected financial year is the current financial year
//     if (financialYear === getCurrentFinancialYear()) {
//         const limitMonth = currentMonth - 1;
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: limitMonth - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: limitMonth }, (_, i) => ({ month: i + 1, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     } else {
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: 12 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: 3 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     }

//     return months;
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
//     const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
//     const [selectedMonth, setSelectedMonth] = useState('');

//     useEffect(() => {
//         setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear, joiningDate));
//     }, [selectedFinancialYear, joiningDate]);

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//         setSelectedMonth('');
//     };

//     const handleMonthChange = (event) => {
//         setSelectedMonth(event.target.value);
//     };

//     return (
//         <div className="container mt-5">
//             <h3>Pay Info</h3>
//             <div className="row">
//                 <div className="col-md-4">
//                     <div className="mb-3">
//                         <label htmlFor="financialYear" className="form-label">Financial Year</label>
//                         <select
//                             id="financialYear"
//                             className="form-select"
//                             value={selectedFinancialYear}
//                             onChange={handleFinancialYearChange}
//                         >
//                             {financialYears.map(fy => (
//                                 <option key={fy} value={fy}>{fy}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="month" className="form-label">Month</label>
//                         <select
//                             id="month"
//                             className="form-select"
//                             value={selectedMonth}
//                             onChange={handleMonthChange}
//                         >
//                             <option value="">Select month</option>
//                             {monthsInSelectedYear.map(({ month }) => (
//                                 <option key={month} value={month}>
//                                     {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>
//                 <div className="col-md-8">
//                     {selectedMonth && monthsInSelectedYear
//                         .filter(({ month }) => month === parseInt(selectedMonth))
//                         .map(({ month, year }) => (
//                             <PayComponent
//                                 key={`${year}-${month}`}
//                                 empId={employeeDetails.employeeId}
//                                 month={month}
//                                 year={year}
//                                 employeeDetails={employeeDetails}
//                             />
//                         ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PayHistory;
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// // Utility function to get months in a given financial year
// const getMonthsInFinancialYear = (financialYear, joiningDate) => {
//     const [startYear, endYear] = financialYear.split('-').map(Number);
//     const today = new Date();
//     const currentMonth = today.getMonth() + 1;
//     const joiningYear = new Date(joiningDate).getFullYear();
//     const joiningMonth = new Date(joiningDate).getMonth() + 1;

//     let months = [];

//     // If the selected financial year is the current financial year
//     if (financialYear === getCurrentFinancialYear()) {
//         const limitMonth = currentMonth - 1;
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: limitMonth - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: limitMonth }, (_, i) => ({ month: i + 1, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     } else {
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: 12 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: 3 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     }

//     return months;
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
//     const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
//     const [selectedMonth, setSelectedMonth] = useState('');

//     useEffect(() => {
//         setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear, joiningDate));
//     }, [selectedFinancialYear, joiningDate]);

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//         setSelectedMonth('');
//     };

//     const handleMonthChange = (event) => {
//         setSelectedMonth(event.target.value);
//     };

//     return (
//         <div className="container mt-5">
//             <h3 >Pay Info</h3>
//             <div className="d-flex justify-content-between align-items-center">
//                 <div className="col-md-8">
//                     {selectedMonth && monthsInSelectedYear
//                         .filter(({ month }) => month === parseInt(selectedMonth))
//                         .map(({ month, year }) => (
//                             <PayComponent
//                                 key={`${year}-${month}`}
//                                 empId={employeeDetails.employeeId}
//                                 month={month}
//                                 year={year}
//                                 employeeDetails={employeeDetails}
//                             />
//                         ))}
//                 </div>
//                 <div className="col-md-4">
//                     <div className="mb-3">
//                         <label htmlFor="financialYear" className="form-label">Financial Year</label>
//                         <select
//                             id="financialYear"
//                             className="form-select"
//                             value={selectedFinancialYear}
//                             onChange={handleFinancialYearChange}
//                         >
//                             {financialYears.map(fy => (
//                                 <option key={fy} value={fy}>{fy}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="month" className="form-label">Month</label>
//                         <select
//                             id="month"
//                             className="form-select"
//                             value={selectedMonth}
//                             onChange={handleMonthChange}
//                         >
//                             <option value="">Select month</option>
//                             {monthsInSelectedYear.map(({ month }) => (
//                                 <option key={month} value={month}>
//                                     {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PayHistory;



// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';
// import { Card, Form, Row, Col } from 'react-bootstrap';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// // Utility function to get months in a given financial year
// const getMonthsInFinancialYear = (financialYear, joiningDate) => {
//     const [startYear, endYear] = financialYear.split('-').map(Number);
//     const today = new Date();
//     const currentMonth = today.getMonth() + 1;
//     const joiningYear = new Date(joiningDate).getFullYear();
//     const joiningMonth = new Date(joiningDate).getMonth() + 1;

//     let months = [];

//     if (financialYear === getCurrentFinancialYear()) {
//         const limitMonth = currentMonth - 1;
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: limitMonth - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: limitMonth }, (_, i) => ({ month: i + 1, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     } else {
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: 12 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: 3 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     }

//     return months;
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
//     const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
//     const [selectedMonth, setSelectedMonth] = useState('');

//     useEffect(() => {
//         setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear, joiningDate));
//     }, [selectedFinancialYear, joiningDate]);

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//         setSelectedMonth('');
//     };

//     const handleMonthChange = (event) => {
//         setSelectedMonth(event.target.value);
//     };

//     return (
//         <div className="container mt-5">
//             <h3>Pay Info</h3>
//             <Row>
//                 <Col md={4}>
//                     <Card>
//                         <Card.Body>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Financial Year</Form.Label>
//                                 <Form.Control
//                                     as="select"
//                                     value={selectedFinancialYear}
//                                     onChange={handleFinancialYearChange}
//                                 >
//                                     {financialYears.map(fy => (
//                                         <option key={fy} value={fy}>{fy}</option>
//                                     ))}
//                                 </Form.Control>
//                             </Form.Group>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Month</Form.Label>
//                                 <Form.Control
//                                     as="select"
//                                     value={selectedMonth}
//                                     onChange={handleMonthChange}
//                                 >
//                                     <option value="">Select month</option>
//                                     {monthsInSelectedYear.map(({ month }) => (
//                                         <option key={month} value={month}>
//                                             {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//                                         </option>
//                                     ))}
//                                 </Form.Control>
//                             </Form.Group>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={8}>
//                     {selectedMonth && monthsInSelectedYear
//                         .filter(({ month }) => month === parseInt(selectedMonth))
//                         .map(({ month, year }) => (
//                             <PayComponent
//                                 key={`${year}-${month}`}
//                                 empId={employeeDetails.employeeId}
//                                 month={month}
//                                 year={year}
//                                 employeeDetails={employeeDetails}
//                             />
//                         ))}
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default PayHistory;

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PayComponent from './payComponent';
// import { useLocation } from 'react-router-dom';
// import { Card, Form, Row, Col } from 'react-bootstrap';

// // Utility function to get current financial year
// const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
// };

// // Utility function to generate financial year options based on the joining date
// const generateFinancialYears = (joiningDate) => {
//     const currentYear = new Date().getFullYear();
//     const startYear = new Date(joiningDate).getFullYear();
//     const startMonth = new Date(joiningDate).getMonth() + 1;

//     const years = [];
//     for (let year = startYear; year <= currentYear + 1; year++) {
//         if (year === startYear && startMonth >= 4) {
//             years.push(`${year}-${year + 1}`);
//         } else if (year !== startYear || (year === startYear && startMonth < 4)) {
//             years.push(`${year - 1}-${year}`);
//         }
//     }
//     return years;
// };

// // Utility function to get months in a given financial year
// const getMonthsInFinancialYear = (financialYear, joiningDate) => {
//     const [startYear, endYear] = financialYear.split('-').map(Number);
//     const today = new Date();
//     const currentMonth = today.getMonth() + 1;
//     const joiningYear = new Date(joiningDate).getFullYear();
//     const joiningMonth = new Date(joiningDate).getMonth() + 1;

//     let months = [];

//     if (financialYear === getCurrentFinancialYear()) {
//         const limitMonth = currentMonth - 1;
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: limitMonth - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: limitMonth }, (_, i) => ({ month: i + 1, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     } else {
//         if (joiningYear === startYear && joiningMonth >= 4) {
//             months = Array.from({ length: 12 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
//         } else if (joiningYear === endYear && joiningMonth < 4) {
//             months = Array.from({ length: 3 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: endYear }));
//         } else {
//             months = [
//                 ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
//                 ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
//             ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
//         }
//     }

//     return months;
// };

// const PayHistory = () => {
//     const location = useLocation();
//     const { employeeDetails } = location.state; // Get employeeDetails from location state
//     const joiningDate = employeeDetails.doj;
//     const financialYears = generateFinancialYears(joiningDate);
//     const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
//     const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
//     const [selectedMonth, setSelectedMonth] = useState('');

//     useEffect(() => {
//         setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear, joiningDate));
//     }, [selectedFinancialYear, joiningDate]);

//     const handleFinancialYearChange = (event) => {
//         setSelectedFinancialYear(event.target.value);
//         setSelectedMonth('');
//     };

//     const handleMonthChange = (event) => {
//         setSelectedMonth(event.target.value);
//     };

//     return (
//         <div className="container mt-5">
//             <h3>Pay Info</h3>
//             <Row>
//                 <Col md={4}>
//                     <Card>
//                         <Card.Body>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Financial Year</Form.Label>
//                                 <Form.Control
//                                     as="select"
//                                     value={selectedFinancialYear}
//                                     onChange={handleFinancialYearChange}
//                                 >
//                                     {financialYears.map(fy => (
//                                         <option key={fy} value={fy}>{fy}</option>
//                                     ))}
//                                 </Form.Control>
//                             </Form.Group>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Month</Form.Label>
//                                 <Form.Control
//                                     as="select"
//                                     value={selectedMonth}
//                                     onChange={handleMonthChange}
//                                 >
//                                     <option value="">Select month</option>
//                                     {monthsInSelectedYear.map(({ month }) => (
//                                         <option key={month} value={month}>
//                                             {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//                                         </option>
//                                     ))}
//                                 </Form.Control>
//                             </Form.Group>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={8}>
//                     {selectedMonth ? (
//                         monthsInSelectedYear
//                             .filter(({ month }) => month === parseInt(selectedMonth))
//                             .map(({ month, year }) => (
//                                 <Card key={`${year}-${month}`}>
//                                     <Card.Body>
//                                         <PayComponent
//                                             empId={employeeDetails.employeeId}
//                                             month={month}
//                                             year={year}
//                                             employeeDetails={employeeDetails}
//                                         />
//                                     </Card.Body>
//                                 </Card>
//                             ))
//                     ) : (
//                         <Card>
//                             <Card.Body>
//                                 <div>Select a month to view the pay details.</div>
//                             </Card.Body>
//                         </Card>
//                     )}
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default PayHistory;
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PayComponent from './payComponent';
import { useLocation } from 'react-router-dom';
import { Card, Form, Row, Col } from 'react-bootstrap';
import  payHistoryImage from './payHistoryImg.png';

// Utility function to get current financial year
const getCurrentFinancialYear = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
};

// Utility function to generate financial year options based on the joining date
const generateFinancialYears = (joiningDate) => {
    const currentYear = new Date().getFullYear();
    const startYear = new Date(joiningDate).getFullYear();
    const startMonth = new Date(joiningDate).getMonth() + 1;

    const years = [];
    for (let year = startYear; year <= currentYear + 1; year++) {
        if (year === startYear && startMonth >= 4) {
            years.push(`${year}-${year + 1}`);
        } else if (year !== startYear || (year === startYear && startMonth < 4)) {
            years.push(`${year - 1}-${year}`);
        }
    }
    return years;
};

// Utility function to get months in a given financial year
const getMonthsInFinancialYear = (financialYear, joiningDate) => {
    const [startYear, endYear] = financialYear.split('-').map(Number);
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const joiningYear = new Date(joiningDate).getFullYear();
    const joiningMonth = new Date(joiningDate).getMonth() + 1;

    let months = [];

    if (financialYear === getCurrentFinancialYear()) {
        const limitMonth = currentMonth - 1;
        if (joiningYear === startYear && joiningMonth >= 4) {
            months = Array.from({ length: limitMonth - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
        } else if (joiningYear === endYear && joiningMonth < 4) {
            months = Array.from({ length: limitMonth }, (_, i) => ({ month: i + 1, year: endYear }));
        } else {
            months = [
                ...Array.from({ length: limitMonth >= 4 ? limitMonth - 3 : 9 }, (_, i) => ({ month: i + 4, year: startYear })),
                ...Array.from({ length: limitMonth < 4 ? limitMonth : 0 }, (_, i) => ({ month: i + 1, year: endYear }))
            ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
        }
    } else {
        if (joiningYear === startYear && joiningMonth >= 4) {
            months = Array.from({ length: 12 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: startYear }));
        } else if (joiningYear === endYear && joiningMonth < 4) {
            months = Array.from({ length: 3 - (joiningMonth - 1) }, (_, i) => ({ month: i + joiningMonth, year: endYear }));
        } else {
            months = [
                ...Array.from({ length: 12 - 3 }, (_, i) => ({ month: i + 4, year: startYear })),
                ...Array.from({ length: 3 }, (_, i) => ({ month: i + 1, year: endYear }))
            ].filter(({ month, year }) => year !== joiningYear || month >= joiningMonth);
        }
    }

    return months;
};

const PayHistory = () => {
    const location = useLocation();
    const { employeeDetails } = location.state; // Get employeeDetails from location state
    const joiningDate = employeeDetails.doj;
    const financialYears = generateFinancialYears(joiningDate);
    const [selectedFinancialYear, setSelectedFinancialYear] = useState(getCurrentFinancialYear());
    const [monthsInSelectedYear, setMonthsInSelectedYear] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('');

    useEffect(() => {
        setMonthsInSelectedYear(getMonthsInFinancialYear(selectedFinancialYear, joiningDate));
    }, [selectedFinancialYear, joiningDate]);

    const handleFinancialYearChange = (event) => {
        setSelectedFinancialYear(event.target.value);
        setSelectedMonth('');
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    return (
        <div className="container mt-5">
            <h3>Pay Info</h3>
            <Row>
                <Col md={8}>
                    {selectedMonth ? (
                        monthsInSelectedYear
                            .filter(({ month }) => month === parseInt(selectedMonth))
                            .map(({ month, year }) => (
                                <Card key={`${year}-${month}`} className="shadow">
                                    <Card.Body>
                                        <PayComponent
                                            empId={employeeDetails.employeeId}
                                            month={month}
                                            year={year}
                                            employeeDetails={employeeDetails}
                                        />
                                    </Card.Body>
                                </Card>
                            ))
                    ) : (
                        <Card className="shadow mb-3">
                            <Card.Body>
                               <h5> <div>Select a financial year and month to view the pay details.</div> </h5>
                            </Card.Body>
                            <Card.Img variant="bottom" src={require('./payHistoryImg.png')}  alt="Image Alt Text"  className="mx-auto" style={{ width: '400px', height: 'auto' }} />
                        </Card>
                    )}
                </Col>
                <Col md={4}>
                    <Card className="shadow">
                        <Card.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Financial Year</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={selectedFinancialYear}
                                    onChange={handleFinancialYearChange}
                                    className="form-select"
                                    
                                >
                                    {financialYears.map(fy => (
                                        <option key={fy} value={fy}>{fy}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Month</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={selectedMonth}
                                    onChange={handleMonthChange}
                                    className="form-select"
                                >
                                    <option value="">Select month</option>
                                    {monthsInSelectedYear.map(({ month }) => (
                                        <option key={month} value={month}>
                                            {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default PayHistory;

