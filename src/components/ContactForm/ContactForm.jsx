
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(selectContacts);

	const handleSubmitForm = e => {
		e.preventDefault();
		const contactName = e.target.elements.name.value;
		const contactNumber = e.target.elements.number.value;
		const newContact = {
			name: contactName,
			number: contactNumber,
		};
		dispatch(addContact(newContact));

		if (contacts.some(i => i.name === contactName)) {
			alert(`You alraeady have a ${contactName} in contacts`);
			return;
		}
		e.target.reset();
	};
	return (
		<div>
			<form onSubmit={handleSubmitForm} className='container-sm m-2'>
				<div className="mb-3">
					<label htmlFor='name' className="form-label">
						Name
					</label>
					<input
						className='form-control'
						type="text"
						name="name"
						pattern="^[a-zA-Z\s]+$"
						title="On english!!!Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						placeholder='Jack Johnson'
						required
					/>

				</div>
				<label htmlFor='number' className="form-label">
					Number
				</label>
				<div className="mb-3">
					<input
						className='form-control'
						type="tel"
						name="number"
						pattern="^\+380\d{9}$"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
					/>
				</div>
				<button className="btn btn-primary" type="submit">
					Add contact
				</button>
			</form>
		</div>
	);
};
