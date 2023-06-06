import { useContext, useEffect, useState } from 'react';
import './ProfilePage.css';
import { AuthContext } from '../../context/auth.context';
import FormUser from '../../components/User/FormUser/FormUser';
import { UserContext } from '../../context/user.context';

function ProfilePage() {
	const [firstOn, setFirstOn] = useState(false);
	const { user } = useContext(AuthContext);
	const { getUser, userCont, isLoading } = useContext(UserContext);

	useEffect(() => {
		getUser(user._id);
		if (!isLoading) {
			console.log(userCont);
			if (userCont.aboutme === 'Actualizar' || userCont.location === 'Seleccione ubicación') {
				setFirstOn(true);
			} else {
				setFirstOn(false);
			}
		}
	}, []);

	return (
		<section className='section--profile'>
			{userCont && <h1>Profile {userCont.name}</h1>}
			{firstOn && <FormUser />}
		</section>
	);
}

export default ProfilePage;
