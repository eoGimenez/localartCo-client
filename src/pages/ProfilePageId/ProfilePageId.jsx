import { useParams } from 'react-router-dom';
import ChatBox from '../../components/ChatBox/ChatBox';
import Profile from '../../components/User/Porfile/Profile';
import { useEffect, useState } from 'react';
import UserService from '../../services/user.service';

export default function ProfilePageId() {
  const { userId } = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const userService = new UserService();
  useEffect(() => {
    userService
      .getOne(userId)
      .then((result) => {
        setUserProfile(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className='section--profiel'>
      {userProfile && <Profile userProf={userProfile} />}
      {userProfile && <ChatBox author={userProfile} />}
    </section>
  );
}
