import React  from 'react'
import '../Footer/style.css'
  export default class Footer extends React.Component{
  render()
  {
  return(
      <div>

   
<div class="footer">
  <div class="inner-footer">


    <div class="footer-items">
      <h1> Online Course Enrollment</h1>
      <p>Online learning is education that takes place over the Internet. It is often referred to as “e- learning” among other terms. However, online learning is just one type of “distance learning” - the umbrella term for any learning that takes place across distance and not in a traditional classroom.</p>
    </div>

    <div class="footer-items">
      <h3>Quick Links</h3>
      <div class="border1"></div> 
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Search</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>
    </div>


    <div class="footer-items">
      <h3>Our Course</h3>
      <div class="border1"></div>  
        <ul>
          <a href="#"><li>web Mobile cloud Native computing</li></a>
          <a href="#"><li>Python</li></a>
          <a href="#"><li>Block Chain</li></a>
          <a href="#"><li>Tot</li></a>
        </ul>
    </div>


    <div class="footer-items">
      <h3>Contact us</h3>
      <div class="border1"></div>
        <ul>
          <li><i class="fa fa-map-marker" aria-hidden="true"></i> Onlice Enrollment.com</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i>+92 412351351</li>
          <li><i class="fa fa-envelope" aria-hidden="true"></i>oes@gmail.com</li>
        </ul> 

        <div class="social-media">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-google-plus-square"></i></a>
        </div> 
    </div>
  </div>
  

  <div class="footer-bottom">
    Copyright &copy; learn and code 2020.
  </div>
</div>
      </div>
  )


  }


 }