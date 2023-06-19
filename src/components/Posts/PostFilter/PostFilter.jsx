import imgFabric from './Fabric2.jpg';
import imgHome from './Home2.jpg';
import imgMis from './Mis.jpg';
import imgNatural from './NC.jpg';
import './PostFilter.css';

export default function PostFilter({ handleCategory }) {
	return (
		<div className='filter--container'>
			<div className='category--container' onClick={() => handleCategory('Home Deco')}>
				<img
					src={imgHome}
					alt='Vasijas artesanales de distintos tamaños, categoría: Decoración Hogar'
				/>
				<p>Decoración Hogar</p>
			</div>
			<div
				className='category--container'
				onClick={() => handleCategory('Natural Cosmetics')}
			>
				<img
					src={imgNatural}
					alt='Varios instrumentos del cuidado de la piel, categoría: Cosmetica Natural'
				/>
				<p>Cosmetica Natural</p>
			</div>
			<div className='category--container' onClick={() => handleCategory('Fabric & Fashion')}>
				<img src={imgFabric} alt='Una sastre tomando medidas, categoría: Ropa y Moda' />
				<p>Ropa y Moda</p>
			</div>
			<div className='category--container' onClick={() => handleCategory('Misellaneous')}>
				<img
					src={imgMis}
					alt='Instrumentos de trabajador del cuero, categoría: Misceláneas'
				/>
				<p>Misceláneas</p>
			</div>
		</div>
	);
}
