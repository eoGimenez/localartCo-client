import { Link } from 'react-router-dom';

export default function PostDetail({ currentPost }) {
	return (
		<>
			{currentPost && (
				<div>
					<h1>Detalle del post</h1>
					<h2>{currentPost.title}</h2>
					<h3>{currentPost.contract}</h3>
					<p>{currentPost.category}</p>
					<p>{currentPost.description}</p>
					<p>price: {currentPost.price}</p>
					<Link to={`/posts`} className='active'>
						<p className='active'>
							<i className='fa-solid fa-signs-post'></i>Craft
							<br />
						</p>
					</Link>
					{/* <button onClick={handleDelete}>Borrar Post</button> */}
				</div>
			)}
		</>
	);
}
