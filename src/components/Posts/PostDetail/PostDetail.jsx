import { useEffect } from 'react';
import { usePosts } from '../../../hooks/usePosts';
import { Link, useParams } from 'react-router-dom';

export default function PostDetail() {
	const { postId } = useParams();
	const { deletPost } = usePosts();
	const { getPost, currentPost } = usePosts();

	const handleDelete = () => {
		deletPost(postId).catch(() => console.log('no se pudo borrar'));
	};

	useEffect(() => {
		getPost(postId).catch('surgio un problema!');
	}, []);

	return (
		<>
			{currentPost && (
				<div>
					<h1>Detalle del post</h1>
					<h2>{currentPost.title}</h2>
					<h3>{currentPost.contract}</h3>
					<p>{currentPost.category}</p>
					<p>{currentPost.description}</p>
					<Link to={`/posts`} className='active'>
						<p className='active'>
							<i className='fa-solid fa-signs-post'></i>Craft
							<br />
						</p>
					</Link>
					<button onClick={handleDelete}>Borrar Post</button>
				</div>
			)}
		</>
	);
}
