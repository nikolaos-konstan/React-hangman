/* eslint-disable react/prop-types */


import Letters from "./Letters"



const Word = ({myCapitalArray, myUsedLetters}) => {
   
    
  return (
    <div className='word'>
        {myCapitalArray.map((item, index) =><Letters myUsedLetters={myUsedLetters} value={item} key={index} />)}
    </div>
  )
}

export default Word