import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/Cart'
import Counter from './components/Counter'
import LoginForm from './components/LoginForm'
import LoginFormClass from './components/LoginClassForm'
import Todos from './components/Todos'
import Welcome from './components/Welcome'
import Posts from './components/Posts'
import AutoCounter from './components/AutoCounter'

function App() {
  // const [count, setCount] = useState(0)
  const [showCounter, setShowCounter] = useState(true);

  return (
    <>
    {/* <Counter />
      <h1 className="mb-4 mx-auto">My APP</h1>
      <Cart /> */}
      {/* <Welcome isLoggedIn={true} user={{name:'Ubaid Nawab', type:'admin'}} />
      <Todos />
      <LoginForm />
      <LoginFormClass /> */}

      {showCounter && <AutoCounter />}
      <button onClick={()=> {setShowCounter(showCounter => !showCounter)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Toggle Counter</button>
      
      <Posts />

    </>
  )
}

export default App
