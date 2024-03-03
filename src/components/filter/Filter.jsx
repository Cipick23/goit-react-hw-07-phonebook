// Filter.js
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactSlice';
import { selectFiltersContacts } from '../../redux/selectors';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFiltersContacts);

  function changeFilter(e) {
    const searchContact = e.toLowerCase();
    dispatch(setFilter(searchContact));
  }

  return (
    <div className={styles.filterDiv}>
      <label className={styles.filterLabel} htmlFor="search">
        Find contacts by name:
      </label>
      <input
        className={styles.filterInput}
        type="text"
        name="search"
        value={filteredContacts}
        placeholder="Search contacts"
        onChange={e => {
          changeFilter(e.target.value);
        }}
      />
    </div>
  );
}
