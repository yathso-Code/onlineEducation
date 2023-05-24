import React from 'react'
import './Map.css';

function Map() {
  return (
   <div className='map_box'>
   <h2>Feel Free To contact Us</h2>
       <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.6104257496977!2d81.86076631438355!3d25.45128482759207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acaa651c6f665%3A0xfe27d8682e68212f!2sIICS%20COLLEGE%20%7C%20BCA%20%7C%20MCA%20%7C%20BBA%20%7C%20MBA%20%7C%20O%20LEVEL%20%7C%20PGDCA%20%7C%20DCA%20%7C%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1675681697962!5m2!1sen!2sin" 
             width="100%"
             height="400"
             style={{border:0}}
             allowFullScreen=""
             loading="lazy"
             referrerpolicy="no-referrer-when-downgrade">
       </iframe>
   </div>
  )
}

export default Map