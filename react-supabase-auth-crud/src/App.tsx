import {Route, Switch, useLocation} from 'wouter'
import {Home, Login, NotFound} from './pages'
import {useEffect} from 'react'
import {supabase} from './supabase/client'

export const App = () => {
	const [location, navigate] = useLocation()

	useEffect(() => {
		supabase.auth.onAuthStateChange((event, session) => {
			if (!session) {
				navigate('/login', {replace: true})
			} else {
				navigate('/', {replace: true})
			}
		})
	}, [])

	return (
		<div className='grid place-items-center h-screen'>
			<Switch>
				<Route path='/' component={Home} />
				<Route path='/login' component={Login} />
				<Route path='*' component={NotFound} />
			</Switch>
		</div>
	)
}
