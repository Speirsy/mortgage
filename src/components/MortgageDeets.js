// This is like CommentList no state, has props
import React from "react";
import MortgageResult from "./MortgageResult";


const MortgageDeets = ({results}) => {

    const resultNodes = results.map(result => {
        
        return (
            <MortgageResult loanAmount={result.loanAmount} key={result.id}>{result.loanTotal}</MortgageResult>
        );

    });
    
    return(
        <> 
        {resultNodes}
        </>

    )
}

export default MortgageDeets;
