import './App.css'
import InputForm from './components/InputForm'
import ResultsList from './components/ResultsList'


function App() {
  return (
    <div className="app">
      <h1>Running Predictor</h1>

      <InputForm />

      <ResultsList />
    </div>
  )
}

export default App