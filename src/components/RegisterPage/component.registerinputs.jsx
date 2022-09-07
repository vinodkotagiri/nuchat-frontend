import React, { Fragment } from 'react';
import InputWithLabel from '../shared/component.inputslabel';
const RegisterInputs = ({
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername
}) => {
  return (
    <Fragment>
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label='User name'
        type='text'
        placeholder='Enter your username'
      />
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

export default RegisterInputs;
