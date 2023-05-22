/* eslint-disable react/prop-types */

import Word from './Word'
import Keyboard from './Keyboard'


export const MainPage = ({capitalCity, handleClickKey, myUsedLetters}) => {
  

  

  return (
    <div className='mainPage'>
        <Word
        capitalCity={capitalCity} />
        <Keyboard
        handleClickKey={handleClickKey}
        myUsedLetters={myUsedLetters}
        
         />
    </div>
  )
}
