import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Slider extends React.Component {
  render() {
    return (<div >
    <ImageGallery {... (
        {
          thumbnailPosition: "right",
          useBrowserFullscreen: true,
          showPlayButton: true,
          showIndex: true,
          height: "400px",
          width: "400px",

    
          items: [
            {
                original: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                thumbnail: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              },
              {
                original: 'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                thumbnail: 'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              },
              {
                original: 'https://images.pexels.com/photos/6384/woman-hand-desk-office.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                thumbnail: 'https://images.pexels.com/photos/6384/woman-hand-desk-office.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              },
              {
                original: 'https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                thumbnail: 'https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              },  {
                original: 'https://images.pexels.com/photos/7101/wood-coffee-iphone-notebook.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                thumbnail: 'https://images.pexels.com/photos/7101/wood-coffee-iphone-notebook.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              },  {
                original: 'https://images.pexels.com/photos/4064848/pexels-photo-4064848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                thumbnail: 'https://images.pexels.com/photos/4064848/pexels-photo-4064848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              },  {
                original: 'https://images.pexels.com/photos/3831888/pexels-photo-3831888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                thumbnail: 'https://images.pexels.com/photos/3831888/pexels-photo-3831888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              }, 
          ]
        })}/></div>);
  }
}
 export default Slider