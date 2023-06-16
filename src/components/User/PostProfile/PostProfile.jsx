import PostCard from '../../Posts/PostCard/PostCard';

export default function PostPorfile({ userCont }) {
	console.log(userCont);
	return (
		<div className='profile--post--container'>
			{userCont.posts.reverse().map((post) => (
				<PostCard post={post} key={post._id} />
			))}
		</div>
	);
}
