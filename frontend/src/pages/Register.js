import { useState } from 'react'
import { FaUser } from 'react-icons/fa'

export default function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	})

	const { name, email, password, password2 } = formData

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<section className='heading'>
				<h1>
					<FaUser /> Register
				</h1>
				<p>Please create an account</p>
			</section>

			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							className='form-control'
							id='name'
							name='name'
							value={name}
							placeholder='Enter your name'
							onChange={onChange}
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							className='form-control'
							id='email'
							name='email'
							value={email}
							placeholder='Enter your email'
							onChange={onChange}
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							className='form-control'
							id='password'
							name='password'
							value={password}
							placeholder='Enter your password'
							onChange={onChange}
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='password2'>Confirm Password</label>
						<input
							type='password'
							className='form-control'
							id='password2'
							name='password2'
							value={password2}
							placeholder='Confirm your password'
							onChange={onChange}
						/>
					</div>

					<div className='form-group'>
						<button type='submit' className='btn btn-block'>
							Register
						</button>
					</div>
				</form>
			</section>
		</>
	)
}
