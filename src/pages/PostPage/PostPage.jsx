import PostCard from '../../components/Posts/PostCard/PostCard';
import usePosts from '../../hooks/usePosts';
import './PostPage.css';

export default function PostPage() {
	const { posts } = usePosts();

	console.log(posts);

	return (
		<section className='section--posts'>
			{posts && posts.map((post) => <PostCard post={post} key={post._id} />)}
		</section>
	);
}
