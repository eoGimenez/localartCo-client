import { useContext, useEffect, useState } from 'react';
import PostService from '../services/post.service';
import { UserContext } from '../context/user.context';
import { useNavigate } from 'react-router-dom';

export function usePosts() {
  const { userCont } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [messageError, setMessageError] = useState('');
  const postService = new PostService();
  const navigate = useNavigate();

  const getPosts = async () => {
    postService
      .getAll()
      .then((response) => setPosts(response.data.reverse()))
      .catch((err) => console.log(err));
  };

  const getPost = async (postId) => {
    if (!currentPost) {
      return postService.getOne(postId).then((response) => {
        setCurrentPost(response.data);
      });
    }
  };

  useEffect(() => {
    getPosts();
  }, [userCont]);

  const createPost = async ({
    title,
    batch,
    category,
    contract,
    description,
    price,
    image,
  }) => {
    return postService
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
      .then((result) => navigate('/posts'));
  };

  const deletPost = async (postId) => {
    return postService.deleteOne(postId).then((result) => {
      // console.log("esta entrando en el then", result)
      // getPosts();
      // console.log("devuelve esto",posts)
      navigate('/posts');
    });
  };

  const updatePost = async (
    { postId },
    { title, batch, category, contract, description, price, image }
  ) => {
    return postService
      .udpateOne(postId, {
        title,
        batch,
        category,
        contract,
        description,
        price,
        image,
      })
      .then((response) => {
        setCurrentPost(response.data);
        navigate('/posts');
      })
      .catch((err) => setMessageError(err));
  };

  return {
    posts,
    createPost,
    deletPost,
    getPost,
    updatePost,
    currentPost,
    messageError,
  };
}
