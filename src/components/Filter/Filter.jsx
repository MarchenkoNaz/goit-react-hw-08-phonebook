import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/contacts/filterSlice';

export const Filter = () => {
	const dispatch = useDispatch();
	const filterValue = e => {
		dispatch(setFilterValue(e.target.value));
	};
	return (<>
		<div className="mb-3 container-sm mt-3 m-2">
			<label htmlFor="exampleInputEmail1" className="form-label">Search contact</label>
			<input className="form-control" type="text" onChange={filterValue} />
		</div>	</>
	);
};
