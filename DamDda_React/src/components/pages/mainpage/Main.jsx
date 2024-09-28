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
  
  const [cartegory, setCartegory] = useState('전체');
  const [search, setSearch] = useState('');
  const isFirstRender = useRef(true); // 처음 렌더링 여부 추적

  // cartegory 또는 search가 바뀔 때 실행되는 useEffect
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // 첫 렌더링 이후로는 false로 설정
      return;
    }

    const fetchData = () => {
      navigate(`/entire?category=${cartegory}&search=${search}`);
      
      // 이곳에 데이터 요청이나 다른 비동기 작업을 수행하면 됩니다.
    };

    fetchData();
  }, [cartegory, search]); // 의존성 배열에 cartegory와 search 추가


  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     // 처음 렌더링 시에는 실행되지 않도록 함
  //     isFirstRender.current = false;
  //     return;
  //   }
    
  //   // 이후 상태가 변경될 때만 navigate 호출
  //   navigate(`/entire?category=${cartegory}&search=${search}`);
  // }, [cartegory, search, navigate]);
  
  return (
    <>
      <Header search={search} setSearch={setSearch}/>
      <CarouselComponent />
      <Category setCartegory={setCartegory}/>
      <SearchBar search={search} setSearch={setSearch}/>
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
