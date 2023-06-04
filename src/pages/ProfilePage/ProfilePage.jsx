import { useContext } from 'react';
import './ProfilePage.css';
import { AuthContext } from '../../context/auth.context';

function ProfilePage() {
	const { user } = useContext(AuthContext);
	return (
		<section className='section--profile'>
			<h1>Profile {user.name}</h1>
		</section>
	);
}

export default ProfilePage;
