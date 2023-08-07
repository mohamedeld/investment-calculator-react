import { useState } from "react";
import "./Investment.css";
const InvestmentForm = (props) => {
    const [currentSavings,setCurrentSavings] = useState('');
    const [yearlySavings,setYearlySavings] = useState('');
    const [expected,setExpected] = useState('');
    const [durations,setDurations] = useState('');
    const handleCurrentSavings = (e)=>{
        setCurrentSavings(e.target.value);
    }
    const handleYearlySavings = (e)=>{
        setYearlySavings(e.target.value);
    }
    const handleExpected = (e)=>{
        setExpected(e.target.value);
    }
    const handleDurations = (e)=>{
        setDurations(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const investmentData = {
            currentSavings,
            yearlySavings,
            expected,
            durations
        };
        props.onAddInvestment(investmentData)
    }
    const handleRest = ()=>{
        setCurrentSavings('');
        setDurations('');
        setYearlySavings('');
        setExpected('');
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <p>
                    <label htmlFor="">Current Savings</label>
                    <input type="number" name="" id="" value={currentSavings} onChange={handleCurrentSavings} />
                </p>
                <p>
                    <label htmlFor="">Yearly Savings</label>
                    <input type="number" name="" id="" value={yearlySavings} onChange={handleYearlySavings} />
                </p>
            </div>
            <div className="form-control">

                <p>
                    <label htmlFor="">Expected Interest (%, per year)</label>
                    <input type="number" name="" id="" value={expected} onChange={handleExpected} />
                </p>
                <p>
                    <label htmlFor="">Investment Durations (years)</label>
                    <input type="number" name="" id="" value={durations} onChange={handleDurations} />
                </p>
            </div>
            
            <div className="form-button">
                <button type="reset" onClick={handleRest}>Reset</button>
                <button type="submit">submit</button>
            </div>
        </form>
    </>
  )
}

export default InvestmentForm