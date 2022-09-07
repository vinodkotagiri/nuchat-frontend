import React, { Fragment } from 'react';
import InputWithLabel from '../shared/component.inputslabel';
const LoginInputs = ({ email, setEmail, password, setPassword }) => {
  return (
    <Fragment>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label='E-mail'
        type='email'
        placeholder='Enter your email address'
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label='Password'
        type='password'
        placeholder='Enter your password'
      />
    </Fragment>
  );
};

export default LoginInputs;
