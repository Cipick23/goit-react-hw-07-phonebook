import Alert from 'react-bootstrap/Alert';
import React from 'react';

function BasicAlert({ name, phoneNumber, showAlert, onClose }) {
  return (
    showAlert && (
      <Alert variant="warning" onClose={onClose} dismissible>
        Contactul cu numele {name} sau numărul {phoneNumber} există deja.
      </Alert>
    )
  );
}

export default BasicAlert;