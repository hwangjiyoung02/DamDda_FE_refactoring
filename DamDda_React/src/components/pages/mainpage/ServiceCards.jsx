import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'; // Placeholder for document icon
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // Placeholder for money icon

const services = [
  {
    title: '보험 리모델링 서비스',
    description: '고객님께 맞는 최적의 보험을 찾아보세요',
    icon: <InsertDriveFileIcon sx={{ fontSize: 50, color: 'white' }} />,
    backgroundColor: '#ff914d',
  },
  {
    title: '보험계약대출',
    description: '신용도 영향없는 보험계약 대출 받기',
    icon: <AttachMoneyIcon sx={{ fontSize: 50, color: 'white' }} />,
    backgroundColor: '#4b87f5',
  },
  {
    title: '보험계약대출',
    description: '신용도 영향없는 보험계약 대출 받기',
    icon: <AttachMoneyIcon sx={{ fontSize: 50, color: 'white' }} />,
    backgroundColor: '#4b87f5',
  },
];
export const ServiceCards = () => {
  return (

    <Box sx={{ width: '100%', padding: '40px 0', backgroundColor: '#f8f8f8', display: 'flex',justifyContent: 'center' ,margin: 'auto 0'  }}>
      <Grid container justifyContent="center" spacing={5} sx={{ maxWidth: '1400px',textAlign: 'center'}}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '20px',
                backgroundColor: service.backgroundColor,
                color: 'white',
                padding: '20px',
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  {service.description}
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 2 }}>{service.icon}</Box>
              
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceCards;
