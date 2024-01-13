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

const LoginPage = () => {
  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/todo');
    }
    console.log('loginPage useEffect', isAuthenticated);
  }, [navigate, isAuthenticated]);

  const handleClick = async () => {
    try {
      if (username.length === 0 || password.length === 0) return;
      const success = await login({ username, password });
      if (success) {
        Swal.fire({
          title: '登入成功',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
          position: 'top',
        });
        return;
      }
      Swal.fire({
        title: '登入失敗',
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
      <h1>登入 Todo</h1>

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
          label="密碼"
          placeholder="請輸入密碼"
          value={password}
          onChange={(password) => SetPassword(password)}
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>登入</AuthButton>
      <Link to="/signup">
        <AuthLinkText>註冊</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default LoginPage;
