import { useState } from 'react'
import futuraTvLogo from './assets/futuratv.png'
import futura923Logo from './assets/futura923.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      <a href="https://www.facebook.com/profile.php?id=100075859906235" target="_blank">
          <img src={futuraTvLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>CUPONERA FUTURA TV</h1>
    </div>
  )
}

export default App
