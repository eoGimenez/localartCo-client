import './SignupPage.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useField } from '../../hooks/useField';
import { useSignup } from '../../hooks/useSignup';

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

	const navigate = useNavigate();

	const { handleSignup } = useSignup({
		email: email.value,
		password: password.value,
		passwordRe: passwordRe.value,
		name: name.value,
		surname: surname.value,
		commerceName: commerceName.value,
		role: role.value,
		cif: cif.value,
	});

	return (
		<section className='section--signUp'>
			<h2>Formulario de registro</h2>

			<form className='form--signUp' onSubmit={handleSignup}>
				<fieldset>
					<input {...email} placeholder='exemplo@email.com' />
				</fieldset>

				<fieldset>
					{/* <label>Contraseña:</label> */}
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

			<p>Already have account?</p>
			<Link to={'/login'}> Login</Link>
		</section>
	);
}

export default SignupPage;
