import { useContext, useEffect, useState } from 'react';
import PostService from '../services/post.service';
import { UserContext } from '../context/user.context';

export default function usePosts() {
	const { userCont } = useContext(UserContext);
	const [posts, setPosts] = useState([]);
	const postService = new PostService();

	const getPosts = () => {
		postService
			.getAll()
			.then((response) => setPosts(response.data))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getPosts();
	}, [userCont]);
	return { posts };
}
