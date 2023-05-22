
import capitals from '../public/capitals.json'
import './App.css'
import Word from './components/Word'
import Options from './components/Options'
import Keyboard from './components/Keyboard'
import { useState } from 'react'

function App() {

  const [myCapital, setMyCapital] = useState('')
  const [myClickedLetter, setMyClickedLetter] = useState('')
  const [myUsedLetters, setMyUsedLetters] = useState([])
  
  const handleClickNewGame = () =>{
    setMyClickedLetter('')
    
    setMyCapital(capitals[Math.floor(Math.random() * 194)].capital)
    setMyUsedLetters([])
    console.log(myCapital)
  }

  const handleClickKey= (letter) =>{
    setMyClickedLetter(letter)
    setMyUsedLetters([...myUsedLetters, letter])
    
    
  }
  console.log(myClickedLetter)
  console.log(myUsedLetters)
  

  return (
    <div>
      <Word
      capitalCity = {myCapital}
      myUsedLetters={myUsedLetters}
       />
       <div className="container">
        <Options handleClickNewGame = {handleClickNewGame}/>
        <Keyboard handleClickKey={handleClickKey}
        myUsedLetters={myUsedLetters}/>
      </div>
    </div>
  )
}

export default App
