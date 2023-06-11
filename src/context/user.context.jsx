import { createContext, useContext, useEffect, useState } from 'react';
import UserService from '../services/user.service';
import { AuthContext } from './auth.context';

const UserContext = createContext();

function UserProviderWrapper({ children }) {
	const { user, isLoggedIn } = useContext(AuthContext);

	const [isLoading, setIsLoading] = useState(true);
	const [userCont, setUserCont] = useState(null);
	const userService = new UserService();

	const getUser = async () => {
		if (user) {
			userService.getOne(user._id).then((result) => {
				setUserCont(result.data);
				setIsLoading(false);
			});
		}
	};
	useEffect(() => {
		try {
			getUser();
			console.log('effecto del context', userCont);
		} catch {
			console.log('entro en el catch');
		}
	}, [isLoggedIn]);

	return (
		<UserContext.Provider value={{ getUser, userCont, isLoading }}>
			{children}
		</UserContext.Provider>
	);
}

export { UserProviderWrapper, UserContext };
