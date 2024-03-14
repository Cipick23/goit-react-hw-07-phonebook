import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './ErrorAlert.module.css';
import { ErrorMessage } from 'formik';
import { render } from 'react-dom';
import { useSelector } from 'react-redux';
import { selectError } from '../redux/selectors';

const ErrorAlert = ({ errors }) => {
  const error = useSelector(selectError);
  const [isClosed, setIsClosed] = useState(false);

  if (errors.length === 0 || isClosed) {
    return null;
  }

  return (
    <section className={styles.alert}>
      <div className={styles.content}>
        <ErrorMessage className={styles.error} component="span" name="name" />
        {error.length > 0 && <ErrorAlert message={error} />}
        {!error && render()}
        <p>{errors}</p>
        <span className={styles.close} onClick={() => setIsClosed(true)}></span>
      </div>
    </section>
  );
};

ErrorAlert.propTypes = {
  errors: PropTypes.string.isRequired,
};

export default ErrorAlert;
