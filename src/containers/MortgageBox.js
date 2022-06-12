import React, {useState} from "react";
import MortgageDeets from "../components/MortgageDeets";
import Form from "../components/Form";

const MortgageBox= () => {

    const [borrowingAmount, setBorrowingAmount] = useState(0)
    const [payBack, setPayBack] = useState(0)


    // const [results, setResults] =  useState(

       

    //     [
    //         {   
    //             // id : 1,
    //             // loanAmount: "Irrelevant dead end",
    //             // loanTotal: "irrelevent dead end"
    //         }

    //     ]
    // )

    const calculateMortgage = (value1, value2) => ((value1 + value2) * 3);
    const calculateLoanTotal = () => (calculateMortgage * 1.02);
    console.log(calculateMortgage)
    


       
    // const addIncome = (submittedIncome) => {
    //     submittedIncome.id = Date.now();
    //     const updatedIncome = [...income, submittedIncome];
    //     setIncome(updatedIncome)
    // }




    return(
        <>
        <h1>    Mortgage Results </h1>

        {/* < MortgageDeets results={results} />

        <h2>Add income details</h2> */}

        <Form 
        calculateMortgage = {calculateMortgage} 
        setBorrowingAmount = {setBorrowingAmount}
        payBack = {calculateLoanTotal}/>

        <h4>You Can Borrow : {borrowingAmount}</h4>
        <h4>Your loan plus interest : {payBack}</h4>

        {/* <Form onIncomeSubmit={(income) => addIncome(income)}/> */}
        
        </>
        );
  
}

export default MortgageBox 

