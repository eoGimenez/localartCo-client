import { Link } from 'react-router-dom';
import './PostDetail.css';

export default function PostDetail({ currentPost }) {
  return (
    <>
      {currentPost && (
        <div className='post--detail--container'>
          <h1>Articulo</h1>
          <h2>{currentPost.title}</h2>
          <div className='detail--image--container'>
            {!currentPost.available && (
              <div className='post--card--outstock'></div>
            )}
            <img
              className='detail--image'
              src={currentPost.image}
              alt={`${currentPost.title}'s article of category ${currentPost.category} `}
            />
          </div>
          <h3>{currentPost.contract}</h3>
          <p className='detail--category'>{currentPost.category}</p>
          <p className='detail--description'>{currentPost.description}</p>
          <p className='detail--price'>Price: {currentPost.price}</p>
          <Link to={`/posts`} className='active post--detail--link'>
            <p className='active post--detail--par'>
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
