import React, { useContext, } from "react";
import "./Home.css";
import { Api } from "../Main";
import Our from "./Reuse/Our";
import Map from "./Reuse/Map";
import Form from "./Reuse/Form";
import "animate.css";
import "jquery-ui-dist/jquery-ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home({ handleClick }) {
  // fetch the data from using useContext===
  const { data } = useContext(Api);

  // this is the funcnlity  of slik_slider
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 848,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
   // silk slider==================== end
   // herobanner=====================start
   // const sliderRef = useRef(null);

   // const play = () => {
   //   sliderRef.current.slickPlay();
   // };
 
   // const pause = () => {
   //   sliderRef.current.slickPause();
   // };
 
   const setting = {
     dots: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 1500,
     responsive: [
       {
         breakpoint: 1024,
         setting: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true,
         },
       },
       {
         breakpoint: 600,
         setting: {
           slidesToShow: 2,
           slidesToScroll: 2,
           initialSlide: 2,
         },
       },
       {
         breakpoint: 480,
         setting: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };

  



  return(
   <>
     {/* ===================================Hero_banner==================== */}
      <div className="hero-image">
        <div className="hero-text ">
          <h1 style={{ font: "50px" }}className="animate__animated animate__rubberBand">
            A man's got to believe in something. ...
          </h1>
          <p className="animate__animated animate__rubberBand">
            For more detelase
          </p>
          <button className="animate__animated animate__rubberBand">
            join us
          </button>
        </div>
      </div>
      {/* // ============================hero_banner - end================================= 
       // ============================our servicer - start=========================== */}

      <Our name={data} handleClick={handleClick} />

      {/* ===========================shick_sliding_start==================================== */}

      {/* <div className="slider_box"> */}
        <Slider  className="Slider_box"{...settings}>
          {data.map((item, index) => (
            <div key={index} className="box_box">
              <div className="slider_img_box">
                <img src={item.img} alt="" />
              </div>
              <h4>{item.name}</h4>
            </div>
          ))}
        </Slider>
      {/* </div> */}

     {/* ================================slik_slider_end  */}
      {/* =============================google mape===================================== */}

      {/* THis file is present in Reuse>Map.js */}
      <Map />

      {/* ============================from or contact=================================== */}
      {/* This file is present in Reuse>Form.js */}
      <Form />

  </>
    
  )
}

export default Home;
