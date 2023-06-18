import PostCard from '../../components/Posts/PostCard/PostCard';
import PostFilter from '../../components/Posts/PostFilter/PostFilter';
import { useCategory } from '../../hooks/useCategory';
import { usePosts } from '../../hooks/usePosts';
import './PostPage.css';

export default function PostPage() {
	const { posts } = usePosts();
	const { pickCategory, postFiltered } = useCategory();

	const handleCategory = (selectedCategory) => {
		pickCategory(selectedCategory);
	};

	return (
		<section className='section--posts'>
			<PostFilter handleCategory={handleCategory} />
			<div className='post--card--container'>
				{posts &&
					!postFiltered &&
					posts.map((post) => <PostCard post={post} key={post._id} />)}
			</div>
			{postFiltered && postFiltered.map((post) => <PostCard post={post} key={post._id} />)}
		</section>
	);
}
