import { useEffect } from 'react'
import { signOut, supabase } from '../supabase/client'

export const Home = () => {

  useEffect(() => {

    if(!supabase.auth.getUser()){
      console.log(supabase.auth.getUser())
    }
    
  }, [])
  

	return (
		<div className='flex flex-col items-center justify-center'>
			Home
			<button
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300'
				onClick={signOut}
			>
				Logout
			</button>
		</div>
	)
}
