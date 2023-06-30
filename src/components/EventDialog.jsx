import React, { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import AddEventForm from './AddEventForm';
import AddEventForm2 from './AddEventForm2';

const EventDialog = ({ open, handleClose }) => {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} keepMounted>
      <DialogContent>
        <AddEventForm2 handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default EventDialog;
