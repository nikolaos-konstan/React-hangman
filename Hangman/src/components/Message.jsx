/* eslint-disable react/prop-types */

export const Message = ({myCountry, myCapitalArray}) => {
  return (
    <div>
    <p>This is the capital of {myCapitalArray.length===0?myCountry:"find it"}</p>
    </div>
  )
}

export default Message