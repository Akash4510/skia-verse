import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import UploadFileForm from './UploadFileForm';

const UploadFileDialog = ({ open, handleClose, file, setFile }) => {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} keepMounted>
      <DialogTitle>Upload Files</DialogTitle>
      <DialogContent>
        <UploadFileForm
          file={file}
          setFile={setFile}
          handleClose={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
};

export default UploadFileDialog;
