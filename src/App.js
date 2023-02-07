import './App.css'
import SayMyName from './components/SayMyname'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'

function App() {
  const nome = "Hector"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Wellington"/>
      <SayMyName nome="Pedro"/>
      <SayMyName nome={nome}/>
      <Pessoa
      nome="Flavio" 
      idade="28" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150"
      />
      <List/>
    </div>
  )
}

export default App
