import { useContext } from 'react';
import { useField } from '../../../hooks/useField';
import { AuthContext } from '../../../context/auth.context';
import { useUpdateUser } from '../../../hooks/useUpdateUser';
import './FormUser.css';

export default function FormUser() {
	const { user } = useContext(AuthContext);

	const email = useField({ type: 'email', field: user.email });
	const name = useField({ type: 'text', field: user.name });
	const surname = useField({ type: 'text', field: user.surname });
	const commerceName = useField({ type: 'text', field: user.commerceName });
	const cif = useField({ type: 'text', field: user.cif });
	const aboutme = useField({ type: 'textarea', field: user.aboutme });
	const location = useField({ type: 'text', field: user.location });

	const { handleUpdate } = useUpdateUser({
		user,
		email: email.value,
		name: name.value,
		surname: surname.value,
		commerceName: commerceName.value,
		cif: cif.value,
		aboutme: aboutme.value,
		location: location.value,
	});
    
	console.log(user);
	return (
		<section className='section--form--user'>
			<h2>Complete datos</h2>
			<form className='form--complete--datos' onSubmit={handleUpdate}>
				<fieldset>
					<input {...email} placeholder={email.value} />
				</fieldset>

				<fieldset>
					<input {...name} placeholder={name.value} />
				</fieldset>

				<fieldset>
					<input {...surname} placeholder={surname.value} />
				</fieldset>

				<fieldset>
					<input {...commerceName} placeholder={commerceName.value} />
				</fieldset>

				<fieldset>
					<input {...cif} placeholder={cif.value} />
				</fieldset>

				<fieldset>
					<input {...aboutme} placeholder={aboutme.value} />
				</fieldset>

				<fieldset>
					<input {...location} placeholder={location.value} />
				</fieldset>

				<button>Actualizar</button>
			</form>
		</section>
	);
}
