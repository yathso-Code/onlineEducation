import React,{useContext, useEffect} from 'react'
import { useParams } from 'react-router';
import { Api } from '../../Main';
import './SingeCard.css';


function SingeCard({buyCard}) {
  const {id} = useParams();
  const {singleData} = useContext(Api);
  // console.log(singleData); 
  const [oneData, setOneData] = React.useState(singleData);
  const [single, setSingle]= React.useState([]);


   const getFuilterData=(id)=>{
     const Data = oneData.filter((curId)=>{
             return curId.id == id;
         });
         setSingle(Data);
        // console.log("Data",Data);
      //  { Data.map((cur)=> console.log(cur.name))}
        // console.log(single);
   }
  //  console.log(single);
 useEffect(() => {
    getFuilterData(id);
 },[] )

//  console.log(single);

//  console.log(oneData);

//   ===============Accumiliter-=====================
  const [item1, setIten1] = React.useState(false);
  const [item2, setIten2] = React.useState(false);
  const [item3, setIten3] = React.useState(false);
  const [item4, setIten4] = React.useState(false);
  const [item5, setIten5] = React.useState(false);
  const [item6, setIten6] = React.useState(false);
  const accClick1 =()=>{
     if(!item1){
       setIten1(true);
     }else{
       setIten1(false);   
     }  
  }
 
  const accClick2 =()=>{
     if(!item2){
       setIten2(true);
     }else{
       setIten2(false);   
     }  
  }

  const accClick3 =()=>{
     if(!item3){
       setIten3(true);
     }else{
       setIten3(false);   
     }  
  }

  const accClick4 =()=>{
     if(!item4){
       setIten4(true);
     }else{
       setIten4(false);   
     }  
  }

  const accClick5 =()=>{
     if(!item5){
       setIten5(true);
     }else{
       setIten5(false);   
     }  
  }

  const accClick6 =()=>{
     if(!item6){
       setIten6(true);
     }else{
       setIten6(false);   
     }  
  }

 
   return (
    <>
      {
        single.map((curElm)=>{
          return(
    <div className='singleCard_main_box' key={curElm.id}>   
        <div className='singleCard_head'>     
            <div className='singlCard_header_text'>
                  <div className='link_singleCard'>
                        <p> <a href='#'>Deveolper</a> / <a href='#'>Programing language</a> / <a href='#'>DataAnalysis</a></p>
                  </div>
                   <div className='head_text'>
                        <h1>Learning {curElm.name} for Data Analysis and Visualization Ver 1</h1>
                        <h3>Learn {curElm.name} and how to use it to analyze,visualize and present data. Includes tons of sample code and Read the detal of courses</h3>
                   </div>
                  <div className='about_singelCard'>
                       <p>Created by <a href='#'>{curElm.Created}</a></p>
                       <span>Last updated {curElm.Last_updated}</span> <span>English</span>
                       <p className='last_text'>{curElm.Language[0]} [Auto], {curElm.Language[1]} [Auto], {curElm.Language[2]} [Auto], {curElm.Language[3]} [Auto], {curElm.Language[4]} [Auto], {curElm.Language[5]} [Auto], {curElm.Language[6]} [Auto]</p>
                  </div>
            </div>
        </div>
       
        {/* ==========================This is the property of card ======================= */}
        <div className='singleCard_box_card'>
             <div className='singelCard_img'>
                  <img src={curElm.img}/>
             </div>
             <div className='singleCard_about'>
                  <h3>BUY THE {curElm.name} courses for better Learning</h3>
                  <p>{curElm.p_language}</p>
                  <h3>Rs 300</h3>
                  <button onClick={()=> buyCard(curElm.id)}>BUY_CORCES</button>
                  <p>30-Day Money-Back Guarantee</p>
                  <p>Full Lifetime Access</p>
             </div>
        </div>
        {/* =======================This is the detal of corces==================== */}
        <div className='corse_info'>
              <h2>This course includes :</h2>
              <div className='left_right'>
              <div className='left'>
                 <p>Full detal of ower courses</p>
                 <p>All topic with Example</p>
                 <p>Certificate of completion</p>
              </div>
              <div className=' right'>
                 <p>3 articles</p>
                 <p>Access on mobile and TV</p>
              </div>
              </div>
        </div>

        {/* =================This is dropdown box================================= */}
        <div className='dropdown_box'>
               <div className='dropdown_box_text'>
                <h3>Course content :</h3>
                   {/* <div className='explain'>
                      <p>15 sections • 110 lectures • 21h 5m total length</p>
                      <p><a href='#'>Expand all sections</a></p>
                   </div> */}
               </div>

               {/* =============== dropdworn1================= */}
               <div className='dropdown'>
                    <div className='dropdown_bxo_head' onClick={accClick1}>
                         <div><h4>About</h4></div>
                         <div>{
                               !item1?  <ion-icon className="icon" name="caret-down-outline"></ion-icon>:   <ion-icon className="icon"  name="caret-up-outline"></ion-icon>
                              }
                         </div>
                    </div>
                    {
                     item1? <>
                     <div className='inner_box'>
                         
                                 <ul>
                                   <li>{curElm.about} </li>
                                 </ul>
                         
                     </div>
                      </>:" "  
                    }
               </div>
               {/*             2 */}
               <div className='dropdown'>
                    <div className='dropdown_bxo_head' onClick={accClick2}>
                         <div><h4>Introduction</h4></div>
                         <div>{
                               !item2?  <ion-icon className="icon" name="caret-down-outline"></ion-icon>:   <ion-icon className="icon"  name="caret-up-outline"></ion-icon>
                              }
                         </div>
                    </div>
                    {
                     item2? <>
                     <div className='inner_box'>
                         
                                 <ul>
                                   <li>{curElm.Introduction} </li>
                                  
                                 </ul>
                         
                     </div>
                      </>:" "  
                    }
               </div>
               {/* 3 */}
               <div className='dropdown'>
                    <div className='dropdown_bxo_head' onClick={accClick3}>
                         <div><h4>Variable & DataType</h4></div>
                         <div>{
                               !item3?  <ion-icon className="icon" name="caret-down-outline"></ion-icon>:   <ion-icon className="icon"  name="caret-up-outline"></ion-icon>
                              }
                         </div>
                    </div>
                    {
                     item3? <>
                     <div className='inner_box'>
                         
                                 <ul>
                                   <li>{curElm.VariableAndDataType}</li>
                                 </ul>
                         
                     </div>
                      </>:" "  
                    }
               </div>
               {/* 4 */}
               <div className='dropdown'>
                    <div className='dropdown_bxo_head' onClick={accClick4}>
                         <div><h4>Operator</h4></div>
                         <div>{
                               !item4?  <ion-icon className="icon" name="caret-down-outline"></ion-icon>:   <ion-icon className="icon"  name="caret-up-outline"></ion-icon>
                              }
                         </div>
                    </div>
                    {
                     item4? <>
                     <div className='inner_box'>
                         
                                 <ul>
                                   <li>{curElm.Operator}</li>
                                 </ul>
                         
                     </div>
                      </>:" "  
                    }
               </div>
               {/* 5 */}
               <div className='dropdown'>
                    <div className='dropdown_bxo_head' onClick={accClick5}>
                         <div><h4>Function</h4></div>
                         <div>{
                               !item5?  <ion-icon className="icon" name="caret-down-outline"></ion-icon>:   <ion-icon className="icon"  name="caret-up-outline"></ion-icon>
                              }
                         </div>
                    </div>
                    {
                     item5? <>
                     <div className='inner_box'>
                         
                                 <ul>
                                   <li>{curElm.Function}</li>
                                 </ul>
                         
                     </div>
                      </>:" "  
                    }
               </div>
               {/* 6 */}
               <div className='dropdown'>
                    <div className='dropdown_bxo_head' onClick={accClick6}>
                         <div><h4>Task $ Question Answer</h4></div>
                         <div>{
                               !item6?  <ion-icon className="icon" name="caret-down-outline"></ion-icon>:   <ion-icon className="icon"  name="caret-up-outline"></ion-icon>
                              }
                         </div>
                         
                    </div>
                    {
                     item6? <>
                     <div className='inner_box'>
                         
                                 <ul>
                                   <li>{curElm.QuestionAnswer}</li>
                                 </ul>
                         
                     </div>
                      </>:" "  
                    }
               </div>
        </div>
    </div>
           )
          })
     }
</>
  )
}

export default SingeCard