import React,{useContext, useEffect} from 'react'
import { useParams } from 'react-router';
import { Api } from '../../Main';
import './CourseSingle.css';
import {useNavigate} from "react-router-dom"


function CourseSingle({buy}) {
 const navigate = useNavigate();
 const [num, setNum] = React.useState(0);
const {BuyDatas} = useContext(Api);
const {id} = useParams();
const [onData, setOnData] = React.useState(BuyDatas);
const [s, setS]= React.useState([]);


const datafetch = (id) => {

 const Data = onData.filter((curElm)=>{
     return id == curElm.id;
   })
  console.log(Data[num]);
  setS([Data[num]]);
};

useEffect(() => {
  datafetch(id);
   console.log("num", num);
   // console.log(buy.length);
}, [num]);
   
if(buy.length === 0) {
 return navigate("/");
}
  return(
   <>
    {s.map((curElm) => {
     return(
      <div className='couser_box' key={curElm.id}>

              <div className='course_box_in'>
              <h1>{curElm.name}</h1>
              <div className='button_box'>
                {num==0? "": <button onClick={()=>setNum(num -1)}>Previce</button> }
                {num!==1?  <button onClick={()=>setNum(num +1)}>Next</button>: " " }

              </div>
              <div className='about_text'>
                  <p>{curElm.about}</p>
                  <p>{curElm.about1}</p>
              </div>
              <div className='full_detal'>
                    <h2>{curElm.name} Extends HTML</h2>
                     <p>{curElm.Extend}</p>
                     <p>{curElm.Extend1}</p>
                     <p>{curElm.Extend2}</p>
              </div>
              <div className='example_box'>
                    <img src={curElm.img} alt=''/>
  
              </div>
              <div className='Example_explain'>
                  <h3>Example explain:</h3>
                   <p>{curElm.example}</p>
                   <p>{curElm.example1}</p>
                   <p>{curElm.example2}</p>
              </div>
              <div className='var_datatype_box'>
                 <h3>Variable & DataType</h3>
                 <p>{curElm.variables}</p>
             </div>
              <div className='operator_box'>
                <h3>Operator</h3>
                 <p>{curElm.Operator}</p>
              </div>
              <div className='why_we_use'>
                  <h3>Why we use</h3>
                  <p>{curElm.why}</p>
              </div>
               <div className='button_box'>
                {num==0? "": <button onClick={()=>setNum(num -1)}>Previce</button> }
                {num!==1?  <button onClick={()=>setNum(num +1)}>Next</button>: " " }
              </div>
         </div>
        </div>
           
     )
   })}
     
    </>
    )
}

export default CourseSingle