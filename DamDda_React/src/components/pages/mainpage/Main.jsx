// src/components/MainContent.jsx
import {React, useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../layout/Footer';
import NewSection from './NewSection'; // NewsSection 대신 NewSection으로 변경
import { Category } from '../../layout/Category';
import { Header } from '../../layout/Header';
import { CarouselComponent } from './Carousel';
import {CollaborationSection} from './Collaboration'
import {ServiceCards} from './ServiceCards'

// import { Payment } from '../support/payment';
// import Banner1 from '../../assets/banner-1.png'
import Banner2 from '../../assets/Banner2.png'
import {ProductRecommendations} from '../../layout/Product';
import { SearchBar } from '../../layout/SearchBar';
import "./MainBanner.css";
import "../../styles/style.css"
function Main() {
  const navigate = useNavigate();
  
  const [cartegory, setCartegory] = useState('all');
  const [search, setSearch] = useState('');
  const isFirstRender = useRef(true); // 처음 렌더링 여부 추적

  useEffect(() => {
    if (isFirstRender.current) {
      // 처음 렌더링 시에는 실행되지 않도록 함
      isFirstRender.current = false;
      return;
    }
    
    // 이후 상태가 변경될 때만 navigate 호출
    navigate(`/entire?category=${cartegory}&search=${search}`);
  }, [cartegory, search, navigate]);
  
  return (
    <>
      <Header />
      <CarouselComponent />
      <Category />
      <SearchBar />
      <ServiceCards></ServiceCards>



      
      <ProductRecommendations></ProductRecommendations>
      <ProductRecommendations></ProductRecommendations>

      <div className="banner-container2">
            <img
              src={Banner2}
              alt="Banner"
              className="banner-image2"
            />
          </div>
      <ProductRecommendations></ProductRecommendations>
      <ProductRecommendations></ProductRecommendations>

      <ProductRecommendations></ProductRecommendations>
      <NewSection />

      <CollaborationSection></CollaborationSection>
     
      
      <Footer />
      {/* <Payment /> */}
    </>
  );
}

export default Main;
