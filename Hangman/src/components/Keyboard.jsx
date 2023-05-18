import Key from './Key'

const Keyboard = () => {

    const alphabet = [...Array(26)].map((_, index) => String.fromCharCode(65 + index));
    
  return (
    <div className='keyboard'>
        {alphabet.map(item =><Key value={item} key={item} />)}
    </div>
  )
}

export default Keyboard