import { useContext, useEffect, useState } from 'react';
import './ProfilePage.css';
import FormUser from '../../components/User/FormUser/FormUser';
import { UserContext } from '../../context/user.context';

function ProfilePage() {
	const [firstOn, setFirstOn] = useState(false);
	const { getUser, userCont, isLoading } = useContext(UserContext);

	useEffect(() => {
		getUser();
		if (!isLoading) {
			console.log(userCont);
			if (userCont.aboutme === 'Actualizar' || userCont.location === 'Seleccione ubicación') {
				setFirstOn(true);
			} else {
				setFirstOn(false);
			}
		}
	}, []);
	console.log(userCont);
	return (
		<section className='section--profile'>
			{userCont && !firstOn && (
				<h1>
					Profile {userCont.name} {userCont.surname}
				</h1>
			)}
			{userCont && !firstOn && <h3> {userCont.email}</h3>}
			{userCont && !firstOn && <h3> {userCont.commerceName}</h3>}
			{userCont && !firstOn && <h3> {userCont.cif}</h3>}
			{userCont && !firstOn && <h3> {userCont.aboutme}</h3>}
			{userCont && !firstOn && <h3> {userCont.location}</h3>}
			{firstOn && <FormUser />}
		</section>
	);
}

export default ProfilePage;
