import './App.css'
import InputForm from './components/InputForm'
import ResultsList from './components/ResultsList'
import { useState } from 'react'

// Globals
const sampleResponse = {
  predictions: [
    { distance: '800m', predictedTime: '2:08' },
    { distance: '1500m', predictedTime: '4:12' },
    { distance: 'Mile', predictedTime: '4:31' }
  ]
}





function App() {
  const [results, setResults] = useState([])

  // Functions
  function handlePredict(event) {
    event.preventDefault()
    setResults(sampleResponse.predictions)
    return
  }
  return (
    <div className="app">
      <h1>Running Predictor</h1>

      <InputForm onPredict={handlePredict} />

      <ResultsList results={results}/>
    </div>
  )
}

export default App