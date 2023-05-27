/* eslint-disable react/prop-types */

export const Message = ({myCountry, myCapitalArray, hint}) => {
  return (
    <div>
      <h1 className="winning">{myCapitalArray.length===0?`Congratulations! You won! You found the capital of ${myCountry}.`:""}</h1>
      <p>{hint}</p>
    </div>
  )
}

export default Message