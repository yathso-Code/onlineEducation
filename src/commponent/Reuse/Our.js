import React from 'react'
import { Link } from 'react-router-dom';
import './Our.css';


function Our({name,handleClick}) {
  return (
    <div className='card_main_box'>
              <h2 className='title'>Our servicer</h2>
              <div className='card'>
              {
                name.map((curElm)=>{
                     return(
                      
                         
                           <div className='card_box' key={curElm.id}>
              {/* ========Here we are passing the id using useparmes======= */}
                           <Link to={`/singecard/${curElm.id}`} className='link_card_box' style={{ textDecoration: 'none', color:'black' }}>
                              <div className='img'>
                                  <img src={curElm.img}/>
                              </div>
                                
                              <div className='text_box'>
                                  <h4>{curElm.name}</h4>
                                  <p>{curElm.ittle}</p>
                                  <p style={{color:'green', fontSize:19}}>Rs: {curElm.price}</p>
                              </div>
                           </Link>   
                              <div className='btn_addtocard'>
                              <button className='btn1' onClick={()=> handleClick(curElm)}>Add To card</button>
                              {/* <button className='btn2'>Add To Card</button> */}
                              </div>
                            
                           </div>
                         
                           
                     )
               })
              }
              </div>
          </div>
  )
}

export default Our