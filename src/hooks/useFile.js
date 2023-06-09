import { useState } from 'react';
import PostService from '../services/post.service';

export function useFile({ type }) {
	const postService = new PostService();
	const [value, setValue] = useState('');

	const onChange = (e) => {
		const uploadData = new FormData();
		uploadData.append('image', e.target.files[0]);
		postService
			.uploadFile(uploadData)
			.then((response) => {
				console.log(response.data.fileUrl);
				setValue(response.data.fileUrl);
				// return value;
			})
			.catch((err) =>
				console.log('Error while uploading the image: ', err.response.data.message)
			);
	};

	return { type, value, onChange };
}
