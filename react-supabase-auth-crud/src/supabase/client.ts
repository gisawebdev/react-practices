import {createClient} from '@supabase/supabase-js'

export const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY,
)

export const supabaseSignIn = async (email: string) => {
	try {
		await supabase.auth.signInWithOtp({email})
		console.log('entro')
	} catch (error) {
		console.log(error)
	}
}

export const signOut = async () => {
	try {
		await supabase.auth.signOut()
	} catch (error) {
		console.log(error)
	}
}
