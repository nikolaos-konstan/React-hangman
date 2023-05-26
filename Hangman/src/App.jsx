
import capitals from '../public/capitals.json'
import './App.css'
import Word from './components/Word'
import Message from './components/Message'
import Options from './components/Options'
import Keyboard from './components/Keyboard'
import { useState } from 'react'

function App() {

  const [myCapital, setMyCapital] = useState('')
  const [myCapitalArray, setMyCapitalArray] = useState([])
  const [myCountry, setMyCountry] = useState('')
  const [myClickedLetter, setMyClickedLetter] = useState('')
  const [myUsedLetters, setMyUsedLetters] = useState([])
  const [isOver, setIsOver] = useState(false)
  
  const [test, setTest] = useState([])
  
  
  
  
  const handleClickNewGame = () =>{
    setMyClickedLetter('')
    const randomnumber = Math.floor(Math.random() * 194)
    setMyCapital(capitals[randomnumber].capital)
    setMyCapitalArray(capitals[randomnumber].capital.toUpperCase().split(''))
    setTest(capitals[randomnumber].capital.toUpperCase().split(''))
    setMyCountry(capitals[randomnumber].country)
    setMyUsedLetters([])
  }



  const handleClickKey= (letter) =>{
    setMyClickedLetter(letter)
    setMyUsedLetters([...myUsedLetters, letter])
    setTest(test.filter(x=> x!==myClickedLetter))
    console.log(test)
  }
  /*let updatedArray = myCapitalArray
  updatedArray = updatedArray.filter(x=> x!==myClickedLetter)
  console.log(updatedArray)
  */
  
  console.log(test)

  return (
    <div>
      <Word
      myCapitalArray = {myCapitalArray}
      myUsedLetters={myUsedLetters}
      setIsOver={setIsOver}
      isOver={isOver}
      myClickedLetter={myClickedLetter}
       />
       <Message 
       myCountry={myCountry}
       test={test}
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
