import { useState } from 'react';
import UserService from '../services/user.service';

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
	const [updatedUser, setupdatedUser] = useState(user);
	const userService = new UserService();

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
				setupdatedUser(response.data);
			})
			.catch((err) => console.log(err));
	};

	return { handleUpdate, updatedUser };
}
