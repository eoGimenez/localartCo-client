import { useEffect, useState } from 'react';
import UserService from '../services/user.service';

export const useUser = () => {
	const { userCont, setUserCont } = useState(null);
	const userService = new UserService();

	useEffect(() => {
		const userJSON = window.localStorage.getItem('authToken');
		if (userJSON) {
			const user = JSON.parse(userJSON);
			userService
				.getOne(user._id)
				.then((response) => setUserCont(response))
				.catch((err) => console.log(err));
		}
	}, []);

	return { userCont };
};
