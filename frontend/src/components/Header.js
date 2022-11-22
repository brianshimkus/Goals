import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

export default function Header() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.auth)

	const onLogout = () => {
		dispatch(logout())
		dispatch(reset())
		navigate('/login')
	}

	return (
		<header className='bg-gray-800 shadow-md text-gray-400 py-2'>
			<div className='container mx-auto flex'>
				<div className='flex items-center justify-between w-full px-4 py-1'>
					<Link
						to='/dashboard'
						className='font-semibold tracking-widest uppercase text-2xl text-green-400 hover:text-green-300 transition ease-in-out duration-300'>
						{user ? <>{user && user.name}'s Goals</> : 'Goals'}
					</Link>
					<ul>
						{user ? (
							<div className='flex'>
								<li className='bg-gray-700 px-4 py-1 rounded-md text-xl hover:text-gray-100 transition ease-in-out duration-300 hover:bg-gray-600 hover:cursor-pointer'>
									<button onClick={onLogout}>
										<div className='flex uppercase tracking-wide'>
											<FaSignOutAlt className='mr-2 h-4 mt-1.5' />{' '}
											<span className='text-sm font-bold mt-1'>Log Out</span>
										</div>
									</button>
								</li>
							</div>
						) : (
							<div className='flex'>
								<li className='bg-gray-700 px-4 py-1 rounded-md text-xl hover:text-gray-100 transition ease-in-out duration-300 hover:bg-gray-600 hover:cursor-pointer'>
									<div className='flex uppercase tracking-wider'>
										<Link to='/login' className='flex'>
											<FaSignInAlt className='mr-2 h-4 mt-1.5' />{' '}
											<span className='text-sm font-bold mt-1'>Log In</span>
										</Link>
									</div>
								</li>
								<li className='bg-green-400 px-4 py-2 rounded-md text-xl text-green-900 hover:text-green-800 transition ease-in-out duration-300 hover:bg-green-300 hover:cursor-pointer ml-4'>
									<div className='flex uppercase tracking-wider'>
										<Link to='/register' className='flex'>
											<FaUser className='mr-1 h-3 mt-1' />{' '}
											<span className='text-sm font-bold'>Register</span>
										</Link>
									</div>
								</li>
							</div>
						)}
					</ul>
				</div>
			</div>
		</header>
	)
}
