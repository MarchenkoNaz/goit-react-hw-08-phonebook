import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';

export const LoginForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;
		dispatch(
			logIn({
				email: form.elements.email.value,
				password: form.elements.password.value,
			})
		);
		form.reset();
	};

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
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
