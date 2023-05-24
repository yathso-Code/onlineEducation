import { isVisible } from '@testing-library/user-event/dist/utils';
import React, {useEffect} from 'react'
import './GotoTop.css';


function GotoTop() {
 const [isVisible, setIsVisible] = React.useState(false)
  const gotobtn =()=>{
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }

  const listenToScroll = ()=>{

     let heightToHidden = 230;
     const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
     if(winScroll > heightToHidden){
         setIsVisible(true)
     }else{
        setIsVisible(false)
     }
  }

  useEffect(() => {
     window.addEventListener('scroll', listenToScroll)
  } )
  return (
    <div className='top_box'>
     {isVisible &&(
                <div className='top-btn' onClick={gotobtn}>
                <ion-icon name="arrow-up-outline" className="icon_box">aeyf</ion-icon>
               </div>
     )}
    </div>
  )
}


export default GotoTop