/* eslint-disable react/prop-types */
import efficiency from '../../public/efficiency.json'

export const Message = ({myCountry, myCapitalArray, hint, counter, myCapital}) => {

  const set = new Set(myCapital.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '').toUpperCase().split(''))
  console.log("The set size is"+set.size)
  const finalCount = counter - set.size
  const maxTries = 26-set.size

  const finalMessage = finalCount===maxTries ? efficiency[7] :
                       finalCount>=maxTries/7*6 ? efficiency[6] :
                       finalCount>=maxTries/7*5 ? efficiency[5] :
                       finalCount>=maxTries/7*4 ? efficiency[4] :
                       finalCount>=maxTries/7*3 ? efficiency[3] :
                       finalCount>=maxTries/7*2 ? efficiency[2] :
                       finalCount>=maxTries/7 ? efficiency[1] :
                       finalCount===0 ? efficiency[0] :
                       'Default Result';

  

  return (
    <div className='grid-item grid-item-2'>
      <h1 >
        {myCapitalArray.length===0?`You found the capital of ${myCountry} with ${finalCount} ${finalCount===1?"mistake":"mistakes"}! ${finalMessage}`:"Find the capital!"}
        </h1>
      <h2>{hint}</h2>
    </div>
  )
}

export default Message