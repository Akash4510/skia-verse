import React, { useState, useRef } from 'react';
import { Stack, Button, Typography } from '@mui/material';
import { CodesandboxLogo, X } from 'phosphor-react';
import { filePng } from '../constants/images';

const UploadFileForm = ({ file, setFile, handleClose }) => {
  const dropRef = useRef(null);
  const [drag, setDrag] = useState(false);
  const [fileName, setFileName] = useState('');

  const onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setDrag(true);
    }
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setDrag(true);
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const uploadedFile = e.dataTransfer.files[0];
      setFileName(uploadedFile.name);
      const reader = new FileReader();

      reader.onload = (e) => {
        const convertedFile = e.target.result;
        console.log('Converted file: ', convertedFile);
        setFile(convertedFile);
      };

      reader.readAsDataURL(uploadedFile);
      e.dataTransfer.clearData();
    }
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files && e.target.files.length > 0) {
      const uploadedFile = e.target.files[0];
      setFileName(uploadedFile.name);
      const reader = new FileReader();

      reader.onload = (e) => {
        const convertedFile = e.target.result;
        console.log('Converted file: ', convertedFile);
        setFile(convertedFile);
      };

      reader.readAsDataURL(uploadedFile);
    }
  };

  return (
    <Stack spacing={2} py={1}>
      <Typography variant="h5" fontWeight={500} sx={{ mb: '10px' }}>
        Upload Image
      </Typography>

      <Stack
        ref={dropRef}
        onDrop={onDrop}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        alignItems="center"
        justifyContent="center"
        p={2}
        sx={{
          height: '100px',
          position: 'relative',
          border: drag ? '2px dashed #000' : '2px dashed #ccc',
          borderRadius: '8px',
        }}
      >
        <Typography variant="caption2" fontWeight={300}>
          {drag ? 'Drop the file here' : 'Drag and drop files here'}
        </Typography>
        <input
          type="file"
          name="file"
          id="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer',
            '&:hover': {
              opacity: 1,
            },
          }}
        />
      </Stack>

      {/* Add a file view */}
      {file && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          p={2}
          sx={{
            borderRadius: '8px',
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <img src={filePng} style={{ width: '30px' }} alt="file" />
            <Typography variant="caption2" fontWeight={300}>
              {fileName}
            </Typography>
          </Stack>

          <X
            size={24}
            color="#000"
            weight="bold"
            style={{ cursor: 'pointer' }}
            onClick={() => setFile(null)}
          />
        </Stack>
      )}

      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ paddingTop: '10px' }}
      >
        <Button
          variant="outlined"
          disableElevation
          sx={{
            width: '120px',
            borderRadius: '10px',
            textTransform: 'none',
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{
            position: 'relative',
            borderRadius: '10px',
            textTransform: 'none',
          }}
          type="submit"
        >
          <Typography variant="caption2" fontWeight={500}>
            Browse Files
          </Typography>
          <input
            type="file"
            name="file"
            id="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: 'pointer',
              '&:hover': {
                opacity: 1,
              },
            }}
          />
        </Button>

        <Button
          variant="contained"
          disableElevation
          sx={{
            position: 'relative',
            borderRadius: '10px',
            textTransform: 'none',
          }}
          onClick={handleClose}
        >
          <Typography variant="caption2" fontWeight={500}>
            Done
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default UploadFileForm;
