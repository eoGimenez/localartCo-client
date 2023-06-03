import axios from 'axios';

export default class PostService {
	constructor() {
		this.API_URL = axios.create({
			baseURL: `${process.env.REACT_APP_SERVER_URL}/post`,
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
		return this.API_URL.get(`/`);
	};
	getOne = async (postId) => {
		return this.API_URL.get(`/${postId}`);
	};
	createPost = async (req) => {
		return this.API_URL.post('/', req);
	};
	udpateOne = async (postId, req) => {
		return this.API_URL.put(`/${postId}`, req);
	};
	deleteOne = async (postId) => {
		return this.API_URL.delete(`${postId}`);
	};
	uploadFile = async (file) => {
		return this.API_URL.post('/upload', file);
	};
}
