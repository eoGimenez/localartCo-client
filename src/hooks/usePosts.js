import { useContext, useEffect, useState } from 'react';
import PostService from '../services/post.service';
import { UserContext } from '../context/user.context';
import { useNavigate } from 'react-router-dom';

export function usePosts() {
	const { userCont } = useContext(UserContext);
	const [posts, setPosts] = useState([]);
	const postService = new PostService();
	const navigate = useNavigate();

	const getPosts = async () => {
		postService
			.getAll()
			.then((response) => setPosts(response.data.reverse()))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getPosts();
	}, [userCont]);

	const createPost = async ({ title, batch, category, contract, description, price, image }) => {
		return postService
			.createPost({
				author: userCont._id,
				title,
				batch,
				category,
				contract,
				description,
				price,
				image,
			})
			.then((result) => navigate('/posts'));
	};

	const deletPost = async (postId) => {
		return postService.deleteOne(postId).then((result) => {
			// console.log("esta entrando en el then", result)
			// getPosts();
			// console.log("devuelve esto",posts)
			navigate('/posts');
		});
	};

	return { posts, createPost, deletPost };
}
