import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';

export const RegisterForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;
		dispatch(
			register({
				name: form.elements.name.value,
				email: form.elements.email.value,
				password: form.elements.password.value,
			})
		);
		form.reset();
	};

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<div className="mb-3">
				<label htmlFor="name" className="form-label">Username</label>
				<input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" />
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
				<input type="email" className="form-control" id="exampleInputEmail1"
					name="email" aria-describedby="emailHelp" />

			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
				<input type="password" className="form-control" id="exampleInputPassword1" name="password" />
			</div>

			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
	);
};
