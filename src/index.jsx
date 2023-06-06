import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProviderWrapper } from './context/auth.context';
import { UserProviderWrapper } from './context/user.context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Router>
		<AuthProviderWrapper>
			<UserProviderWrapper>
				<App />
			</UserProviderWrapper>
		</AuthProviderWrapper>
	</Router>
);
