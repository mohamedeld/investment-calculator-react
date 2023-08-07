import './InvestmentList.css';

const InvestmentList = (props) => {
  return (
    <>
        <table className='result'>
            <thead>
                <tr>
                <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.investments.length === 0?(<p>There are not any investment</p>):( 
                        props.investments.map((investment,index)=>(
                            <tr key={index}>
                            <td>{investment.currentSavings}</td>
                        <td>{investment.yearlySavings}</td>
                        <td>{investment.expected}</td>
                        <td>TOTAL INTEREST GAINED</td>
                        <td>TOTAL INVESTED CAPITAL</td>
                            </tr>
                        ))
                    )
                }
                
            </tbody>
        </table>
    </>
  )
}

export default InvestmentList