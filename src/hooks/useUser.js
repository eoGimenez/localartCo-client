import { useEffect, useState } from 'react';
import UserService from '../services/user.service';

export function useUser() {
	const { user, setUser } = useState(null);
	const userService = new UserService();

	useEffect(() => {
		const userJSON = window.localStorage.getItem('authToken');
		if (userJSON) {
			const user = JSON.parse(userJSON);
			userService
				.getOne(user._id)
				.then((response) => setUser(response))
				.catch((err) => console.log(err));
		}
	}, []);

	return { user };
}
