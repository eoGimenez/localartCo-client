import { useEffect, useState } from 'react';
import PostService from '../services/post.service';

export default function usePosts() {
	const [posts, setPosts] = useState([]);
	const postService = new PostService();

	const getPosts = () => {
		postService
			.getAll()
			.then((response) => setPosts(response))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getPosts();
	}, [posts]);
	return { posts };
}
