import { useState } from 'react';
import PostService from '../services/post.service';

export function useFile({ type }) {
	const postService = new PostService();
	const [value, setValue] = useState('');

	const onChange = function handleImage(e) {
		const uploadData = new FormData();
		uploadData.append('image', e.target.files[0]);
		postService
			.uploadFile(uploadData)
			.then((response) => {
				const fileUrl = response.data.fileUrl;
				setValue(fileUrl);
			})
			.catch((err) =>
				console.log('Error while uploading the image: ', err.response.data.message)
			);
	};

	return { type, value, onChange };
}
