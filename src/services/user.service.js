import axios from 'axios';

export default class UserService {
	constructor() {
		this.API_URL = axios.create({
			baseURL: `${process.env.REACT_APP_SERVER_URL}/user`,
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

	getAll = async () => {
		return this.API_URL.get('/');
	};
	getOne = async (userId) => {
		return this.API_URL.get(`/${userId}`);
	};
	updateUser = async (userId) => {
		return this.API_URL.put(`/${userId}`);
	};
	updateCommerce = async (id, req) => {
		return this.API_URL.post(`/${id}/commerce`, req);
	};
	deleteUser = async (userId) => {
		return this.API_URL.delete(`/${userId}`);
	};
}
