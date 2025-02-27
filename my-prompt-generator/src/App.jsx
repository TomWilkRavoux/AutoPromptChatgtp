import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Niveau from './composent/Niveau.jsx'
import MyComponent from './composent/test.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-800'>BLABLOU</h1>
      <Niveau />
      <MyComponent />
    </>
  )
}

export default App
