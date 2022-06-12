import React, {useState} from "react";
import MortgageDeets from "../components/MortgageDeets";
import Form from "../components/Form";

const MortgageBox= () => {

    const [borrowingAmount, setBorrowingAmount] = useState(0)
    const [termSplit, setTermSplit] = useState(0)



    const calculateMortgage = (value1, value2) => ((value1 + value2) * 3);

// calculateTermSplit produces  a relativley useless value but I got it working none the less which is nice.
    // How do I use calculateMortgage in the method below to condense the calculateTermSplit?
    

    // const calculateTermSplit = (value1, value2, value3) => (((value1 + value2) * 3) / value3);

    const calculateTermSplit = (value1, value2, value3) =>((calculateMortgage(value1, value2)) / value3)
    
    // console.log(calculateMortgage)
    


    return(
        <>
        <h1>    Mortgage Results </h1>

        <Form 
        calculateMortgage = {calculateMortgage} 
        setBorrowingAmount = {setBorrowingAmount}
        calculateTermSplit = {calculateTermSplit}
        setTermSplit = {setTermSplit}

        />

        <h4>You Can Borrow : {borrowingAmount}</h4>
        <h4>Borrowing amount divided by number of years : {termSplit}</h4>

        
        </>
        );
  
}

export default MortgageBox 

