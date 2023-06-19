import { useState } from 'react';
import { usePosts } from './usePosts';

export function useCategory() {
  const [category, setCategory] = useState('');
  const [postFiltered, setPostFiltered] = useState(null);
  const { posts } = usePosts();
  const pickCategory = (selectedCategory) => {
    setCategory((prevCategory) => {
      const newCategory =
        selectedCategory !== prevCategory ? selectedCategory : null;
      if (posts && newCategory) {
        const newArr = posts.filter((post) =>
          post.category.includes(newCategory)
        );
        setPostFiltered(newArr);
      } else if (!newCategory) {
        setPostFiltered(null);
      }
      return newCategory;
    });
  };
  return { pickCategory, postFiltered, category };
}
