import './App.css'
import InputForm from './components/InputForm'
import ResultsList from './components/ResultsList'
import { useState } from 'react'



// Globals



function App() {
  const [results, setResults] = useState([])

  // Functions
  async function handlePredict( time, distance) {
    const response = await fetch ("http://127.0.0.1:8000/predict",
      {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        time: time,
        distance: distance
      })
    })
    const data = await response.json();
    setResults(data.predictions)
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
