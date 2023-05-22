/* eslint-disable react/prop-types */

import Letters from "./Letters"


const Word = ({capitalCity, myUsedLetters}) => {

    const hiddenWord=capitalCity
    const hiddenWordArray=hiddenWord.toUpperCase().split('')
    console.log(hiddenWord)
    console.log(hiddenWordArray)

    
  return (
    <div className='word'>
        {hiddenWordArray.map((item, index) =><Letters myUsedLetters={myUsedLetters} value={item} key={index} />)}
    </div>
  )
}

export default Word