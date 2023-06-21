import './SignupPage.css';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useField } from '../../hooks/useField';
import { AuthContext } from '../../context/auth.context';
import AuthService from '../../services/auth.service';

function SignupPage() {
  const email = useField({ type: 'email', field: '' });
  const password = useField({ type: 'password', field: '' });
  const passwordRe = useField({ type: 'password', field: '' });
  const name = useField({ type: 'text', field: '' });
  const surname = useField({ type: 'text', field: '' });
  const commerceName = useField({ type: 'text', field: '' });
  const role = useField({ type: 'text', field: '' });
  const cif = useField({ type: 'text', field: '' });
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { authenticateUser, storeToken } = useContext(AuthContext);
  const authService = new AuthService();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    authService
      .signup({
        email: email.value,
        password: password.value,
        passwordRe: passwordRe.value,
        name: name.value,
        surname: surname.value,
        commerceName: commerceName.value,
        role: role.value,
        cif: cif.value,
      })
      .then((response) => {
        authService
          .login({ email: email.value, password: password.value })
          .then((response) => {
            storeToken(response.data.authToken);
            authenticateUser();
            navigate('/profile');
          })
          .catch((err) => setErrorMessage(err.response.data.message));
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <section className='section--signUp'>
      <h2>Formulario de registro</h2>

      <form className='form--signUp' onSubmit={handleSignup}>
        <fieldset>
          <input {...email} placeholder='exemplo@email.com' />
        </fieldset>

        <fieldset>
          <input {...password} placeholder='Contraseña' />
        </fieldset>

        <fieldset>
          <input {...passwordRe} placeholder='Repita contraseña' />
        </fieldset>

        <fieldset>
          <input {...name} placeholder='Fernando' />
        </fieldset>

        <fieldset>
          <input {...surname} placeholder='Rios Iglesias' />
        </fieldset>

        <fieldset>
          <input {...commerceName} placeholder='Artesanias Fernando' />
        </fieldset>

        <fieldset>
          <input {...cif} placeholder='C.I.F' />
        </fieldset>

        <fieldset>
          <select {...role}>
            <option>Elija su Rol</option>
            <option value='Artisan'>Artesano</option>
            <option value='Commerce'>Comercio</option>
          </select>
        </fieldset>

        <button type='submit'>Sign Up</button>
      </form>

      {errorMessage && <p className='error-message'>{errorMessage}</p>}

      <p>Ya tienes cuenta?</p>
      <Link className='signup--link--login' to={'/login'}> Acceder </Link>
    </section>
  );
}

export default SignupPage;
