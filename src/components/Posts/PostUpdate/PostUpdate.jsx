import { useField } from '../../../hooks/useField';
import { useFile } from '../../../hooks/useFile';
import { usePosts } from '../../../hooks/usePosts';
import './PostUpdate.css';

export default function PostUpdate({ currentPost, handleForm }) {
	const { updatePost } = usePosts();
	const title = useField({ type: 'text', field: currentPost.title });
	const batch = useField({ type: 'numbre', field: currentPost.batch });
	const category = useField({ type: 'text', field: currentPost.category });
	const contract = useField({ type: 'text', field: currentPost.contract });
	const description = useField({ type: 'text', field: currentPost.description });
	const price = useField({ type: 'number', field: currentPost.field });
	const { value, onChange } = useFile({ type: 'file' });

	const handleUpdatePost = (e) => {
		e.preventDefault();
		updatePost({
			title: title.value,
			batch: batch.value,
			category: category.value,
			contract: contract.value,
			description: description.value,
			price: price.value,
			image: currentPost.image,
		});
	};

	return (
		<section className='section--post--update'>
			<h2>Editando el articulo " {title.value} "</h2>
			<form className='update--post--form' onSubmit={handleUpdatePost}>
				<fieldset>
					<input {...title} placeholder='Nombre del producto' required />
				</fieldset>
				<fieldset>
					<textarea {...description} placeholder='Descripción' required />
				</fieldset>
				<fieldset>
					<input {...batch} placeholder='Stock' required />
				</fieldset>
				<fieldset>
					<input {...price} placeholder={price.value} required />
				</fieldset>
				<fieldset>
					{!currentPost.image && <input type='file' onChange={onChange} required />}
					{currentPost.image && (
						<img src={currentPost.image} alt='Imagen cargada para el articulo' />
					)}
				</fieldset>
				<fieldset>
					<select {...contract} required>
						<option>Tipo de contrato</option>
						<option>Total batch in concession</option>
						<option>Percentages to arrenge</option>
						<option>Would like to sale by unit</option>
					</select>
				</fieldset>
				<fieldset>
					<select {...category} required>
						<option>Categoria</option>
						<option>Natural Cosmetics</option>
						<option>Home Deco</option>
						<option>Misellaneous</option>
						<option>Fabric & Fashion</option>
					</select>
				</fieldset>
				<button>Crear articulo</button>
			</form>
			<p
				onClick={() => {
					handleForm(false);
				}}
			>
				VOLVER
			</p>
		</section>
	);
}
