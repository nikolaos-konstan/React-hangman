/* eslint-disable react/prop-types */

const Options = ({handleClickNewGame, handleClickHint}) => {
  return (
    <div className='grid-item grid-item-3'>
        <button onClick={handleClickNewGame} className='btn'><div className="span">NEW GAME</div></button>
      
        <button onClick={handleClickHint} className='btn'><div className="span">HINT</div></button>
    </div>
  )
}

export default Options