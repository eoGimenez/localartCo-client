export default function PostUpdate({ currentPost, update, handleForm }) {
	return (
		<section className='section--post--update'>
			<h2>Editando</h2>
			<h3>{currentPost.title}</h3>
			<p
				onClick={() => {
					handleForm(false);
				}}
			>
				VOLVER
			</p>
		</section>
	);
}
