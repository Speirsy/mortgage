import React, {useState} from "react";
const Form = ({calculateMortgage, setBorrowingAmount, calculateTermSplit, setTermSplit }) => {


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
            const loanSplitResult = calculateTermSplit(value1,value2,value3)
            setTermSplit(loanSplitResult)
           
        }

    return (

        <form className= "income-form" onSubmit={handleFormSubmit}>
            <input
            type="number"
            placeholder="Your annual income"
            value={incomeOne}
            onChange={handleIncomeOneChange}
            />
            <p>
            <input
            type="number"
            placeholder="Your partner's annual income"
            value={incomeTwo}
            onChange={handleIncomeTwoChange}
            />
            </p>
            
            <input 
            type = "number"
            placeholder="Term"
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
