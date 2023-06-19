import { useContext, useEffect } from 'react';
import HomeVideo from '../../components/HomeVideo/HomeVideo';
import './HomePage.css';
import { AuthContext } from '../../context/auth.context';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const { isLoggedIn, user, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    authenticateUser();
    if (isLoggedIn) navigate('/profile');
  }, [user]);
  return (
    <section className='section--hero'>
      <h1>Bienvenido a localArt CO</h1>
      <HomeVideo />
      <h2 className='home--secondheader'>
        {' '}
        Local Art Co. connects artisans with physical stores. <br />
        Artisans leave their products in consignment, set the price, and stores
        sell the products and earn a percentage.
        <br />
        We guarantee a fair deal for all parties involved.
      </h2>
      <div className='auth--container'>
        <Link to='/signup'>
          {' '}
          <button className='btn btn--link'>Sign Up</button>{' '}
        </Link>
        <Link to='/login'>
          {' '}
          <button className='btn btn--link'>Login</button>{' '}
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
