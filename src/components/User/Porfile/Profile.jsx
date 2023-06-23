import { useContext, useState } from 'react';
import './Profile.css';
import FormUser from '../FormUser/FormUser';
import { UserContext } from '../../../context/user.context';

export default function Profile({ userProf }) {
  const [update, setUpdate] = useState('');
  const { userCont } = useContext(UserContext);

  const handleUpdatePerfil = () => {
    setUpdate(!update);
  };
  return (
    <div className='profile--container'>
      {!update && (
        <>
          <h2>
            {userProf.name} {userProf.surname}
          </h2>
          <div className='profile--img--container'>
            <img
              src={userProf.avatar}
              alt={userProf.commerceName + `'s perfil image`}
            />
          </div>
          <div className='profile--info--container'>
            <h3>{userProf.email}</h3>
            <h3>{userProf.commerceName}</h3>
            <h4>{userProf.cif}</h4>
            <p>{userProf.aboutme}</p>
            <p>{userProf.location}</p>
          </div>
          {userCont && userProf && userCont._id === userProf._id ? (
            <p
              className='btn btn--update--profile'
              onClick={handleUpdatePerfil}
            >
              Editar Perfil
            </p>
          ) : null}
        </>
      )}
      {update && <FormUser />}
    </div>
  );
}
