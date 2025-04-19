import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import MainSlider from '@/components/main/main.slider';

export default function HomePage() {
  return (
    // <Box sx={{ display: 'flex' }}>
    // </Box>
    <Container>
      <MainSlider/>
      <MainSlider/>
    </Container>
  );
}
