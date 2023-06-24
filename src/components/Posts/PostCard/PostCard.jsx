import { useNavigate } from 'react-router-dom';
import './PostCard.css';

export default function PostCard({ post }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${post._id}`);
  };
  return (
    <div className='post--card' onClick={handleClick}>
      <div className='image--container'>
        {!post.available && <div className='post--card--outstock'></div>}
        <img src={post.image} alt={'La imagen del articulo: ' + post.title} />
      </div>
      <div className='card--container'>
        <h2 className='post card--title'>{post.title}</h2>
        <h3 className='post card--contract'>{post.contract}</h3>
        <p className='post card--category'>{post.category}</p>
        <p className='post card--description'>{post.description}</p>
        <div>
          <p>Precio: {post.price}</p>
          <p>Cantidad unidades: {post.batch}</p>
        </div>
        {post.author.commerceName && (
          <h4>
            <span>Artesano:</span> <br /> {post.author.commerceName}
          </h4>
        )}
      </div>
    </div>
  );
}
