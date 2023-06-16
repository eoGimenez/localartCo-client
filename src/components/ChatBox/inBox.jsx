import { useContext, useEffect, useRef, useState } from 'react';
import Talk from 'talkjs';
import { UserContext } from '../../context/user.context';
import './ChatBox.css';

export default function InBox() {
	const inBoxDiv = useRef();

	const [talkLoaded, setTalkLoaded] = useState(false);
	const { userCont } = useContext(UserContext);

	Talk.ready.then((result) => {
		setTalkLoaded(true);
	});

	useEffect(() => {
		if (talkLoaded) {
			const currentUser = new Talk.User({
				id: userCont._id,
				name: userCont.commerceName,
				email: userCont.email,
				photoUrl: userCont.image,
				welcomeMessage: 'Hello!',
				role: 'defaul',
			});

			const session = new Talk.Session({
				appId: process.env.REACT_APP_YOUR_APP_ID,
				me: currentUser,
			});
			// const chatId = userCont.chatsId[0];
			const chat = session.getInboxes();
			const inBox = session.createInbox();
			// inBox.select(chatId);

			inBox.mount(inBoxDiv.current);

			return () => session.destroy();
		}
	}, [talkLoaded]);

	return <div className='chat--inbox' ref={inBoxDiv} />;
}
