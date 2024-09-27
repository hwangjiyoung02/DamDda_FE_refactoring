// src/components/MainContent.jsx
import React from 'react';
import { Footer } from '../../layout/Footer';
// import NewSection from './NewSection'; // NewsSection 대신 NewSection으로 변경
import { Category } from '../../layout/Category';
import { Header } from '../../layout/Header';
// import { CarouselComponent } from './Carousel';
// import {CollaborationSection} from './Collaboration'
// import {ServiceCards} from './ServiceCards'

// import { Payment } from '../support/payment';
// import Banner1 from '../../assets/banner-1.png'
// import Banner2 from '../../assets/Banner2.png'
import { Box } from '@mui/material';
import {ProductRecommendations} from './Product';
// import { SearchBar } from '../../layout/SearchBar';
import "./MainBanner.css";
import "../../styles/style.css"
function Main() {
  return (
    <>
      <Header />
      {/* <CarouselComponent /> */}
      {/* Header와 Category 사이에 여백 추가 */}
      <Box sx={{ marginTop: 4 }}> {/* marginTop으로 여백 조절 */}
      <Category />
      </Box>
      {/* <SearchBar /> */}
      {/* <ServiceCards></ServiceCards> */}
      
      <ProductRecommendations></ProductRecommendations>

      {/* <div className="banner-container2">
            <img
              src={Banner2}
              alt="Banner"
              className="banner-image2"
            />
          </div> */}
      {/* <NewSection /> */}

      {/* <CollaborationSection></CollaborationSection> */}
     
      
      <Footer />
      {/* <Payment /> */}
    </>
  );
}

export default Main;
