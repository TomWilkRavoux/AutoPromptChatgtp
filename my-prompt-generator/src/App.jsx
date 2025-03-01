import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Niveau from './composent/Niveau.jsx'
import MyComponent from './composent/test.jsx'
import TypeDev from './composent/TypeDeDev.jsx'
import Contrainte from './composent/Contrainte.jsx'
import Toogle from './composent/Toogle.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-3/4 mx-auto p-6 glass rounded-lg'>
      <Niveau />
      <div className='flex'>
        <TypeDev/>
        <Contrainte/>
      </div>
      <div>
        <Toogle />
      </div>
    </div>
      {/* <MyComponent /> */}
    </>
  )
}

export default App
