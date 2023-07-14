import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../context/user.context';
import Talk from 'talkjs';
import './ChatBox.css';

export default function ChatBox({
  author: { _id, commerceName, email, avatar },
}) {
  const inBoxDiv = useRef();
  const [talkLoaded, setTalkLoaded] = useState(false);
  const { userCont } = useContext(UserContext);
  Talk.ready.then((result) => setTalkLoaded(true));

  useEffect(() => {
    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: userCont._id,
        name: userCont.commerceName,
        email: userCont.email,
        photoUrl: userCont.avatar,
        welcomeMessage:
          'Esta conversación es privada. No obstante, evita enviar información sensible. LocalArt CO no se hace responsable de los datos tratados entre usuarios.',
        role: 'defaul',
      });
      const contactedUser = new Talk.User({
        id: _id,
        name: commerceName,
        email,
        photoUrl: avatar,
        welcomeMessage:
          'Esta conversación es privada. No obstante, evita enviar información sensible. LocalArt CO no se hace responsable de los datos tratados entre usuarios.',
        role: 'defaul',
      });

      const session = new Talk.Session({
        appId: process.env.REACT_APP_YOUR_APP_ID,
        me: currentUser,
      });

      const chatId = Talk.oneOnOneId(currentUser, contactedUser);
      const chat = session.getOrCreateConversation(chatId);
      chat.setParticipant(currentUser);
      chat.setParticipant(contactedUser);
      const inBox = session.createPopup();
      inBox.select(chat);

      inBox.mount(inBoxDiv.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return <div className='chat' ref={inBoxDiv} />;
}
