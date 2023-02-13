import './App.css'
import OutraLista from './components/OutraLista'

function App() {
  const meusItens = ['React', 'Vue', 'Angular', 'Laravel']

  return (
    <div className="App">
      <h1>Rederização Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  )
}

export default App
