import { Close } from '@mui/icons-material'
import React, { useState } from 'react'

const Announce = () => {

    const [announceStyle, setAnnouncestyle] = useState('bg-[#814af3] text-white font-bold flex items-center justify-center')

    const handleinput = () =>{
        setAnnouncestyle( announceStyle + " hidden")
    }
  return (
    <div className={announceStyle} >
        <h2>Hurry up its 40% off now </h2>
        <Close className='cursor-pointer'  onClick= {handleinput}/>
    </div>
  )
}

export default Announce

