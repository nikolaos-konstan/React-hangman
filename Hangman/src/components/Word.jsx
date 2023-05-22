/* eslint-disable react/prop-types */

import Letters from "./Letters"


const Word = ({capitalCity}) => {

    const hiddenWord=capitalCity
    const hiddenWordArray=hiddenWord.toUpperCase().split('')

    
  return (
    <div className='word'>
        {hiddenWordArray.map((item, index) =><Letters value={item} key={index} />)}
    </div>
  )
}

export default Word