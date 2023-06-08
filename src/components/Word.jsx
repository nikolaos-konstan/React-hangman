/* eslint-disable react/prop-types */


import Letters from "./Letters"



const Word = ({myCapital, myUsedLetters}) => {

  const hiddenWord = myCapital.toUpperCase().split('')
   
    
  return (
    <div className='grid-item grid-item-1'>
        {hiddenWord.map((item, index) =><Letters myUsedLetters={myUsedLetters} value={item} key={index} />)}
    </div>
  )
}

export default Word