import { FaSignInAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className='header'>
			<div className='logo'>
				<Link to='/'>GoalSetter</Link>
			</div>

			<ul>
				<li>
					<Link to='/login'>
						<FaSignInAlt />
						<span>Login</span>
					</Link>
				</li>
				<li>
					<Link to='/register'>
						<FaUser />
						<span>Register</span>
					</Link>
				</li>
			</ul>
		</header>
	)
}
