import { useContext, useEffect, useState } from 'react';
import './ProfilePage.css';
import FormUser from '../../components/User/FormUser/FormUser';
import { UserContext } from '../../context/user.context';
import InBox from '../../components/ChatBox/inBox';
import Profile from '../../components/User/Porfile/Profile';
import PostCard from '../../components/Posts/PostCard/PostCard';

function ProfilePage() {
  const [firstOn, setFirstOn] = useState(false);
  const { getUser, userCont, isLoading } = useContext(UserContext);

  useEffect(() => {
    getUser();
    if (!isLoading) {
      if (
        userCont.aboutme === 'About me' ||
        userCont.location === 'Seleccione ubicación'
      ) {
        setFirstOn(true);
      } else {
        setFirstOn(false);
      }
    }
  }, []);

  return (
    <section className='section--profile'>
      {userCont && !firstOn && <Profile userProf={userCont} />}
      {userCont &&
        !firstOn &&
        userCont.posts
          .reverse()
          .map((post) => <PostCard post={post} key={post._id} />)}
      {userCont && !firstOn && <InBox />}
      {firstOn && <FormUser />}
    </section>
  );
}

export default ProfilePage;
