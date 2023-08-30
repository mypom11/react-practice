import { useState } from 'react'
import InvestForm from './components/Invest/InvestForm'
import Table from './components/Table/Table'
import Header from './components/UI/Header'

const App = () => {
  const [userInput, setUserInput] = useState(null)

  const yearlyData = [] // per-year results

  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  }

  if (userInput) {
    let currentSavings = +userInput['current-savings'] // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution'] // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100
    const duration = +userInput['duration']

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn
      currentSavings += yearlyInterest + yearlyContribution
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      })
    }
  }

  return (
    <div>
      <Header />
      <InvestForm onSaveData={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: 'center' }}>No investment calculate yet.</p>
      )}
      {userInput && (
        <Table
          data={yearlyData}
          initialInvestment={Number(userInput['current-savings'])}
        />
      )}
    </div>
  )
}

export default App
