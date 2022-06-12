import React, {useState} from "react";
const Form = ({calculateMortgage, setBorrowingAmount, calculateLoanTotal, payBack}) => {

   

        const[incomeOne, setIncomeOne] = useState("");
        const[incomeTwo, setIncomeTwo] = useState("");
        const[term, setTerm] = useState("");

        const handleIncomeOneChange = (event) => {
            setIncomeOne(event.target.value);
        }
        const handleIncomeTwoChange = (event) => {
            setIncomeTwo(event.target.value);
        }
        const handleTermChange = (event) => {
            setTerm(event.target.value);
        }
        
        const handleFormSubmit = (event) => {
            event.preventDefault();
            const value1 = parseInt(incomeOne)
            const value2 = parseInt(incomeTwo)
            const mortgageResult = calculateMortgage(value1,value2)
            setBorrowingAmount(mortgageResult)

            const value3 = parseInt(term)
            const loanTotalResult = calculateLoanTotal()
            setPayBack(loanTotalResult)
           



            // const incomeOneToSubmit = incomeOne.trim();
            // const incomeTwoToSubmit = incomeTwoToSubmit.trim()
            // if (!incomeOneToSubmit || !incomeTwoToSubmit){
            //     return
            // }
            // onIncomeSubmit({
            //     incomeOne : incomeOneToSubmit,
            //     incomeTwo : incomeTwoToSubmit
            // })

            // setIncomeOne("");
            // setIncomeTwo("");
        }

    return (

        <form className= "income-form" onSubmit={handleFormSubmit}>
            <input
            type="number"
            placeholder="Your annual income"
            value={incomeOne}
            onChange={handleIncomeOneChange}
            />

            <input
            type="number"
            placeholder="Your partner's annual income"
            value={incomeTwo}
            onChange={handleIncomeTwoChange}

            />
            <input 
            type = "number"
            placeholder="loan term"
            value={term}
            onChange={handleTermChange}
            />

            <input type="submit" 
            value="submit"
            />

        </form>
    )
}
export default Form;
