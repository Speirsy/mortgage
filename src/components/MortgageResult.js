// This is like Comment - no stat no props
import React from "react";


const MortgageResult = ({loanAmount, loanTotal, children}) =>  {

    return(
            <>

        <p> Coming From MortgageResult</p>
        <p> {children}</p>
        <p> {loanAmount} </p>
        <p> {loanTotal} </p>
       
        
        </>
    ) 
}

export default MortgageResult;
