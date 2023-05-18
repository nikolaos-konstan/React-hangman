/* eslint-disable no-unused-vars */
import Letters from "./Letters"


const Word = () => {

    const hiddenWord="Paris"
    const hiddenWordArray=hiddenWord.toUpperCase().split('')

    
  return (
    <div className='word'>
        {hiddenWordArray.map(item =><Letters value={item} key={item} />)}
    </div>
  )
}

export default Word