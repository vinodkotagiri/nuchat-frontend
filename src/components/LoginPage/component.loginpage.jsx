import React, { useEffect, useState } from 'react';
import AuthBox from '../shared/component.sharedAuthBox';
import LoginFooter from './component.loginfooter';
import LoginHeader from './component.loginheader';
import LoginInputs from './component.logininputs';
import { validateLoginForm } from '../../utils/validators';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }));
  }, [email, password, setIsFormValid]);
  const handleLogin = () => {
    console.log('Loging in...');
  };
  return (
    <AuthBox>
      <LoginHeader />
      <LoginInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default LoginPage;
