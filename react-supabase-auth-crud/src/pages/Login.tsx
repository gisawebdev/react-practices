import {useState} from 'react'
import { supabaseSignIn } from '../supabase/client'

export const Login = () => {
	const [email, setEmail] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		supabaseSignIn(email)
	}

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col items-center justify-center'
			>
				<label
					htmlFor='UserEmail'
					className='relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'
				>
					<input
						type='email'
						id='UserEmail'
						placeholder='youremail@example.com'
						name={email}
						onChange={(e) => setEmail(e.target.value)}
						className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
					/>

					<span className='absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs'>
						Email
					</span>
				</label>
				<button className='mt-5 inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500'>
					Send
				</button>
			</form>
		</div>
	)
}
