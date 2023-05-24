import React,{useContext} from 'react'
import './Services.css';
import { Api } from '../Main';
import Our from './Reuse/Our';

function Services({handleClick}) {
  const {data} = useContext(Api);

  return (
    <div>
          {/* This fiel is present in Reuse>Our.js */}
          
           <Our name={data} handleClick={handleClick}/>
           
       <div className='card_box_item'>
        <div className='bxo'>
         <div className='text'>
            <p>Ready to get started?</p>
            <p>Talk to us today</p>
         </div> 
         <div className='btn_box'>
             <button>GET START</button>
         </div>
       </div>  
      </div>
    </div>
  )
}

export default Services