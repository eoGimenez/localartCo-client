import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';

import Navbar from './components/Navbar/Navbar';
import IsPrivate from './components/IsPrivate/IsPrivate';
import IsAnon from './components/IsAnon/IsAnon';
import PostPage from './pages/PostPage/PostPage';
import NewPostPage from './pages/NewPostPage/NewPostPage';
import PostDetailPage from './pages/PostDetailPage/PostDetailPage';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div id='App'>
			<Navbar />

			<Routes>
				<Route path='/' element={<HomePage />} />

				<Route
					path='/profile'
					element={
						<IsPrivate>
							<ProfilePage />
						</IsPrivate>
					}
				/>

				<Route
					path='/posts'
					element={
						<IsPrivate>
							<PostPage />
						</IsPrivate>
					}
				/>

				<Route
					path='/post/:postId'
					element={
						<IsPrivate>
							<PostDetailPage />
						</IsPrivate>
					}
				/>

				<Route
					path='/post/new'
					element={
						<IsPrivate>
							<NewPostPage />
						</IsPrivate>
					}
				/>

				<Route
					path='/signup'
					element={
						<IsAnon>
							<SignupPage />
						</IsAnon>
					}
				/>
				<Route
					path='/login'
					element={
						<IsAnon>
							<LoginPage />
						</IsAnon>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
