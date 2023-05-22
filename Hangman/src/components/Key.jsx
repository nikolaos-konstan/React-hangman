
/* eslint-disable react/prop-types */

const Key = ({value, handleClickKey, index, myUsedLetters}) => {
  
    
  return (
    <button disabled={myUsedLetters.includes(value)} onClick={()=>handleClickKey(value)} key={index} className={"key"}>{value}</button>
  )
}

export default Key