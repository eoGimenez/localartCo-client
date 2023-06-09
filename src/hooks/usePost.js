import { useContext } from 'react';
import PostService from '../services/post.service';
import { UserContext } from '../context/user.context';
import { useNavigate } from 'react-router-dom';

export function usePost({ title, batch, category, contract, description, price, image }) {
	const postService = new PostService();
	const { getUser, userCont, isLoading } = useContext(UserContext);
	const navigate = useNavigate();

	const handleNewPost = (e) => {
		e.preventDefault();
		postService
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
			.then((result) => {
				console.log(result);
				getUser();
				if (!isLoading) navigate('/posts');
			})
			.catch((err) => console.log(err.response.data.message));
	};

	return {
		handleNewPost,
	};
}
