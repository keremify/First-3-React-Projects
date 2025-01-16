import Donut from './games/Donut'
import DiceApp from './games/DiceApp'
import './App.css'
import Gambling from './games/Gambling'

function App() {

  return (
  <div className="App">
    <h2>Projects by Kerem</h2>
    <hr></hr>
    <Donut className="Donut"></Donut>
    <hr></hr>
    <DiceApp className="DiceApp"></DiceApp>
    <hr></hr>
    <Gambling className="Gambling"></Gambling>
  </div>
  )
}

export default App
