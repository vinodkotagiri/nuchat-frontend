import React from 'react';
import { styled } from '@mui/material';
const InputsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%'
});

const Label = styled('p')({
  color: '#b9bbbe',
  textTransform: 'uppercase',
  fontWeight: 600,
  fontSize: '1rem'
});
const Input = styled('input')({
  flexGrow: 1,
  height: '2.5rem',
  border: '1px solid #000',
  borderRadius: '0.25rem',
  backgroundColor: '#35393f',
  marign: 0,
  fontSize: '1rem',
  padding: '0 0.25rem'
});
const InputWithLabel = (props) => {
  const { value, setValue, label, type, placeholder } = props;
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <InputsWrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleValueChange}
      />
    </InputsWrapper>
  );
};

export default InputWithLabel;
