import PostDetail from '../../components/Posts/PostDetail/PostDetail';
import { useContext, useEffect, useState } from 'react';
import { usePosts } from '../../hooks/usePosts';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import PostUpdate from '../../components/Posts/PostUpdate/PostUpdate';
import ChatBox from '../../components/ChatBox/ChatBox';
import './PostDetailPage.css';

export default function PostDetailPage() {
  const [update, setUpdate] = useState(false);
  const { postId } = useParams();
  const { deletPost, getPost, currentPost } = usePosts();
  const { userCont } = useContext(UserContext);

  const handleDelete = () => {
    deletPost(postId).catch(() => console.log('no se pudo borrar'));
  };

  const handleForm = (update) => {
    setUpdate(update);
  };

  useEffect(() => {
    getPost(postId).catch('surgio un problema!');
  }, [getPost, postId]);

  return (
    <section className='post--detail'>
      {!update && (
        <>
          <PostDetail currentPost={currentPost} />
          {currentPost && currentPost.author._id === userCont._id ? (
            <div className='post--detail--buttons--owner'>
              <button onClick={handleDelete}>Borrar Post</button>
              <button
                onClick={() => {
                  handleForm(true);
                }}
              >
                Editar Post
              </button>
            </div>
          ) : null}
          {currentPost && currentPost.author._id !== userCont._id ? (
            <div className='post--detail--buttons--noOwner'>
              <ChatBox author={currentPost.author} />
            </div>
          ) : null}
        </>
      )}
      {update && (
        <PostUpdate currentPost={currentPost} handleForm={handleForm} />
      )}
    </section>
  );
}
