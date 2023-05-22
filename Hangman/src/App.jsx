
import capitals from '../public/capitals.json'
import './App.css'
import { MainPage } from './components/MainPage'
import SideBar from './components/SideBar'
import { useState } from 'react'

function App() {

  const [myCapital, setMyCapital] = useState('')
  const [myClickedLetter, setMyClickedLetter] = useState('')
  const [myUsedLetters, setMyUsedLetters] = useState([])
  
 
  
  
  const handleClickNewGame = () =>{
    setMyClickedLetter('')
    
    setMyCapital(capitals[Math.floor(Math.random() * 194)].capital)
    console.log(myCapital)
  }

  const handleClickKey= (letter) =>{
    setMyClickedLetter(letter)
    setMyUsedLetters([...myUsedLetters, letter])
    
    
  }
  console.log(myClickedLetter)
  console.log(myUsedLetters)
  

  return (
    <div className='container'>
      <SideBar 
      handleClickNewGame = {handleClickNewGame}
      />
      <MainPage
      capitalCity = {myCapital}
      handleClickKey={handleClickKey}
      myUsedLetters={myUsedLetters}
       />
    </div>
  )
}

export default App
