import { createContext, useContext, useEffect, useState } from 'react';
import UserService from '../services/user.service';
import { AuthContext } from './auth.context';

const UserContext = createContext();

function UserProviderWrapper({ children }) {
	const { user } = useContext(AuthContext);

	const [isLoading, setIsLoading] = useState(true);
	const [userCont, setUserCont] = useState(null);
	const userService = new UserService();

	const getUser = () => {
		if (isLoading && user) {
			userService.getOne(user._id).then((result) => {
				setUserCont(result.data);
				setIsLoading(false);
			});
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return <UserContext.Provider value={{ getUser, userCont, isLoading }}>{children}</UserContext.Provider>;
}

export { UserProviderWrapper, UserContext };
