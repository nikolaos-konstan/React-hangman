/* eslint-disable react/prop-types */

const Options = ({handleClickNewGame}) => {
  return (
    <div className='options'>
        <button onClick={handleClickNewGame} className='btn'>New Game</button>
      
        <button className='btn'>Hint</button>
    </div>
  )
}

export default Options