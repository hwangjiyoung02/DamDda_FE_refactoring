// src/components/MainContent.jsx
import React from 'react';
import { Footer } from '../../layout/Footer';
import { Exhibition } from './Exhibition';
import { Category } from '../../layout/Category';
import { Header } from '../../layout/Header';
import { CarouselComponent } from './Carousel';
import { CollaborationSection } from './Collaboration';
// import { Payment } from '../support/payment';
// import Banner1 from '../../assets/banner-1.png'
import Banner2 from '../../assets/banner-2.png'
import Collaboration from '../../assets/collaboration.png'
import {ProductRecommendations} from '../../layout/Product';
import { SearchBar } from '../../layout/SearchBar';
import "./MainBanner.css";
import "../../styles/style.css"
function Main() {
  return (
    <>
      <Header />
      <CarouselComponent />
      <Category />
      <SearchBar />

      
      {/* Banner Image in between Category and Exhibition */}
      {/* <div className="banner-container1">
        <img
          src={Banner1}
          alt="Banner"
          className="banner-image"
        />
      </div> */}
      
      {/* <Exhibition /> */}
      
  <ProductRecommendations></ProductRecommendations>
  <ProductRecommendations></ProductRecommendations>

  <CollaborationSection></CollaborationSection>
      {/* <div className="banner-container2">
        <img
          src={Banner2}
          alt="Banner"
          className="banner-image"
        />
      </div>
      <div className="banner-container2">
     
           <img className="damdda-special" alt="Damdda special" src={Collaboration} />

      </div> */}
      <Footer />
      {/* <Payment /> */}
    </>
  );
}

export default Main;
