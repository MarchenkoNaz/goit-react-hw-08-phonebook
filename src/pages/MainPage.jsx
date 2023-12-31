import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export default function MainBook() {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<>
			<ContactForm />
			<Filter />
			{isLoading && !error && <Loader />}
			<ContactList />
		</>
	);
}
