/* eslint-disable react/prop-types */
import Key from './Key'

const Keyboard = ({handleClickKey, myUsedLetters}) => {

    const alphabet = [...Array(26)].map((_, index) => String.fromCharCode(65 + index));
    
  return (
    <div className='keyboard'>
        {alphabet.map((item, index) =><Key
                                      value={item}
                                      key={index}
                                      handleClickKey={handleClickKey}
                                      myUsedLetters={myUsedLetters}
                                      />)}
    </div>
  )
}

export default Keyboard