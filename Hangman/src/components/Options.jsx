/* eslint-disable react/prop-types */

const Options = ({handleClickNewGame, handleClickHint}) => {
  return (
    <div className='options'>
        <button onClick={handleClickNewGame} className='btn'>NEW GAME</button>
      
        <button onClick={handleClickHint} className='btn'>HINT</button>
    </div>
  )
}

export default Options