import React, { useEffect, useState } from 'react';
import AuthBox from '../shared/component.sharedAuthBox';
import RegisterFooter from './component.registerfooter';
import RegisterHeader from './component.registerheader';
import RegisterInputs from './component.registerinputs';
import { validateRegisterForm } from '../../utils/validators';
import axios from 'axios';
const API_URL = 'https://62b57f65da3017eabb1bfec8.mockapi.io/users';
const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const postData = async (data) => {
    await axios
      .post(API_URL, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ email, password, username }));
  }, [email, password, username, setIsFormValid]);
  const handleRegister = () => {
    console.log('Registering...');
    console.log(username, email, password);
    postData({ username, email, password });
  };
  return (
    <AuthBox>
      <RegisterHeader />
      <RegisterInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
      <RegisterFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
};

export default RegisterPage;
