import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const AppElectron = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://img.icons8.com/?size=150&id=13159&format=png" target="_blank">
          <img src={reactLogo} className="logo Electron" alt="Electron logo" />
        </a>
      </div>
      <h1>Electron</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default AppElectron;

