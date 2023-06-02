import axios from 'axios';

export default class UserService {
	constructor() {
		this.api = axios.create({
			baseURL: process.env.REACT_APP_SERVER_URL,
		});
		this.api.interceptors.request.use(
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

	createOne = async (requestBody) => {
		return this.api.post('/api/examples', requestBody);
	};
	getAll = async () => {
		return this.api.get('/api/examples');
	};
	getOne = async (id) => {
		return this.api.get(`/api/examples/${id}`);
	};
	updateOne = async (id, requestBody) => {
		return this.api.put(`/api/examples/${id}`, requestBody);
	};
	deleteProject = async (id) => {
		return this.api.delete(`/api/examples/${id}`);
	};
}
