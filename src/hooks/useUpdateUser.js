import { useContext } from 'react';
import UserService from '../services/user.service';
import { AuthContext } from '../context/auth.context';

export function useUpdateUser({
	user,
	email,
	name,
	surname,
	commerceName,
	cif,
	aboutme,
	location,
}) {
	const userService = new UserService();
	const { getUser } = useContext(AuthContext);

	const handleUpdate = (e) => {
		e.preventDefault();
		userService
			.updateUser(user._id, {
				email,
				name,
				surname,
				commerceName,
				cif,
				aboutme,
				location,
			})
			.then((response) => {
				console.log('correcto', response);
				getUser();
			})
			.catch((err) => console.log(err));
	};

	return { handleUpdate };
}
