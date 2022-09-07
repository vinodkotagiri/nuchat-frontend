import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../shared/component.primarybutton';
import RedirectInfo from '../shared/component.redirectinfo';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
  return 'Enter valid credentials';
};
const getFormValidMessage = () => {
  return 'Click to Login';
};

const LoginFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const redirectToRegisterPage = () => {
    navigate('/register');
  };
  return (
    <Fragment>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
        <div>
          <PrimaryButton
            label='Log in'
            additionalStyles={{ marginTop: '2rem' }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text='Need an account?'
        redirectText='create an account'
        additionalStyles={{ marginTop: '0.25rem' }}
        redirectHandler={redirectToRegisterPage}
      />
    </Fragment>
  );
};

export default LoginFooter;
