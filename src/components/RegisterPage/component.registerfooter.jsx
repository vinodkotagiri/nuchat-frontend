import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../shared/component.primarybutton';
import RedirectInfo from '../shared/component.redirectinfo';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
  return 'Enter correct details';
};
const getFormValidMessage = () => {
  return 'Click to Register';
};

const RegisterFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();
  const redirectToLoginPage = () => {
    navigate('/login');
  };
  return (
    <Fragment>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
        <div>
          <PrimaryButton
            label='Register'
            additionalStyles={{ marginTop: '2rem' }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text='Already has an  account?'
        redirectText='Login'
        additionalStyles={{ marginTop: '0.25rem' }}
        redirectHandler={redirectToLoginPage}
      />
    </Fragment>
  );
};

export default RegisterFooter;
