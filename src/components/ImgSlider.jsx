import Slider from "react-slick";
export function imgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    
    <div className="gallery-container">
      <div id="gallery" className="gallery">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="card">
              <img src="src/assets/img/img2.jpg" alt="" className="w-100"/>
              
            </div>
            <div className="card">
              <img src="src/assets/img/img3.jpg" alt="" className="w-100"/>
            
            </div>
            <div className="card">
              <img src="src/assets/img/img4.jpg" alt="" className="w-100"/>
            </div>
            <div className="card">
              <img src="src/assets/img/img5.jpg" alt="" className="w-100"/>
            </div>
            <div className="card">
              <img src="src/assets/img/img6.jpg" alt="" className="w-100"/>
            </div>
            <div className="card">
              <img src="src/assets/img/img7.jpg" alt="" className="w-100"/>
            </div>
      </Slider>
      
     </div>
     </div>
    </div>
    
   
  );
}

export default imgSlider;