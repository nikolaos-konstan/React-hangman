
import capitals from '../public/capitals.json'
import hints from '../public/hints.json'
import './App.css'
import Word from './components/Word'
import Message from './components/Message'
import Options from './components/Options'
import Keyboard from './components/Keyboard'
import { useEffect, useState } from 'react'

function App() {

  const [myCapital, setMyCapital] = useState('')
  const [myCapitalArray, setMyCapitalArray] = useState(["do","not","empty"])
  const [myCountry, setMyCountry] = useState('')
  const [myClickedLetter, setMyClickedLetter] = useState('')
  const [myUsedLetters, setMyUsedLetters] = useState([])
  const [isOver, setIsOver] = useState(false)
  const [hint, setHint] = useState("Click on the \"HINT\" button to get a hint. They are really helpful.")
  const [counter, setCounter] = useState(0)
  
  
  useEffect(()=>{
   
    setMyCapitalArray(myCapitalArray.filter(x=> x!==myClickedLetter))
    console.log(myCapitalArray)
  }, [myClickedLetter])
  
  
  const handleClickNewGame = () =>{
    setMyClickedLetter('')
    const randomnumber = Math.floor(Math.random() * 194)
    setMyCapital(capitals[randomnumber].capital)
    setMyCapitalArray(capitals[randomnumber].capital.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '').toUpperCase().split(''))
    setMyCountry(capitals[randomnumber].country)
    setMyUsedLetters([])
    setHint("Click on the \"HINT\" button to get a hint. They are really helpful.")
    setCounter(0)
  }



  const handleClickKey= (letter) =>{
    setMyClickedLetter(letter)
    setMyUsedLetters([...myUsedLetters, letter])
    setCounter(prev=>prev+1)
  }
 
  const handleClickHint=() => {
    setHint(hints[Math.floor(Math.random() * 77)])
  }
  
  console.log(myCapitalArray)
  console.log(counter)

  return (
    <div>
      <Word
      myCapital = {myCapital}
      myUsedLetters={myUsedLetters}
      setIsOver={setIsOver}
      isOver={isOver}
      myClickedLetter={myClickedLetter}
       />
       <Message 
       myCountry={myCountry}
       myCapitalArray={myCapitalArray}
       myCapital={myCapital}
       hint={hint}
       counter={counter}
       />
       <div className="container">
        <Options
        handleClickNewGame = {handleClickNewGame}
        handleClickHint={handleClickHint}
        />
        <Keyboard
        handleClickKey={handleClickKey}
        myUsedLetters={myUsedLetters}
        setIsOver={setIsOver}
        isOver={isOver}
        myCapital = {myCapital}
        myCapitalArray={myCapitalArray}
        />
      </div>
    </div>
  )
}

export default App
