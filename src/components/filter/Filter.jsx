import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFiltersContacts } from '../../redux/selectors';
import { setFilter } from '../../redux/contactsFilterSlice';
import PropTypes from 'prop-types';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFiltersContacts);

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
      disabled={useSelector(selectContacts).length === 0}
    />
  );
}

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func, // Specificăm că onChange ar trebui să fie o funcție
};
