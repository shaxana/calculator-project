import React from 'react'
import { useState } from 'react'

function SecondOperand({secondvalue, onChange}) {
   
  return (
    <form className='secondvalue'>
        <label htmlFor="">2-ci eded</label>
        <input type="number" onChange={onChange} value={secondvalue}/>
    </form>
    )
}

export default SecondOperand