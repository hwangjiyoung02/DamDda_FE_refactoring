import React from "react";
import { useNavigate } from "react-router-dom"; // 추가
import "./Category.css";

// 이미지들을 모두 import
import dAbstract from '../assets/d-abstract-holographic-form.png';
import cosmeticComposition from '../assets/cosmetic-composition.png';
import pinkHeadphones from '../assets/pink-headphones-floating.png';
import movieCamera from '../assets/movie-video-camera.png';
import foodBasket from '../assets/Food-basket-with-groceries.png';
import tShirtMockup from '../assets/t-shirt-mockup.png';
import gameController from '../assets/game-controller.png';
import traditional from '../assets/traditional.png';

export const Category = () => {
    const navigate = useNavigate(); // 추가

    return (
        <div className="category">
            <div className="div">
                <button className="button" onClick={() => navigate('/전체')}>
                    <div className="margin">
                        <div className="background">
                            <img className="d-abstract" alt="D abstract" src={dAbstract} />
                        </div>
                    </div>
                    <div className="container">
                        <div className="text-wrapper">전체</div>
                    </div>
                </button>
                <button className="button-2" onClick={() => navigate('/뷰티')}>
                    <div className="margin">
                        <div className="cosmetic-composition-wrapper">
                            <img className="cosmetic-composition" alt="Cosmetic composition" src={cosmeticComposition} />
                        </div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper">뷰티</div>
                    </div>
                </button>
                <button className="button" onClick={() => navigate('/kpop')}>
                    <div className="margin">
                        <div className="background">
                            <img className="pink-headphones" alt="Pink headphones" src={pinkHeadphones} />
                        </div>
                    </div>
                    <div className="container">
                        <div className="text-wrapper">K - POP</div>
                    </div>
                </button>
                <button className="button" onClick={() => navigate('/k-content')}>
                    <div className="margin">
                        <div className="background">
                            <img className="movie-video-camera" alt="Movie video camera" src={movieCamera} />
                        </div>
                    </div>
                    <div className="container-2">
                        <div className="text-wrapper-2">K- 콘텐츠</div>
                    </div>
                </button>
                <button className="button" onClick={() => navigate('/음식')}>
                    <div className="margin">
                        <div className="background">
                            <img className="img" alt="Food basket with" src={foodBasket} />
                        </div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper">음식</div>
                    </div>
                </button>
                <button className="button" onClick={() => navigate('/문화재')}>
                    <div className="margin">
                        <div className="background">
                            <img className="img" alt="Traditional" src={traditional} />
                        </div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper">문화재</div>
                    </div>
                </button>
                <button className="button" onClick={() => navigate('/패션')}>
                    <div className="margin">
                        <div className="background">
                            <img className="img" alt="T shirt mockup" src={tShirtMockup} />
                        </div>
                    </div>
                    <div className="container-3">
                        <div className="text-wrapper">패션</div>
                    </div>
                </button>
                <button className="button" onClick={() => navigate('/게임')}>
                    <div className="margin">
                        <div className="background">
                            <img className="game-controller" alt="Game controller" src={gameController} />
                        </div>
                    </div>
                    <div className="container-2">
                        <div className="text-wrapper">게임</div>
                    </div>
                </button>
            </div>
        </div>
    );
};
