import { useContext } from 'react';
import PostService from '../services/post.service';
import { UserContext } from '../context/user.context';

export function usePost({ title, batch, category, contract, description, price, image }) {
	const postService = new PostService();
	const { getUser, userCont } = useContext(UserContext);

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
			})
			.catch((err) => console.log(err.response.data.message));
	};

	return {
		handleNewPost,
	};
}
