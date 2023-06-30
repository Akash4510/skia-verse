import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import UploadFileDialog from './UploadFileDialog';

const FileUploadButton = ({ text, icon, width, file, setFile }) => {
  const dispatch = useDispatch();
  const { isFileUploadDialogOpen } = useSelector((state) => state.app);

  const handleClose = () => {
    dispatch({
      type: 'TOGGLE_FILE_UPLOAD_DIALOG',
      payload: !isFileUploadDialogOpen,
    });

    console.log('Closing');
  };

  return (
    <Button
      variant="outlined"
      disableElevation
      sx={{
        width: width,
        borderRadius: '10px',
        textTransform: 'none',
      }}
      onClick={() => dispatch({ type: 'TOGGLE_FILE_UPLOAD_DIALOG' })}
    >
      <Typography
        variant="caption2"
        fontWeight={500}
        sx={{ paddingRight: '5px' }}
      >
        {text}
      </Typography>
      {icon}

      {isFileUploadDialogOpen && (
        <UploadFileDialog
          open={isFileUploadDialogOpen}
          handleClose={handleClose}
          file={file}
          setFile={setFile}
        />
      )}
    </Button>
  );
};

export default FileUploadButton;
