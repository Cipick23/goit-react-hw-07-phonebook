// Filter.js
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, setFilter } from '../../redux/contactSlice';
import { selectFiltersContacts } from '../../redux/selectors';
import styles from './Filter.module.css';
import { useEffect } from 'react';

export default function Filter() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFiltersContacts);

  useEffect(() => {
    // Dacă dorești, poți adăuga aici un apel către backend pentru a obține contactele
    dispatch(fetchContacts());
  }, [dispatch]);

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
