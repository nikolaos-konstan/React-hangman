
/* eslint-disable react/prop-types */


const Key = ({value, handleClickKey, index, myUsedLetters, myCapitalArray}) => {

  
    
  return (
    <button disabled={myUsedLetters.includes(value)||myCapitalArray.length===0} onClick={()=>handleClickKey(value)} key={index} className={"key"}>{value}</button>
  )
}

export default Key