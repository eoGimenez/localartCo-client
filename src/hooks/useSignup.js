import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import AuthService from '../services/auth.service';

export function useSignup({
	email,
	password,
	passwordRe,
	name,
	surname,
	commerceName,
	role,
	cif,
}) {
	const { authenticateUser, storeToken } = useContext(AuthContext);
	const authService = new AuthService();
	const handleSignup = () => {
		authService
			.signup({
				email,
				password,
				passwordRe,
				name,
				surname,
				commerceName,
				role,
				cif,
				aboutme: '',
				location: '',
			})
			.then((response) => {})
			.catch((err) => {
				console.log(err.response.data.message);
			});
		authService
			.login({ email, password })
			.then((response) => {
				storeToken(response.data.authToken);
				authenticateUser();
			})
			.catch((err) => console.log(err.response.data.message));
	};

	return { handleSignup };
}
