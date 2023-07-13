import './NewPostForm.css';
import { useField } from '../../../hooks/useField';
import { useFile } from '../../../hooks/useFile';
import { usePosts } from '../../../hooks/usePosts';
import Loading from '../../ImageHanldre/Loading/Loading';
import Successfull from '../../ImageHanldre/Successfull/Successfull';
import Uploader from '../../ImageHanldre/Uploader/Uploadre';

export default function NewPostForm() {
  const title = useField({ type: 'text', field: '' });
  const batch = useField({ type: 'number', field: '' });
  const category = useField({ type: 'text', field: '' });
  const contract = useField({ type: 'text', field: '' });
  const description = useField({ type: 'text', field: '' });
  const price = useField({ type: 'number', field: '' });
  const { image, isLoadingImg, onChange, status, handleDrag, handleDrop } =
    useFile();
  const { createPost } = usePosts();

  const handleNewPost = async (e) => {
    e.preventDefault();
    createPost({
      title: title.value,
      batch: batch.value,
      category: category.value,
      contract: contract.value,
      description: description.value,
      price: price.value,
      image: image || null,
    }).catch(() => console.log('error al crear post'));
  };

  return (
    <div className='new--post--form--container'>
      <h2>Publica tu artesania!</h2>
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

        <fieldset>
          {!image && !isLoadingImg && (
            <Uploader
              onChange={onChange}
              status={status}
              handleDrag={handleDrag}
              handleDrop={handleDrop}
            />
          )}
          {!image && isLoadingImg && <Loading />}
          {image && <Successfull image={image} />}
        </fieldset>

        <button>Crear articulo</button>
      </form>
    </div>
  );
}
