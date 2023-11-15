import React from 'react'
import { useState } from 'react'

function FirstOperand({firstvalue, onChange}) {
   
  return (
    <form  className='firstinput'>
        <label htmlFor="">1-ci eded</label>
        <input type="number" onChange={onChange} value={firstvalue} />
    </form>
    )
}

export default FirstOperand