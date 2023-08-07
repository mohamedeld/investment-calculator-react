
import Header from './components/Header/Header'
import InvestmentForm from './components/Investment/InvestmentForm/InvestmentForm'
import './App.css';
import { useState } from 'react';
import InvestmentList from './components/Investment/InvestmentList/InvestmentList';

function App() {
  const [investments,setInvestments] = useState([]);
  const saveInvestmentData = (investment)=>{
    setInvestments(prevState=>{
      return [...prevState,investment];
    });

  }

  return (
    <>
      <Header/>
      <InvestmentForm onAddInvestment={saveInvestmentData}/>
      <InvestmentList investments={investments}/>
    </>
  )
}

export default App
