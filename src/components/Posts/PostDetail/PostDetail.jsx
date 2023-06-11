import { usePosts } from '../../../hooks/usePosts';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
	const { postId } = useParams();
	const { deletPost } = usePosts();

	const handleDelete = () => {
		deletPost(postId).catch(() => console.log('no se pudo borrar'));
	};
	console.log(postId);
	return (
		<div>
			<h1>Detalle del post</h1>
			{/* <h2>{post.title}</h2>
			<h3>{post.contract}</h3>
			<p>{post.category}</p>
			<p>{post.description}</p> */}

			<p>VOLVER</p>
			<button onClick={handleDelete}>Borrar Post</button>
		</div>
	);
}
