import React,{useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import './Reuse/Our.css';
import './Course.css';
import { Api } from '../Main'; 
import {useNavigate} from "react-router-dom"
import axios from 'axios';

function Course({buy}) {
 const navigate = useNavigate();
 const {data} = useContext(Api);

 const [buydata, setBuyData] = React.useState([]);

 const filterBuyData = (id) => {
  const filteredData = data.filter((item) => {
    return id.includes(item.id)
  });
  setBuyData(filteredData);
}

// const getBuyId = () =>{
//   let auth = localStorage.getItem('userIdOfEducation');
//   let email= JSON.parse(auth);
//    email = email.id;
//   console.log(email);
//   axios.get(`http://localhost:3000/buy/${email}`).then((res)=>{
  
//     console.log();
//   }).catch((err)=>{
//     console.log("hh",err.message);
//   })
// }
 
useEffect(() => {
  // getBuyId();
  filterBuyData(buy);
}, [buy]);
  // if buy lengthe is  0 then it will navigate the hone page====
    if(buy.length === 0) {
        return navigate("/");
    }
  
  return (
    <div className='course_box'>
   <div className='card_main_box'>
   <h2 className='title'> buy courses </h2>
   <div className='card'>
   {
     buydata.map((curElm, ind)=>{
          return(
           <>
                <div className='card_box' key={ind}>
   {/* ========Here we are passing the id using useparmes======= */}
                <Link to={`/detal/${curElm.name}/${curElm.id}`} className='link_card_box' style={{ textDecoration: 'none', color:'black' }}>
                   <div className='img'>
                       <img src={curElm.img}/>
                   </div>
                     
                   <div className='text_box'>
                       <h4>{curElm.name}</h4>
                       <p>{curElm.ittle}</p>
                       {/* <p style={{color:'green', fontSize:19}}>Rs: {curElm.price}</p> */}
                   </div>
                </Link>   
                   <div className='btn_addtocard'>
                   {/* <button className='btn1' onClick={()=> handleClick(curElm)}>Add To card</button> */}
                   {/* <button className='btn2'>Add To Card</button> */}
                   </div>
                </div>
            
           </>     
          )
    })
   }
   </div>
</div>
</div>
  )
}

export default Course