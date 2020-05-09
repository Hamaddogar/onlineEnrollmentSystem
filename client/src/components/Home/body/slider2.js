import React from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../body/style.css'
import ReactPlayer from "react-player"
 

 class Card  extends React.Component{

  render()
  {
	AOS.init();
  return(



 <div className="mydiv2">
     {/* <center> <img src="https://lh3.googleusercontent.com/proxy/OWIvAivPrsbjSfWdnSVAnwxhQMnRQt8A8tjnFRznfVdVC70qbavqnEXg4n99iD6jECP1MwSQvs7RZd625mcQrEyf2uytjg"/></center> */}
     
     <div class="cards-list">
  
  <div class="card 1">
    <div class="card_image"> <img src="https://images.pexels.com/photos/3765030/pexels-photo-3765030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> </div>
    <div class="card_title title-white">
      <p>  Learn Freelancing</p>
    </div>
  </div>
  
    <div class="card 2">
    <div class="card_image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRIXb9D5A2RlWnhL0wZO1mHXVVBVJABJeL0lyhcwa1TiETL5gi&usqp=CAU" />
      </div>
    <div class="card_title title-white">
      <p>Block Chain</p>
    </div>
  </div>
  
  <div class="card 3">
    <div class="card_image">
      <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
    </div>
    <div class="card_title">
      <p>Animation </p>
    </div>
  </div>
    
    <div class="card 4">
    <div class="card_image">
      <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
      </div>
    <div class="card_title title-black">
      <p> Graphic Designer</p>
    </div>
    </div>
  
  </div>
  <center>
      <br/>
      <br/><div className="vedioset">
  <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

      
  <ReactPlayer
        url="https://www.youtube.com/watch?v=AOTEQVYDPpg"
         width="800"
      />
      </div>

      </div>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <br/>
      <br/>

      <img src="https://www.readyschools.org/wp-content/uploads/2019/04/attend-class-without-fail.png"  height="500"width="1200"/>
       </div>
      </center> 
   
 </div>

  )



  }


 }
  export default Card;