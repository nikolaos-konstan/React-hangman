/* eslint-disable react/prop-types */

export const Message = ({myCountry, test}) => {
  return (
    <div>
    <p>This is the capital of {test.length===0?myCountry:"find it"}</p>
    </div>
  )
}

export default Message