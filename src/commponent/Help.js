import React from 'react'
import './Help.css'
import Map from './Reuse/Map'
import Form from './Reuse/Form'

function Help() {
  return (
    <div className='contect_box'>

      {/* This file is present in Reuse>Map.js */}

      <Map />
      
      {/* =======================form ======================================= */}
      
      {/* This file is present in Reuse>Form.js */}
      
      <Form />
      
    </div>
  )
}

export default Help