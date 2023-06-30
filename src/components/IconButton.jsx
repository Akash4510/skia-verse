import React from 'react';
import { Stack, Box, Button, Typography } from '@mui/material';

const IconButton = ({ checked, onClick, icon, text, width }) => {
  return (
    <Button
      variant={checked ? 'contained' : 'outlined'}
      disableElevation
      size="small"
      sx={{
        width: width,
        borderRadius: '8px',
        textTransform: 'none',
        justifyContent: 'left',
        padding: '5px 10px',
      }}
      onClick={onClick}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="left"
        spacing={1}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid',
            borderColor: checked ? '#fff' : '#2B81F8',
            borderRadius: '8px',
            padding: '2px',
            backgroundColor: checked ? '#fff' : '#2B81F8',
            color: checked ? '#2B81F8' : '#fff',
          }}
        >
          {icon}
        </Box>
        <Typography variant="caption2" fontSize="0.85rem" fontWeight={500}>
          {text}
        </Typography>
      </Stack>
    </Button>
  );
};

export default IconButton;
