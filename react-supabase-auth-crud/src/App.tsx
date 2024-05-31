import { Route, Switch } from 'wouter'
import { Login } from './pages/Login'
import { client } from './supabase/client'
import { Home } from './pages/Home'

export const App = () => {
	console.log(client)

	return (
		<div className='grid place-items-center h-screen'>
			<Switch>
				<Route path='/' component={Home} />
			</Switch>
			<Login />
		</div>
	)
}
