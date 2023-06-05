import { useContext, useEffect, useState } from 'react';
import './ProfilePage.css';
import { AuthContext } from '../../context/auth.context';
import FormUser from '../../components/User/FormUser/FormUser';

function ProfilePage() {
	const [firstOn, setFirstOn] = useState(false);
	const { user } = useContext(AuthContext);
	
	useEffect(() => {
		user.aboutme === 'Actualizar' || user.location === 'Seleccione ubicación'
			? setFirstOn(true)
			: setFirstOn(false);
	}, []);
	return (
		<section className='section--profile'>
			<h1>Profile {user.name}</h1>
			{firstOn && <FormUser />}
		</section>
	);
}

export default ProfilePage;
