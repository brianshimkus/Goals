import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

export default function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	})

	const { name, email, password, password2 } = formData

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { isLoading, isSuccess, isError, message, user } = useSelector(
		(state) => state.auth
	)

	useEffect(() => {
		if (isError) {
			toast.error(message)
		}

		if (isSuccess || user) {
			navigate('/')
		}

		dispatch(reset())
	}, [user, isError, isSuccess, message, navigate, dispatch])

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()

		if (password !== password2) {
			toast.error('Passwords do not match')
		} else {
			const userData = {
				name,
				email,
				password,
			}

			dispatch(register(userData))
		}
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<>
			<section>
				<h1>
					<FaUser /> Register
				</h1>
				<p>Please create an account</p>
			</section>

			<section>
				<form onSubmit={onSubmit}>
					<div>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							name='name'
							value={name}
							placeholder='Enter your name'
							onChange={onChange}
						/>
					</div>

					<div>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							value={email}
							placeholder='Enter your email'
							onChange={onChange}
						/>
					</div>

					<div>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							name='password'
							value={password}
							placeholder='Enter your password'
							onChange={onChange}
						/>
					</div>

					<div>
						<label htmlFor='password2'>Confirm Password</label>
						<input
							type='password'
							id='password2'
							name='password2'
							value={password2}
							placeholder='Confirm your password'
							onChange={onChange}
						/>
					</div>

					<div>
						<button type='submit'>Register</button>
					</div>
				</form>
			</section>
		</>
	)
}
