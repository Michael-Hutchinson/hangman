import React from 'react';
import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

type AlertMessageProps = {
  isOpen: boolean;
  message: string;
  severity: 'error' | 'success';
};

function AlertMessage({ severity, message, isOpen }: AlertMessageProps) {
  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      autoHideDuration={6000}
      onClose={() => isOpen}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
}

export default AlertMessage;
