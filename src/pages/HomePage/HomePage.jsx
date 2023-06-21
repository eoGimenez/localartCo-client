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
      <h2 className='home--secondheader'>
        {' '}
        En Local Art Co. conectamos artesanos con tiendas físicas.
        <br />
        Los artesanos dejan sus productos en consignación, establecen el precio
        y las tiendas se encargan de vender los productos y ganar un porcentaje.
        <br />
        Garantizamos un trato justo para todas las partes involucradas.
      </h2>
      <HomeVideo />
      <div className='auth--container'>
        <Link to='/signup'>
          {' '}
          <button className='btn btn--link'>Registrarse</button>{' '}
        </Link>
        <Link to='/login'>
          {' '}
          <button className='btn btn--link'>Acceder</button>{' '}
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
