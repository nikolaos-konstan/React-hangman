/* eslint-disable react/prop-types */

import City from './City'
import Options from './Options'

const SideBar = ({handleClickNewGame}) => {
  return (
    <div className='sideBar'>
        <City />
        <Options handleClickNewGame={handleClickNewGame}/>

    </div>
  )
}

export default SideBar