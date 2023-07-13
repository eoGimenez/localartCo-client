import { useContext } from 'react';
import { useField } from '../../../hooks/useField';
import './FormUser.css';
import UserService from '../../../services/user.service';
import { UserContext } from '../../../context/user.context';
import { useFile } from '../../../hooks/useFile';
import Loading from '../../ImageHanldre/Loading/Loading';
import Successfull from '../../ImageHanldre/Successfull/Successfull';
import Uploader from '../../ImageHanldre/Uploader/Uploadre';

export default function FormUser() {
  const { getUser, userCont, isLoading } = useContext(UserContext);
  const email = useField({ type: 'email', field: userCont.email });
  const name = useField({ type: 'text', field: userCont.name });
  const surname = useField({ type: 'text', field: userCont.surname });
  const commerceName = useField({ type: 'text', field: userCont.commerceName });
  const cif = useField({ type: 'text', field: userCont.cif });
  const aboutme = useField({ type: 'textarea', field: userCont.aboutme });
  const location = useField({ type: 'text', field: userCont.location });
  const { image, isLoadingImg, onChange, status, handleDrag, handleDrop } =
    useFile();
  // const { image, isLoadingImg } = useFile();
  const userService = new UserService();

  const handleUpdate = () => {
    userService
      .updateUser(userCont._id, {
        email: email.value,
        name: name.value,
        surname: surname.value,
        commerceName: commerceName.value,
        cif: cif.value,
        aboutme: aboutme.value,
        location: location.value,
        avatar: image,
      })
      .then((result) => getUser())
      .catch((err) => console.log(err));
  };
  return (
    <section className='section--form--user'>
      <h2>Complete datos</h2>
      {!isLoading && (
        <form className='form--complete--datos' onSubmit={handleUpdate}>
          <fieldset>
            <input {...email} placeholder={email.value} />
          </fieldset>

          <fieldset>
            <input {...name} placeholder={name.value} />
          </fieldset>

          <fieldset>
            <input {...surname} placeholder={surname.value} />
          </fieldset>

          <fieldset>
            <input {...commerceName} placeholder={commerceName.value} />
          </fieldset>

          <fieldset>
            <input {...cif} placeholder={cif.value} />
          </fieldset>

          <fieldset>
            {!image && !isLoadingImg && (
              <Uploader
                onChange={onChange}
                status={status}
                handleDrag={handleDrag}
                handleDrop={handleDrop}
              />
            )}
            {!image && isLoadingImg && <Loading />}
            {image && <Successfull image={image} />}
          </fieldset>

          <fieldset>
            <textarea {...aboutme} placeholder={aboutme.value} />
          </fieldset>

          <fieldset>
            <input {...location} placeholder={location.value} />
          </fieldset>

          <button>Actualizar</button>
        </form>
      )}
    </section>
  );
}
