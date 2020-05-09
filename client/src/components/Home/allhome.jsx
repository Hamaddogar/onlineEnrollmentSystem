import React from 'react'
 import Slider from '../Home/slider'
  import Sliderseconed from '../Home/body/slider2'
   import LastSldier from '../Home/body/lastslider/lastslider'
    import Footer from '../Footer/footer'

 class AllScreen extends  React.Component{
 render()
 {

  return(

    <div>

       <Slider/> 
       <Sliderseconed/>
       <LastSldier/>
        <Footer/>
    </div>
  )

 }




 }
  export default AllScreen;