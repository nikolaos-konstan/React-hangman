/* eslint-disable react/prop-types */
const Letters = ({value, myUsedLetters, index}) => {
  
  
  // JSX rendering
  return (
    <div className="letter" key={index} >
      
        {myUsedLetters.includes(value)||value==="'"||value==="-"||value===" "?value:"_"}
      
    </div>
  );
};

export default Letters;
