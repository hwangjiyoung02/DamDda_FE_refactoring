import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  LinearProgress,
  FormControl, InputLabel, Select, MenuItem
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CoverImage from "../../assets/coverImage.png";
import axios from "axios"; // axios를 사용하여 REST API 호출
import { useState, useEffect } from "react";

// Example product data
const pro11ducts = [
  {
    id: 1,
    title: "[마우스] 2만원대 버티컬 마우스",
    description: "무소음 클릭 X 트리플 멀티태스킹 기능",
    progress: 70,
    goal: "1,000,000원",
    daysLeft: "D-9",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "황지영",
  },
  {
    id: 2,
    title: "[멀티탭] 15구 괴물탭!",
    description: "C타입 단자까지 품은 타워형 멀티탭",
    progress: 50,
    goal: "2,000,000원",
    daysLeft: "D-15",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "김민수",
  },
  {
    id: 3,
    title: "[충전케이블] 6-in-1 멀티 고속 충전 케이블",
    description: "독일에서 온 6-in-1 멀티 고속 충전 케이블",
    progress: 80,
    goal: "1,500,000원",
    daysLeft: "D-5",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "박지훈",
  },
  {
    id: 4,
    title: "[케이스] 아이패드에 아날로그 크래프트",
    description: "크래프트 스트리보드 케이스를 입히다.",
    progress: 60,
    goal: "3,000,000원",
    daysLeft: "D-12",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "이서연",
  },
  {
    id: 5,
    title: "[보조배터리] 충전 쉽고 가성비 좋은",
    description: "가성비 & 가심비 모두 만족 충전",
    progress: 90,
    goal: "500,000원",
    daysLeft: "D-3",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "김재원",
  },
  {
    id: 6,
    title: "[헤드폰] 무선 블루투스 노이즈 캔슬링",
    description: "최신 기술의 무선 블루투스 헤드폰",
    progress: 65,
    goal: "2,500,000원",
    daysLeft: "D-10",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "이지현",
  },
  {
    id: 7,
    title: "[키보드] 기계식 RGB 키보드",
    description: "타건감이 좋은 기계식 키보드",
    progress: 40,
    goal: "1,200,000원",
    daysLeft: "D-7",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "김동현",
  },
  {
    id: 8,
    title: "[스피커] 프리미엄 블루투스 스피커",
    description: "고음질 무선 블루투스 스피커",
    progress: 85,
    goal: "3,500,000원",
    daysLeft: "D-4",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "최지은",
  },
  {
    id: 9,
    title: "[노트북 스탠드] 휴대용 알루미늄 스탠드",
    description: "노트북을 편리하게 사용하기 위한 휴대용 스탠드",
    progress: 75,
    goal: "800,000원",
    daysLeft: "D-11",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "정수현",
  },
  {
    id: 10,
    title: "[무선 충전기] 초고속 무선 충전 패드",
    description: "빠르고 간편한 무선 충전 솔루션",
    progress: 55,
    goal: "1,000,000원",
    daysLeft: "D-6",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "한예지",
  },
  {
    id: 11,
    title: "[모니터] 4K 해상도 초고화질 모니터",
    description: "몰입감 넘치는 4K 해상도의 고화질 모니터",
    progress: 45,
    goal: "5,000,000원",
    daysLeft: "D-20",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "정준혁",
  },
  {
    id: 12,
    title: "[게임 콘솔] 휴대용 게임기",
    description: "손안에서 즐기는 다양한 게임",
    progress: 90,
    goal: "2,200,000원",
    daysLeft: "D-2",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "윤지우",
  },
  {
    id: 13,
    title: "[USB 허브] 다기능 USB-C 허브",
    description: "노트북과 다양한 기기를 연결해주는 다기능 허브",
    progress: 50,
    goal: "1,300,000원",
    daysLeft: "D-8",
    image: CoverImage, // replace with actual image URLs',
    hearted: false,
    host: "박서연",
  },
  {
    id: 14,
    title: "[태블릿] 10인치 고화질 태블릿",
    description: "이동 중에도 편리하게 사용할 수 있는 태블릿",
    progress: 85,
    goal: "3,000,000원",
    daysLeft: "D-5",
    image: CoverImage, // replace with actual image URLs',
    hearted: true,
    host: "홍민재",
  },
  {
    id: 15,
    title: "[무선 이어폰] 노이즈 캔슬링 무선 이어폰",
    description: "최고의 음질을 제공하는 무선 이어폰",
    progress: 70,
    goal: "1,500,000원",
    daysLeft: "D-12",
    image: CoverImage, // replace with actual image URLs',
    hearted: false,
    host: "김다은",
  },
  {
    id: 16,
    title: "[휴대폰 케이스] 투명 방탄 케이스",
    description: "강력한 보호 성능의 휴대폰 케이스",
    progress: 30,
    goal: "500,000원",
    daysLeft: "D-14",
    image: CoverImage, // replace with actual image URLs',
    hearted: false,
    host: "조영호",
  },
  {
    id: 17,
    title: "[가습기] 무선 미니 가습기",
    description: "간편하게 사용 가능한 무선 가습기",
    progress: 90,
    goal: "600,000원",
    daysLeft: "D-3",
    image: CoverImage, // replace with actual image URLs',
    hearted: true,
    host: "서민호",
  },
  {
    id: 18,
    title: "[조명] 스마트 무드등",
    description: "분위기 있는 공간을 만들어주는 스마트 무드등",
    progress: 65,
    goal: "1,100,000원",
    daysLeft: "D-9",
    image: CoverImage, // replace with actual image URLs',
    hearted: true,
    host: "이지훈",
  },
  {
    id: 19,
    title: "[노트북] 초경량 고성능 노트북",
    description: "어디서든 휴대가 편리한 고성능 노트북",
    progress: 80,
    goal: "4,000,000원",
    daysLeft: "D-7",
    image: CoverImage, // replace with actual image URLs',
    hearted: false,
    host: "박서준",
  },
  {
    id: 20,
    title: "[삼각대] 휴대용 미니 삼각대",
    description: "카메라와 스마트폰을 위한 휴대용 삼각대",
    progress: 55,
    goal: "800,000원",
    daysLeft: "D-10",
    image: CoverImage, // replace with actual image URLs',
    hearted: true,
    host: "강수진",
  },
  {
    id: 21,
    title: "[드론] 초경량 미니 드론",
    description: "간편하게 조종할 수 있는 초경량 드론",
    progress: 45,
    goal: "2,200,000원",
    daysLeft: "D-15",
    image: CoverImage, // replace with actual image URLs',
    hearted: false,
    host: "김민재",
  },
  {
    id: 22,
    title: "[액션캠] 고화질 방수 액션카메라",
    description: "어디서든 촬영 가능한 고화질 액션카메라",
    progress: 70,
    goal: "2,500,000원",
    daysLeft: "D-8",
    image: CoverImage, // replace with actual image URLs',
    hearted: true,
    host: "오지훈",
  },
  {
    id: 23,
    title: "[스마트워치] 다기능 스마트워치",
    description: "건강 관리 기능을 포함한 다기능 스마트워치",
    progress: 75,
    goal: "2,800,000원",
    daysLeft: "D-6",
    image: CoverImage, // replace with actual image URLs',
    hearted: false,
    host: "이은주",
  },
  {
    id: 24,
    title: "[VR 기기] 가상현실 경험을 위한 VR 기기",
    description: "몰입감 있는 가상현실을 경험할 수 있는 VR 기기",
    progress: 85,
    goal: "3,500,000원",
    daysLeft: "D-4",
    image: CoverImage, // replace with actual image URLs',
    hearted: true,
    host: "최성훈",
  },
  {
    id: 25,
    title: "[카메라] 4K 고화질 카메라",
    description: "전문가급 촬영을 위한 4K 고화질 카메라",
    progress: 95,
    goal: "5,000,000원",
    daysLeft: "D-2",
    image: CoverImage, // replace with actual image URLs',
    hearted: true,
    host: "이수영",
  },

  {
    id: 26,
    title: "[헤드셋] 고음질 무선 헤드셋",
    description: "프리미엄 사운드를 제공하는 무선 헤드셋",
    progress: 60,
    goal: "2,000,000원",
    daysLeft: "D-7",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "김하늘",
  },
  {
    id: 27,
    title: "[전동 킥보드] 스마트 전동 킥보드",
    description: "도심에서 간편하게 이동할 수 있는 스마트 전동 킥보드",
    progress: 85,
    goal: "6,000,000원",
    daysLeft: "D-3",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "박정우",
  },
  {
    id: 28,
    title: "[스마트 램프] 음성 인식 스마트 램프",
    description: "음성으로 제어할 수 있는 스마트 램프",
    progress: 45,
    goal: "1,200,000원",
    daysLeft: "D-10",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "이승민",
  },
  {
    id: 29,
    title: "[외장하드] 초고속 외장하드",
    description: "데이터 백업을 위한 초고속 외장하드",
    progress: 75,
    goal: "3,500,000원",
    daysLeft: "D-5",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "정수진",
  },
  {
    id: 30,
    title: "[운동 기구] 스마트 헬스 기구",
    description: "집에서도 쉽게 운동할 수 있는 스마트 헬스 기구",
    progress: 70,
    goal: "2,000,000원",
    daysLeft: "D-8",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "송지훈",
  },
  {
    id: 31,
    title: "[키보드] 휴대용 블루투스 키보드",
    description: "어디서나 간편하게 사용할 수 있는 휴대용 블루투스 키보드",
    progress: 50,
    goal: "1,000,000원",
    daysLeft: "D-9",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "김다인",
  },
  {
    id: 32,
    title: "[디지털 액자] Wi-Fi 지원 디지털 액자",
    description: "사진을 쉽게 공유할 수 있는 디지털 액자",
    progress: 90,
    goal: "1,500,000원",
    daysLeft: "D-4",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "최지훈",
  },
  {
    id: 33,
    title: "[스마트 벨트] 체형 분석 스마트 벨트",
    description: "체형을 분석해주는 스마트 벨트",
    progress: 40,
    goal: "2,200,000원",
    daysLeft: "D-15",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "홍지수",
  },
  {
    id: 34,
    title: "[휴대폰 충전기] 고속 무선 충전기",
    description: "빠른 충전을 제공하는 무선 충전기",
    progress: 85,
    goal: "700,000원",
    daysLeft: "D-5",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "정하늘",
  },
  {
    id: 35,
    title: "[무선 청소기] 초강력 무선 청소기",
    description: "강력한 흡입력을 자랑하는 무선 청소기",
    progress: 70,
    goal: "3,000,000원",
    daysLeft: "D-6",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "김성호",
  },
  {
    id: 36,
    title: "[게이밍 마우스] 8버튼 게이밍 마우스",
    description: "프로 게이머를 위한 게이밍 마우스",
    progress: 65,
    goal: "2,000,000원",
    daysLeft: "D-10",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "이정민",
  },
  {
    id: 37,
    title: "[스마트 리모컨] IoT 지원 스마트 리모컨",
    description: "가전제품을 원격으로 제어할 수 있는 스마트 리모컨",
    progress: 75,
    goal: "1,000,000원",
    daysLeft: "D-8",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "박지우",
  },
  {
    id: 38,
    title: "[스마트 가전] IoT 기반 스마트 냉장고",
    description: "IoT를 통해 관리할 수 있는 스마트 냉장고",
    progress: 85,
    goal: "5,000,000원",
    daysLeft: "D-3",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "윤서영",
  },
  {
    id: 39,
    title: "[빔 프로젝터] 초소형 포터블 빔 프로젝터",
    description: "어디서나 사용할 수 있는 초소형 빔 프로젝터",
    progress: 90,
    goal: "2,500,000원",
    daysLeft: "D-4",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "강현우",
  },
  {
    id: 40,
    title: "[홈 시큐리티] 스마트 홈 시큐리티 카메라",
    description: "집을 안전하게 지켜주는 스마트 홈 시큐리티 카메라",
    progress: 50,
    goal: "3,000,000원",
    daysLeft: "D-7",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "최유진",
  },
  {
    id: 41,
    title: "[USB 메모리] 초고속 USB 3.0 메모리",
    description: "데이터 전송 속도가 빠른 USB 3.0 메모리",
    progress: 30,
    goal: "500,000원",
    daysLeft: "D-12",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "서지훈",
  },
  {
    id: 42,
    title: "[자동차 충전기] 차량용 고속 충전기",
    description: "차량에서 빠르게 충전 가능한 고속 충전기",
    progress: 65,
    goal: "1,200,000원",
    daysLeft: "D-9",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "윤진우",
  },
  {
    id: 43,
    title: "[스마트 락] 지문 인식 스마트 도어락",
    description: "안전한 지문 인식 기반의 스마트 도어락",
    progress: 85,
    goal: "2,500,000원",
    daysLeft: "D-4",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "이진호",
  },
  {
    id: 44,
    title: "[스마트 체중계] 체성분 분석 스마트 체중계",
    description: "체성분을 분석해주는 스마트 체중계",
    progress: 75,
    goal: "1,500,000원",
    daysLeft: "D-6",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "김현수",
  },
  {
    id: 45,
    title: "[로봇 청소기] AI 기반 로봇 청소기",
    description: "자동으로 청소하는 AI 기반 로봇 청소기",
    progress: 80,
    goal: "3,000,000원",
    daysLeft: "D-7",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "최현우",
  },
  {
    id: 46,
    title: "[디지털 키트] 만능 디지털 도구 키트",
    description: "다양한 기능을 가진 만능 디지털 키트",
    progress: 70,
    goal: "1,800,000원",
    daysLeft: "D-8",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "박현정",
  },
  {
    id: 47,
    title: "[방수 가방] 아웃도어용 방수 가방",
    description: "어떤 환경에서도 사용할 수 있는 방수 가방",
    progress: 60,
    goal: "1,200,000원",
    daysLeft: "D-10",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "이민정",
  },
  {
    id: 48,
    title: "[방진 마스크] 스마트 방진 마스크",
    description: "미세먼지와 유해물질을 차단하는 스마트 마스크",
    progress: 85,
    goal: "800,000원",
    daysLeft: "D-3",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "한지우",
  },
  {
    id: 49,
    title: "[스마트 연필] 디지털 필기용 스마트 연필",
    description: "디지털 기기와 연동되는 스마트 연필",
    progress: 90,
    goal: "2,000,000원",
    daysLeft: "D-2",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "홍현우",
  },
  {
    id: 50,
    title: "[헤드셋 스탠드] 무선 충전 지원 헤드셋 스탠드",
    description: "무선 충전 기능을 지원하는 헤드셋 스탠드",
    progress: 95,
    goal: "1,000,000원",
    daysLeft: "D-1",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "정유진",
  },
];

const rec11ommendedProducts = [
  {
    id: 1,
    title: "[스마트 화분] 자율 급수 기능을 갖춘 스마트 화분",
    description: "자동으로 물을 주고 식물 상태를 모니터링하는 스마트 화분",
    progress: 75,
    goal: "1,200,000원",
    daysLeft: "D-7",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "김영수",
  },
  {
    id: 2,
    title: "[스마트 책상] 높이 조절이 가능한 스마트 스탠딩 책상",
    description: "앉은 자세와 서 있는 자세로 쉽게 전환할 수 있는 스마트 책상",
    progress: 85,
    goal: "3,000,000원",
    daysLeft: "D-5",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "이지은",
  },
  {
    id: 3,
    title: "[스마트 블라인드] 햇빛을 감지하는 스마트 블라인드",
    description: "자동으로 햇빛의 세기에 따라 조절되는 스마트 블라인드",
    progress: 65,
    goal: "2,500,000원",
    daysLeft: "D-12",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "박민수",
  },
  {
    id: 4,
    title: "[스마트 시계] 건강 모니터링 기능을 갖춘 스마트 워치",
    description: "심박수, 수면 패턴 등을 모니터링하는 다기능 스마트 워치",
    progress: 90,
    goal: "1,800,000원",
    daysLeft: "D-3",
    image: CoverImage, // replace with actual image URLs
    hearted: true,
    host: "오지훈",
  },
  {
    id: 5,
    title: "[스마트 가방] 태양광 충전 기능이 있는 백팩",
    description: "태양광을 이용해 전자기기를 충전할 수 있는 스마트 가방",
    progress: 55,
    goal: "2,200,000원",
    daysLeft: "D-9",
    image: CoverImage, // replace with actual image URLs
    hearted: false,
    host: "정혜진",
  },
];

// Individual product card component

// Individual product card component
export const ProductCard = ({ product, handleLike }) => {
  // 달성률 계산 (fundsReceive / targetFunding * 100)
  const achievementRate = Math.min(
    (product.fundsReceive / product.targetFunding) * 100,
    100
  );

  // 현재 시간
  const currentTime = new Date();
  // product.endDate를 Date 객체로 변환
  const endDate = new Date(product.endDate);
  // 남은 시간 계산 (밀리초 기준)
  const timeDifference = endDate - currentTime;

  // 밀리초를 일(day) 단위로 변환
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  

  return (
    <>
      <Card
        sx={{
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: 2,
          position: "relative",
          width: "270px", // 고정된 가로 크기
          minWidth: "280px", // 최소 크기 설정
          maxWidth: "290px", // 최대 크기 설정
          transform: "scale(0.95)", // 전체 요소의 크기를 0.9배로 축소
          transformOrigin: "top left", // 스케일 기준점 설정
        }}
      >
        {/* 타이틀과 서브타이틀 */}

        <CardMedia
          component="img"
          image={`http://localhost:9000/${product.thumbnailUrl}`} // 이미지 URL을 서버에서 호출
          // image={product.image}
          sx={{ height: "170px", borderRadius: "5px" }} // 이미지 높이 증가
        />
        <IconButton
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            color: product.liked ? "red" : "gray",
          }}
          onClick={() => handleLike(product)}  // 클릭 시 좋아요 요청
        >
          <FavoriteIcon />
        </IconButton>
        <CardContent>
          {/* Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", fontSize: "0.9rem", mb: 1 }}
          >
            {product.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "0.85rem", mb: 1 }}
          >
            {product.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "0.75rem" }}
              >
                달성률 {achievementRate}%
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "0.75rem" }}
              >
                {product.targetFunding}
              </Typography>
            </Box>
          </Box>

          {/* Progress bar */}
          <LinearProgress
            variant="determinate"
            value={achievementRate}
            sx={{ height: 9, bordserRadius: "5px", mt: 1, mb: 2 }}
          />

          {/* Host and Deadline */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="small"
              sx={{
                backgroundColor: "#5a87f7",
                borderRadius: "12px",
                fontSize: "0.75rem",
              }}
            >
              마감임박 D - {daysLeft}
            </Button>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "0.75rem" }}
            >
              진행자: {product.nickName}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

// Product recommendations section
export const ProductRecommendations = () => {

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const [products, setProducts] = useState([]); // 서버에서 가져온 프로젝트 데이터
  const [totalProductNum, setTotalProductNum] = useState(0); // 서버에서 가져온 프로젝트 데이터
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
  
  const [recommendedProducts, setRecommendedProducts] = useState([]); // 서버에서 가져온 프로젝트 데이터

  const [progress, setProgress] = useState("all"); // progress 상태 관리

  const [sortCondition, setSortCondition] = useState("----------");
  const [cartegory, setCartegory] = useState("all");

  const itemsPerPage = 20; // 페이지당 항목 수
  const recommendedItemPerPage = 5; //에디터 추천도 동일하게 있어야 할 듯

  // 페이지네이션 요청을 보내는 함수
  const fetchProducts = async (page, progress, sortCondition, cartegory) => {
    try {
      const response = await axios.get(`http://localhost:9000/api/projects/projects`, {
        params: {
          category: cartegory,
          sort: sortCondition,
          memberId: 1,
          page: page,
          size: itemsPerPage,
          progress: progress, // 진행 상태 필터 적용
        },
      });
      
      if(response.data.dtoList !== null){
        setProducts(response.data.dtoList); // 서버에서 받은 프로젝트 리스트
      } else {
        setProducts([]); // 서버에서 받은 프로젝트 리스트
      }
      setTotalPages(Math.ceil(response.data.total / itemsPerPage)); // 전체 페이지 수 업데이트
      setTotalProductNum(response.data.total)
    } catch (error) {
      console.error("프로젝트 데이터를 가져오는 중 오류 발생:", error);
    }
  };
  
  const fetchRecommendedProducts = async (page, progress) => {
    try {
      const response = await axios.get(`http://localhost:9000/api/projects/projects`, {
        params: {
          category: cartegory,
          sort: sortCondition,
          page: page,
          memberId: 1,
          size: recommendedItemPerPage,
          progress: progress, // 진행 상태 필터 적용
        },
      });
      
      if(response.data.dtoList !== null){
        setRecommendedProducts(response.data.dtoList); // 서버에서 받은 프로젝트 리스트
      } else {
        setRecommendedProducts([]); // 서버에서 받은 프로젝트 리스트
      }
    } catch (error) {
      console.error("추천 프로젝트 데이터를 가져오는 중 오류 발생:", error);
    }
  };


   // 처음 마운트되었을 때 및 페이지 변경 시 데이터 가져오기
  useEffect(() => {
    fetchProducts(currentPage, progress, sortCondition, cartegory);
    fetchRecommendedProducts(currentPage, progress, sortCondition, cartegory)
  }, [currentPage, progress, sortCondition, cartegory]);


    // 클릭 핸들러
    const handleClick = (value) => {
      setProgress(value); // 클릭한 버튼에 따라 상태 변경
      setCurrentPage(1); // 새로운 필터로 처음 페이지부터 시작
    };


  const halfIndex = Math.ceil(products.length / 2); // 절반 인덱스 계산
  const firstHalf = products.slice(0, halfIndex); // 첫 번째 절반
  const secondHalf = products.slice(halfIndex); // 두 번째 절반


    // 페이지 번호 배열 생성
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  
    // 처음 페이지로 이동
    const handleFirstPage = () => {
      setCurrentPage(1);
    };


    // 이전 페이지로 이동
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    // 다음 페이지로 이동
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

    // 끝 페이지로 이동
    const handleEndPage = () => {
      setCurrentPage(totalPages);
    };

    const handleSortChange = (e) => {
      setSortCondition(e.value)
    }
 

    const memberId = 1;  

    // 좋아요 요청을 처리하는 함수
  const handleLike = async (project) => {
    try {
      if (project.liked) {
        // liked가 true이면 DELETE 요청
        const response = await axios.delete(`http://localhost:9000/api/projects/like`, {
          params: {
            memberId: memberId,
            projectId: project.id,
          },
        });
        console.log("좋아요 취소 성공:", response.data);
      } else {
        // liked가 false이면 POST 요청
        const response = await axios.post(`http://localhost:9000/api/projects/like`, null, {
          params: {
            memberId: memberId,
            projectId: project.id,
          },
        });
        console.log("좋아요 성공:", response.data);
      }

    // fetchProducts(currentPage, progress);
    // fetchRecommendedProducts(currentPage, progress)

      // 이후에 필요한 처리 (예: UI 업데이트)
      setProducts((prevProjects) =>
        prevProjects.map((prevProject) =>
          prevProject.id === project.id ? { ...prevProject, liked: !prevProject.liked } : prevProject
        )
      );
    } catch (error) {
      console.error("좋아요 요청 중 오류 발생:", error);
    }
  };


  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        {/* Title section similar to the example image */}


        {/* 상품 카드 그리드 */}
        <Box
          sx={{
            margin: "0 auto",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 1600,
            maxWidth: "100%",
          }}
        >
          
            {/* 중간 텍스트 */}
            <Box
              sx={{
                paddingLeft: 2, // 왼쪽으로 살짝 이동 (2는 16px)
                textAlign: "left",
                fontSize: "0.875rem", // 글씨 크기 조정 (1rem = 16px -> 0.875rem = 14px)
                width : "100%"
              }}
            >
              <Box
  sx={{
    display: "flex",
    justifyContent: "space-between", // 요소들을 좌우로 배치
    alignItems: "center", // 수직 가운데 정렬
    width: "100%", // 컨테이너 너비를 100%로 설정
    marginBottom: 2, // 아래쪽 여백
  }}
>
  {/* 좌측 타이틀 */}
  <Box>
    <h2 style={{ fontSize: "1.7rem", marginBottom: 20 }}>전체 프로젝트</h2>
    <h4 style={{ fontSize: "1.1rem", margin: 5, marginBottom: 20 }}>
      {totalProductNum}개의 프로젝트가 있습니다.
    </h4>
  </Box>

  {/* 우측 드롭다운 (정렬 기준) */}
  <FormControl sx={{ minWidth: 200 }}>
    <InputLabel id="sort-select-label">정렬 기준</InputLabel>
    <Select
      labelId="sort-select-label"
      id="sort-select"
      value={sortCondition} // 현재 선택된 정렬 조건
      label="정렬 기준"
      onChange={handleSortChange} // 선택 시 호출
    >
      <MenuItem value="fundsReceive">----------</MenuItem>
      <MenuItem value="fundsReceive">달성률순</MenuItem>
      <MenuItem value="endDate">마감 임박순</MenuItem>
      <MenuItem value="viewCnt">최다 조회순</MenuItem>
      <MenuItem value="createdAt">등록순</MenuItem>
      <MenuItem value="targetFunding">최다 후원금액순</MenuItem>
      <MenuItem value="supporterCnt">최대 후원자순</MenuItem>
      <MenuItem value="likeCnt">좋아요순</MenuItem>
    </Select>
  </FormControl>
</Box>

            
              <Box            
          sx={{
            marginBottom: 3, // 아래쪽 여백
          }}
              >

      {/* 전체 프로젝트 버튼 */}
      <Button
        onClick={() => handleClick("all")}
        variant={progress === "all" ? "contained" : "outlined"} // 상태에 따라 variant 변경
        // color="secondary"
        size="small"
        sx={{
          // backgroundColor: progress === "all" ? "#5a87f7" : "transparent", // 배경색도 동적으로
          borderRadius: "12px",
          fontSize: "0.75rem",
          marginRight: "20px",
        }}
      >
        전체 프로젝트
      </Button>

      {/* 진행중인 프로젝트 버튼 */}
      <Button
        onClick={() => handleClick("ongoing")}
        variant={progress === "ongoing" ? "contained" : "outlined"} // 상태에 따라 variant 변경
        // color="secondary"
        size="small"
        sx={{
          // backgroundColor: progress === "progress" ? "#5a87f7" : "transparent", // 배경색도 동적으로
          borderRadius: "12px",
          fontSize: "0.75rem",
          marginRight: "20px",
        }}
      >
        진행중인 프로젝트
      </Button>

      {/* 종료된 프로젝트 버튼 */}
      <Button
        onClick={() => handleClick("completed")}
        variant={progress === "completed" ? "contained" : "outlined"} // 상태에 따라 variant 변경
        // color="secondary"
        size="small"
        sx={{
          // backgroundColor: progress === "completed" ? "#5a87f7" : "transparent", // 배경색도 동적으로
          borderRadius: "12px",
          fontSize: "0.75rem",
        }}
      >
        종료된 프로젝트
      </Button>
    </Box>
    

              {/* 글씨 크기 줄이기 */}
            </Box>
          <Box
            sx={{
              // display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "auto",
            }}
          >



            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ flexGrow: 0 }}
            >
              {firstHalf.map((product) => (
                <Grid
                  item
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2.4}
                  display="flex"
                  justifyContent="center"
                >
                  <ProductCard product={product} handleLike={handleLike} />
                </Grid>
              ))}
            </Grid>

            {/* 중간 텍스트 */}
            <Box
              sx={{
                paddingLeft: 2, // 왼쪽으로 살짝 이동 (2는 16px)
                textAlign: "left",
                fontSize: "0.875rem", // 글씨 크기 조정 (1rem = 16px -> 0.875rem = 14px)
              }}
            >
              <h2 style={{ fontSize: "1.25rem", margin: 0 }}>에디터 추천 상품</h2>{" "}
              {/* 글씨 크기 줄이기 */}
            </Box>

            {/* 회색 배경과 추천 상품 */}
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#f0f0f0", // 회색 배경
                padding: 4,
                marginY: 2, // 위아래 여백
              }}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                {recommendedProducts.map((product) => (
                  <Grid
                    item
                    key={product.id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2.4}
                    display="flex"
                    justifyContent="center"
                  >
                    <ProductCard product={product} handleLike={handleLike} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            {/* 두 번째 카드 그룹 */}
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ flexGrow: 0 }}
            >
              {secondHalf.map((product) => (
                <Grid
                  item
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2.4}
                  display="flex"
                  justifyContent="center"
                >
                  <ProductCard product={product} handleLike={handleLike} />
                </Grid>
              ))}
            </Grid>

      {/* 페이지네이션 버튼 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >

        <Button
          onClick={handleFirstPage}
          disabled={currentPage === 1}
        >
          처음으로
        </Button>

        <Button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          이전
        </Button>
        
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 0 }}>
      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)} // 페이지 변경
          variant={currentPage === pageNumber ? "contained" : "outlined"} // 현재 페이지 스타일
          sx={{ mx: 1.0 ,
            minWidth: 40,  // 최소 너비
            minHeight: 40,  // 최소 높이
            fontSize: "0.8rem",  // 폰트 크기 조절
            }} // 좌우 간격
          
        >
          {pageNumber}
        </Button>
      ))}
    </Box>

        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          다음
        </Button>
        
        <Button
          onClick={handleEndPage}
          disabled={currentPage === totalPages}
        >
          끝으로
        </Button>

      </Box>
          </Box>
        </Box>
        
      </Box>
    </>
  );
};
