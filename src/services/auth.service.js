import axios from 'axios';

export default class AuthService {
	constructor() {
		this.API_URL = axios.create({
			baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
		});
		this.API_URL.interceptors.request.use(
			(config) => {
				const storedToken = localStorage.getItem('authToken');

				if (storedToken) {
					config.headers = { Authorization: `Bearer ${storedToken}` };
				}

				return config;
			},
			(error) => {
				Promise.reject(error);
			}
		);
	}

	login = (req) => {
		return this.API_URL.post('/login', req); 
	};

	signup = (req) => {
		return this.API_URL.post('/signup', req);
	};

	verify = () => {
		return this.API_URL.get('/verify');
	};
}
