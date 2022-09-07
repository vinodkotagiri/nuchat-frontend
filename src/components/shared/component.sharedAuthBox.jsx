import React from 'react';
import { Box, styled } from '@mui/material';

const BoxWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#8560F7'
});

const AuthBox = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          backgroundColor: '#36393f',
          width: 700,
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 16px 0 #00000020',
          padding: '1.5rem'
        }}>
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
