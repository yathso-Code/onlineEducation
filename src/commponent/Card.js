import React,{useEffect} from 'react'
import './Card.css';

function Card({cart, setCart, buyCard}) {
 const [price, setPrice] = React.useState(0);
 const [allitem, setAllitem] = React.useState([]);

 const handleRemove = (id)=>{
       const arr = cart.filter((item)=> item.id !==id);
       setCart(arr);
       handlePrice();
 }
 const handlePrice= ()=>{
      let ans = 0 , id= null;
      cart.map((item)=> (ans +=item.amount * item.price));
      setPrice(ans);

 }
//  const totalitems = ()=>{
     
//  }
 useEffect(()=>{
     handlePrice();
 })
   if(price ==0){
      return(
          <div className='addtocard_img_box'>
             <div className='addtocard_img'>
                  <img src='https://images.unsplash.com/photo-1496268280706-ec91c5e133c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bm90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60.jpg' alt="" />
                   <div className='addtocard_tet'>
                       <h1>No item in add to card</h1>
                   </div>
             </div>
          </div>
      )
   }

  return (
    <div className='addtocard_box'>
   <article style={{marginTop: 110, minHeight:300}}>
   {cart.map((item) => (
     <div className="cart_box" key={item.id}>
       <div className="cart_img">
         <img src={item.img} alt="" />
         <p>{item.name}</p>
       </div>
       <div>
         {/*  */}
       </div>
       <div>
         <span>{item.price}</span>
         <button onClick={() => handleRemove(item.id)}>Remove</button>
       </div>
     </div>
   ))}
   <div className="total">
     <span>Total Rs - {price}</span>
     {/* <span>Rs - {price}</span> */}
     <button onClick={()=> buyCard(cart.map(c => c.id))}>buy All corces</button>
   </div>
 </article>
 </div>
  )
}

export default Card