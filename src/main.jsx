import React from 'react'
import ReactDOM from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import HeaderNavMenu from './components/HeaderNavMenu.jsx';
import SectionComponent from './components/SectionComponent.jsx';
import ImgSlider from './components/ImgSlider.jsx';
import ReviewsComponent from './components/ReviewsComponent.jsx';
import ScrollUpIcon from './components/ScrollUpIcon.jsx';
import ContactComponent from './components/ContactComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';
import InformationComponent from './components/InformationComponent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderNavMenu />
    <br/>
    <ScrollUpIcon/>
    <SectionComponent />
    <ImgSlider/>
    <InformationComponent/>
    <ReviewsComponent />
    <ContactComponent />
    <FooterComponent />
  </React.StrictMode>,
)
