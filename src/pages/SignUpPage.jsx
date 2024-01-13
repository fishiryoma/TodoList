import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from 'contexts/AuthContext';

const SignUpPage = () => {
  const [username, SetUsername] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, register } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/todo');
    }
    console.log('sigunupPage useEffect');
  }, [navigate, isAuthenticated]);

  const handleClick = async () => {
    try {
      if (username.length === 0 || email.length === 0 || password.length === 0)
        return;
      const success = await register({
        username,
        email,
        password,
      });
      if (success) {
        Swal.fire({
          title: '註冊成功',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
          position: 'top',
        });
        return;
      }
      Swal.fire({
        title: '註冊失敗',
        icon: 'error',
        timer: 1000,
        showConfirmButton: false,
        position: 'top',
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>建立您的帳號</h1>

      <AuthInputContainer>
        <AuthInput
          label="帳號"
          placeholder="請輸入帳號"
          value={username}
          onChange={(username) => SetUsername(username)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label="Email"
          placeholder="請輸入註冊Email"
          value={email}
          onChange={(email) => SetEmail(email)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label="密碼"
          placeholder="請輸入密碼"
          value={password}
          onChange={(password) => SetPassword(password)}
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>註冊</AuthButton>
      <Link to="/login">
        <AuthLinkText>取消</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default SignUpPage;
