import { useState } from 'react';
import './Profile.css';
import FormUser from '../FormUser/FormUser';

export default function Profile({ userCont }) {
  const [update, setUpdate] = useState('');

  const handleUpdatePerfil = () => {
    setUpdate(!update);
  };
  return (
    <div className='profile--container'>
      {!update && (
        <>
          <h2>
            {userCont.name} {userCont.surname}
          </h2>
          <div className='profile--img--container'>
            <img
              src={userCont.avatar}
              alt={userCont.commerceName + `'s perfil image`}
            />
          </div>
          <div className='profile--info--container'>
            <h3>{userCont.email}</h3>
            <h3>{userCont.commerceName}</h3>
            <h4>{userCont.cif}</h4>
            <p>{userCont.aboutme}</p>
            <p>{userCont.location}</p>
          </div>
          <p className='btn btn--update--profile' onClick={handleUpdatePerfil}>
            Editar Perfil
          </p>
        </>
      )}
      {update && <FormUser />}
    </div>
  );
}
