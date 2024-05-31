import {Link} from 'wouter'

export const NotFound = () => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<h1 className='text-2xl font-bold'>NotFound</h1>
			<Link to='/'>
				<button className='mt-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition duration-300'>
					Go Home
				</button>
			</Link>
		</div>
	)
}
