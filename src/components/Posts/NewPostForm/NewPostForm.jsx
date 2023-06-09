import './NewPostForm.css';
import { useField } from '../../../hooks/useField';
import { useFile } from '../../../hooks/useFile';
import { usePost } from '../../../hooks/usePost';

export default function NewPostForm() {
	const title = useField({ type: 'text', field: '' });
	const batch = useField({ type: 'numbre', field: '' });
	const category = useField({ type: 'text', field: '' });
	const contract = useField({ type: 'text', field: '' });
	const description = useField({ type: 'text', field: '' });
	const price = useField({ type: 'number', field: '' });
	const { value, onChange } = useFile({ type: 'file' });

	const { handleNewPost } = usePost({
		title: title.value,
		batch: batch.value,
		category: category.value,
		contract: contract.value,
		description: description.value,
		price: price.value,
		image: value,
	});

	return (
		<div className='new--post--form--container'>
			<h2>Crea tu nuevo producto a ofertar!</h2>
			<form className='new--post--form' onSubmit={handleNewPost}>
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
					<input {...price} placeholder='Precio por unidad' required />
				</fieldset>
				<fieldset>
					{!value && <input type='file' onChange={onChange} required />}
					{value && <h3>Imagen correcta</h3>}
				</fieldset>
				<fieldset>
					<select {...contract} required>
						<option defaultValue>Tipo de contrato</option>
						<option>Total batch in concession</option>
						<option>Percentages to arrenge</option>
						<option>Would like to sale by unit</option>
					</select>
				</fieldset>
				<fieldset>
					<select {...category} required>
						<option defaultValue>Categoria</option>
						<option>Natural Cosmetics</option>
						<option>Home Deco</option>
						<option>Misellaneous</option>
						<option>Fabric & Fashion</option>
					</select>
				</fieldset>
				<button>Crear articulo</button>
			</form>
		</div>
	);
}
