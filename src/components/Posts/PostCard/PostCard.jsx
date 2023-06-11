import './PostCard.css'

export default function PostCard({ post }) {
	return (
		<div className='post--card'>
			<h2>{post.title}</h2>
            <h3>{post.contract}</h3>
            <p>{post.category}</p>
			<p>{post.description}</p>
			<table>
				<thead>
					<tr>
						<th>Cantidad</th>
						<th>Precio ud</th>
						<th>En stock</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{post.batch}</td>
						<td>{post.price}</td>
						<td>{post.available ? <p>En Stock!</p> : <p>Sin Stock!</p>}</td>
					</tr>
				</tbody>
			</table>
            <h4>{post.author.commercename}</h4>
		</div>
	);
}