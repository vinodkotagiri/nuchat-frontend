import React from 'react';
import { Button } from '@mui/material';
const PrimaryButton = ({ label, additionalStyles, disabled, onClick }) => {
  return (
    <Button
      variant='contained'
      sx={{
        backgroundColor: '#8560F7',
        color: '#FFF',
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: 500,
        width: '100%',
        height: '2.5rem'
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}>
      {label}
    </Button>
  );
};

export default PrimaryButton;
