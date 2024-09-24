import React from 'react';
import { Box, Grid, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Example data for cards
const cardData = [
  {
    title: '클라우드 뉴스',
    description: '10만 과학 콘텐츠 학습한 하이퍼클로바X 기반의 과학 지식 챗봇 서비스',
    buttonText: '자세히 보기',
    imageUrl: 'https://via.placeholder.com/300x200', // Replace with actual image URL
  },
  {
    title: '프로모션',
    description: '인증서 자동 발급·갱신 Advanced DV 인증서 할인 프로모션 진행',
    buttonText: '자세히 보기',
    imageUrl: 'https://via.placeholder.com/300x200', // Replace with actual image URL
  },
  {
    title: '클라우드 뉴스',
    description: '이미지·음성 처리하는 멀티모달 생성형 AI 하이퍼클로바X',
    buttonText: '자세히 보기',
    imageUrl: 'https://via.placeholder.com/300x200', // Replace with actual image URL
  },
  {
    title: '프로모션',
    description: '네이버웍스 플랫폼 런칭 기념 신규가입 고객 3개월 무료 혜택',
    buttonText: '자세히 보기',
    imageUrl: 'https://via.placeholder.com/300x200', // Replace with actual image URL
  },
];

const CardComponent = ({ title, description, buttonText, imageUrl }) => (
  <Card sx={{ borderRadius: '15px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', height: '100%' }}>
    <CardMedia component="img" image={imageUrl} alt={title} sx={{ height: 150 }} />
    <CardContent>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
        {description}
      </Typography>
      <Button variant="text" sx={{ color: '#0071e3' }}>
        {buttonText} &rarr;
      </Button>
    </CardContent>
  </Card>
);

const NewSection = () => (
  <Box sx={{ width: '70%', margin: 'auto', marginTop: 4,maxWidth:1500,height:500 }}>
    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 4 }}>
      네이버 클라우드 플랫폼의 최신 소식을 확인하세요
    </Typography>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Grid container spacing={6} sx={{ flexGrow: 1 }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CardComponent {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default NewSection;