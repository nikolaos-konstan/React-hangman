/* eslint-disable react/prop-types */
const Letters = ({value}) => {
  let found=true
  // JSX rendering
  return (
    <div className="letter">
      {found?value:"_"}
    </div>
  );
};

export default Letters;
