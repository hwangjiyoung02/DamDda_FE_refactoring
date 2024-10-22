import React, { useState } from "react";
import { translateTexts } from "utils/TranslationService";

import translateIcon from "assets/translate-icon.png"; // 번역하기 아이콘
import restoreIcon from "assets/original-icon.png"; // 원본 복구 아이콘
import englishIcon from "assets/english-icon.png"; // 영어 아이콘
import koreanIcon from "assets/korean-icon.png"; // 한국어 아이콘
import frenchIcon from "assets/french-icon.png"; // 프랑스어 아이콘
import spanishIcon from "assets/spanish-icon.png"; // 스페인어 아이콘
import japaneseIcon from "assets/japanese-icon.png"; // 일본어 아이콘
import chineseIcon from "assets/chinese-icon.png"; // 중국어 아이콘 (간체자)

const TranslatePage = () => {
  const [isTranslated, setIsTranslated] = useState(false);
  const [originalTexts, setOriginalTexts] = useState([]);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  // 텍스트 노드를 찾는 함수
  const findTextNodes = (node) => {
    let textNodes = [];
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
      textNodes.push(node);
    } else {
      node.childNodes.forEach((child) => {
        textNodes = textNodes.concat(findTextNodes(child));
      });
    }
    return textNodes;
  };

  const handleTranslate = async (targetLanguage) => {
    const textNodes = findTextNodes(document.body); // 모든 텍스트 노드 찾기
    const textsToTranslate = [];
    const originals = [];

    textNodes.forEach((node) => {
      originals.push(node.nodeValue); // 원본 텍스트 저장
      textsToTranslate.push(node.nodeValue); // 번역할 텍스트 수집
    });

    setOriginalTexts(originals); // 원본 텍스트 저장

    if (textsToTranslate.length > 0) {
      const translatedTexts = await translateTexts(
        textsToTranslate,
        targetLanguage
      ); // 선택된 언어로 번역
      translatedTexts.forEach((translatedText, i) => {
        textNodes[i].nodeValue = translatedText; // 번역된 텍스트로 대체
      });
    }

    setIsTranslated(true); // 번역 완료 상태
    setShowLanguageOptions(false); // 언어 선택 옵션 숨기기
  };

  const handleRestore = () => {
    const textNodes = findTextNodes(document.body); // 모든 텍스트 노드 다시 찾기
    originalTexts.forEach((originalText, i) => {
      textNodes[i].nodeValue = originalText; // 원본 텍스트로 복구
    });
    setIsTranslated(false);
  };

  return (
    <div
      onMouseEnter={() => setShowLanguageOptions(true)} // 전체 컨테이너에 호버 이벤트 적용
      onMouseLeave={() => setShowLanguageOptions(false)} // 마우스가 벗어났을 때 옵션 숨기기
      style={{
        position: "fixed",
        bottom: "200px",
        right: "350px",
        display: "flex",
        flexDirection: "column-reverse", // 세로로 아래에서 위로 버튼 배치
        gap: "10px",
      }} // 버튼들과 언어 선택 버튼을 감싸는 컨테이너
    >
      <img
        src={isTranslated ? restoreIcon : translateIcon}
        alt={isTranslated ? "원본으로 복구" : "번역하기"}
        onClick={isTranslated ? handleRestore : null} // 복구 기능만 활성화
        style={{
          cursor: "pointer",
          width: "80px", // 이미지 크기 조절
          height: "50px",
        }}
      />

      {/* 언어 선택 버튼들 */}
      {showLanguageOptions && !isTranslated && (
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse", // 언어 선택 버튼이 아래에서 위로 쌓이도록 설정
            gap: "5px", // 버튼 간격
            backgroundColor: "white", // 버튼 배경색
            padding: "10px", // 버튼 주변 여백
            borderRadius: "8px", // 모서리 둥글게
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 약간의 그림자 효과
          }}
        >
          {/* 언어 선택 버튼 (이미지로 표현) */}
          <img
            src={englishIcon}
            alt="English"
            onClick={() => handleTranslate("en")}
            style={{ cursor: "pointer", width: "80px", height: "40px" }}
          />
          <img
            src={koreanIcon}
            alt="한국어"
            onClick={() => handleTranslate("ko")}
            style={{ cursor: "pointer", width: "80px", height: "40px" }}
          />
          <img
            src={frenchIcon}
            alt="Français"
            onClick={() => handleTranslate("fr")}
            style={{ cursor: "pointer", width: "80px", height: "40px" }}
          />
          <img
            src={spanishIcon}
            alt="Español"
            onClick={() => handleTranslate("es")}
            style={{ cursor: "pointer", width: "80px", height: "40px" }}
          />
          <img
            src={japaneseIcon}
            alt="日本語"
            onClick={() => handleTranslate("ja")} // 일본어 번역
            style={{ cursor: "pointer", width: "80px", height: "40px" }}
          />
          <img
            src={chineseIcon}
            alt="中文"
            onClick={() => handleTranslate("zh-CN")} // 중국어 번역 (간체자)
            style={{ cursor: "pointer", width: "80px", height: "40px" }}
          />
        </div>
      )}
    </div>
  );
};

export default TranslatePage;
