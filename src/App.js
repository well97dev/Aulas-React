import './App.css'
import SayMyName from './components/SayMyname'
import Pessoa from './components/Pessoa.js'

function App() {
  const nome = "Hector"

  return (
    <div className="App">
      <SayMyName nome="Wellington"/>
      <SayMyName nome="Pedro"/>
      <SayMyName nome={nome}/>
      <Pessoa
      nome="Flavio" 
      idade="28" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150"
      />
    </div>
  )
}

export default App
