import './Navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

function Navbar() {
	// Subscribe to the AuthContext to gain access to
	// the values from AuthContext.Provider's `value` prop
	const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

	return (
		<nav>
			<Link to='/'>
				<button className='btn btn--link'>Home</button>
			</Link>

			{isLoggedIn && (
				<>
					<button onClick={logOutUser} className='btn btn--link'>
						Logout
					</button>

					<Link className='btn--profile' to='/profile'>
						<button className='btn btn--link'>
							{user && user.name}
						</button>
					</Link>
				</>
			)}

			{!isLoggedIn && (
				<div>
					<Link to='/signup'>
						{' '}
						<button className='btn btn--link'>Sign Up</button>{' '}
					</Link>
					<Link to='/login'>
						{' '}
						<button className='btn btn--link'>Login</button>{' '}
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
