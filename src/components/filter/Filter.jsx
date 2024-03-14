import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFiltersContacts } from '../../redux/selectors';
import { setFilter } from '../../redux/contactsFilterSlice';
import PropTypes from 'prop-types';
// import { selectContacts } from '../../redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFiltersContacts);
  const contacts = useSelector(selectContacts);
  const isContactsEmpty = contacts === undefined ? true : contacts.length === 0;

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return (
    <input
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
      disabled={isContactsEmpty}
    />
  );
}

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func, // Specificăm că onChange ar trebui să fie o funcție
};
