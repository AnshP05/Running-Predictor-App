import './App.css'
import InputForm from './components/InputForm'
import ResultsList from './components/ResultsList'
import { useState } from 'react'

// Globals
const sampleResponse = {
  predictions: [
    { distance: '800m', predictedTime: '2:08' },
    { distance: '1500m', predictedTime: '4:12' },
    { distance: 'Mile', predictedTime: '4:31' },
    { distance: '3000m', predictedTime: '9:05'}
  ]
}


function App() {
  const [results, setResults] = useState([])

  // Functions
  function handlePredict( time, distance) {
    // Send data to api
    //results = someApiCall(time, distance)
    setResults(/*results*/sampleResponse.predictions)
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