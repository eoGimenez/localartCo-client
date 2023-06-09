import './Navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import logo from './navbarlogo.png';
import { UserContext } from '../../context/user.context';

function Navbar() {
	const { isLoggedIn, logOutUser } = useContext(AuthContext);
	const { getUser, userCont, isLoading } = useContext(UserContext);

	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container-fluid navbar'>
				<Link to='/'>
					<img src={logo} alt='Logo' id='nav--logo' />
				</Link>
				{!isLoading && isLoggedIn && (
					<>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div className='collapse navbar-collapse' id='navbarSupportedContent'>
							<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
								<li className='nav-item mx-3'>
									<Link to={`/profile/`} className='active'>
										<p className='active'>
											<i className='fa-solid fa-user '></i>Profile
											<br />
										</p>
									</Link>
								</li>
								{userCont.role === 'Artisan' && (
									<li className='nav-item mx-3'>
										<Link to='/post/new' className='active'>
											<p className='active'>
												<i className='fa-solid fa-plus'></i>New Craft
											</p>
										</Link>
									</li>
								)}
								<li className='nav-item mx-3'>
									<Link to='/posts' className=''>
										<p className='active'>
											<i className='fa-solid fa-signs-post'></i> Craft
										</p>
									</Link>
								</li>
							</ul>
							<ul>
								<li>
									<button onClick={logOutUser} className='active mx-5'>
										<p className='active'>
											<i className='fa-solid fa-right-from-bracket'></i> Log
											Out
										</p>
									</button>
								</li>
							</ul>
						</div>
					</>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
