import { createClient } from '@supabase/supabase-js'

export const client = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
)

export const supabaseSignIn = async (email: string) => {
	try {
		await client.auth.signInWithOtp({ email })
	} catch (error) {
		console.log(error)
	}
}
