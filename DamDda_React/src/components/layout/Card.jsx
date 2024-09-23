import React from "react";
import Rightarrow from "../assets/right-arrow.png";

import { ProgressBar } from "./ProgressBar";
import "./Card.css";
import heart from "../assets/heart.png"
import '../styles/style.css'

//   return (
//     <div className="card">
     
//    <div className="container">
//                                 <span className="damdda-title">
//                                   DamDda : special <span className="highlight">Exhibition</span> 🖼️
//                                 </span>
//                               <p className="text" style={{ padding: '5px' }}> {/* 5px 패딩 적용 */}
//                                   <span className="text-wrapper">[담ː따] 의 </span>
//                                   <span className="span">기획전</span>
//                               </p>
//                           </div>
                  

//       <div className="card-container">
//         <div className="card-section-wrapper">
//           <div className="card-section">
//             <div className="card-margin-wrapper">
//               <div className="card-margin">
//                 <div className="card-container-2">
//                   <a
//                     className="card-link"
//                     href="https://edu.goorm.io/lecture/44039/re-commit-%ED%83%80%EC%9E%85%EC%9C%BC%EB%A1%9C-%EA%B2%AC%EA%B3%A0%ED%95%98%EA%B2%8C-%EB%8B%A4%ED%98%95%EC%84%B1%EC%9C%BC%EB%A1%9C-%EC%9C%A0%EC%97%B0%ED%95%98%EA%B2%8C-kaist-%EC%A0%84%EC%82%B0%ED%95%99%EB%B6%80-%ED%99%8D%EC%9E%AC%EB%AF%BC"
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   >
//                     <div className="card-image">
//                       <div className="coverimage-png-wrapper">
//                         <div className="coverimage-png" />
//                       </div>
//                     </div>
//                     <div className="card-text">
//                       <p className="card-project-title">
//                         <span className="text-wrapper-2">[ 마우스 ]</span>
//                         <span className="text-wrapper-3"> 2만원 대 버티컬 마우스</span>
//                       </p>
//                       <div className="div-2">
//                         <div className="div-wrapper-2">
//                           <p className="card-text-phrase">무소음 클릭 X 트리플 멀티태스킹 기능</p>
//                         </div>
//                         <div className="div-3">
//                           <div className="card-progress-bar">
//                             <div className="div">
//                               <img className="SVG-margin" alt="Svg margin" src="SVG-margin.svg" />
//                               <div className="div-wrapper-3">
//                                 <div className="text-wrapper-4">달성률 %</div>
//                               </div>
//                               <div className="margin">
//                                 <div className="vertical-divider" />
//                               </div>
//                             </div>
//                             <div className="div">
//                               <div className="div-wrapper-3">
//                                 <div className="text-wrapper-5">1,000,000원</div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="progress-bar-wrapper">
//                             <div className="progress-bar-instance-wrapper">
//                               <ProgressBar
//                                 className="progress-bar-instance"
//                                 filledClassName="progress-bar-2"
//                                 trackClassName="design-component-instance-node"
//                                 value="zero"
//                               />
//                             </div>
//                           </div>
//                           <div className="button-container">
//                             <p className="progressor">
//                               <span className="text-wrapper-6">진행자 : </span>
//                               <span className="text-wrapper-7">황지영</span>
//                             </p>
//                             <p className="progressor-margin">
                           
//                             </p>
//                             <div className="tag">
//                               <div className="container-2">
//                                 <div className="div-wrapper-3">
//                                   <div className="text-wrapper-8">마감임박 D-9</div>
//                                 </div>
                             
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                   <img className="heart" alt="Heart" src={heart} />
//                 </div>
//               </div>
//             </div>
           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
export const Card = () => {
  return (
    <div className="card">
      <div
  className="container"
  style={{
    marginRight:700,

  }}
 >
        <span className="damdda-title">
          DamDda : special <span className="highlight">Exhibition</span> 🖼️
        </span>
        <p className="text">
          <span className="text-wrapper">[담ː따] 의 </span>
          <span className="span">기획전</span>
        </p>
      </div>

      <div className="card-container" style={{
   

  }} >
        <div className="card-section-wrapper">
          <div className="card-section">
            <div className="card-margin-wrapper">
              <div className="card-margin">
                <div className="card-container-2">
                  <a
                    className="card-link"
                    href="https://edu.goorm.io/lecture/44039/re-commit-%ED%83%80%EC%9E%85%EC%9C%BC%EB%A1%9C-%EA%B2%AC%EA%B3%A0%ED%95%98%EA%B2%8C-%EB%8B%A4%ED%98%95%EC%84%B1%EC%9C%BC%EB%A1%9C-%EC%9C%A0%EC%97%B0%ED%95%98%EA%B2%8C-kaist-%EC%A0%84%EC%82%B0%ED%95%99%EB%B6%80-%ED%99%8D%EC%9E%AC%EB%AF%BC"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="card-image">
                      <div className="coverimage-png-wrapper">
                        <div className="coverimage-png" />
                      </div>
                    </div>
                    <div className="card-text">
                      <p className="card-project-title">
                        <span className="text-wrapper-2">[ 마우스 ]</span>
                        <span className="text-wrapper-3"> 2만원 대 버티컬 마우스</span>
                      </p>
                      <div className="div-2">
                        <div className="div-wrapper-2">
                          <p className="card-text-phrase">무소음 클릭 X 트리플 멀티태스킹 기능</p>
                        </div>
                        <div className="div-3">
                          <div className="card-progress-bar">
                            <div className="div">
                              <img className="SVG-margin" alt="Svg margin" src="SVG-margin.svg" />
                              <div className="div-wrapper-3">
                                <div className="text-wrapper-4">달성률 %</div>
                              </div>
                              <div className="margin">
                                <div className="vertical-divider" />
                              </div>
                            </div>
                            <div className="div">
                              <div className="div-wrapper-3">
                                <div className="text-wrapper-5">1,000,000원</div>
                              </div>
                            </div>
                          </div>
                          <div className="progress-bar-wrapper">
                            <div className="progress-bar-instance-wrapper">
                              <ProgressBar
                                className="progress-bar-instance"
                                filledClassName="progress-bar-2"
                                trackClassName="design-component-instance-node"
                                value={70} 
                              />
                            </div>
                          </div>
                          <div className="button-container">
                            <p className="progressor">
                              <span className="text-wrapper-6">진행자 : </span>
                              <span className="text-wrapper-7">황지영</span>
                            </p>
                            <p className="progressor-margin"></p>
                            <div className="tag">
                              <div className="container-2">
                                <div className="div-wrapper-3">
                                  <div className="text-wrapper-8">마감임박 D-9</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <img className="heart" alt="Heart" src={heart} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
