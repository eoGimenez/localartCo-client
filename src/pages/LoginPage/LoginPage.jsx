import './LoginPage.css';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import AuthService from '../../services/auth.service';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const authService = new AuthService();
  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    authService
      .login({ email, password })
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate('/profile');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <section className='section--login'>
      <h1>Login</h1>

      <form className='form--login' onSubmit={handleLoginSubmit}>
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleEmail}
          placeholder='email@ejemplo.com'
          required
        />

        <input
          type='password'
          name='password'
          value={password}
          onChange={handlePassword}
          placeholder='Contraseña'
          required
        />

        <button type='submit'>Login</button>
      </form>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}

      <p>Aun no tienes cuenta ?</p>
      <Link className='signup--link--login' to={'/signup'}>
        {' '}
        Crear cuenta
      </Link>
    </section>
  );
}

export default LoginPage;
