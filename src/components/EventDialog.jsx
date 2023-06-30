import React from 'react';
import { Dialog, DialogContent } from '@mui/material';
import MasterForm from './EventForm';

const MasterDialog = ({ open, handleClose }) => {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} keepMounted>
      <DialogContent>
        <MasterForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default MasterDialog;
