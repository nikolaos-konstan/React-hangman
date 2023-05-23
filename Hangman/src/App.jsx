
import capitals from '../public/capitals.json'
import './App.css'
import Word from './components/Word'
import Message from './components/Message'
import Options from './components/Options'
import Keyboard from './components/Keyboard'
import { useState } from 'react'

function App() {

  const [myCapital, setMyCapital] = useState('')
  const [myCountry, setMyCountry] = useState('')
  const [myClickedLetter, setMyClickedLetter] = useState('')
  const [myUsedLetters, setMyUsedLetters] = useState([])
  const [isOver, setIsOver] = useState(false)
  
  
  
  const handleClickNewGame = () =>{
    setMyClickedLetter('')
    const randomnumber = Math.floor(Math.random() * 194)
    setMyCapital(capitals[randomnumber].capital)
    setMyCountry(capitals[randomnumber].country)
    setMyUsedLetters([])
    console.log(myCapital)
    console.log(myCountry)
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
      myCapital = {myCapital}
      myUsedLetters={myUsedLetters}
      setIsOver={setIsOver}
      isOver={isOver}
       />
       <Message 
       myCountry={myCountry}
       />
       <div className="container">
        <Options handleClickNewGame = {handleClickNewGame}/>
        <Keyboard
        handleClickKey={handleClickKey}
        myUsedLetters={myUsedLetters}
        setIsOver={setIsOver}
        isOver={isOver}
        myCapital = {myCapital}
        />
      </div>
    </div>
  )
}

export default App
