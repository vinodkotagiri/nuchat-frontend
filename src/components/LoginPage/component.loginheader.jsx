import React, { Fragment } from 'react';
import { Typography } from '@mui/material';
const LoginHeader = () => {
  return (
    <Fragment>
      <Typography variant='h5' sx={{ color: '#fff' }}>
        Welcome Back!
      </Typography>
      <Typography sx={{ color: '#b9bbbe', fontWeight: 'thin' }}>
        We are happy that you are with us!
      </Typography>
    </Fragment>
  );
};

export default LoginHeader;
