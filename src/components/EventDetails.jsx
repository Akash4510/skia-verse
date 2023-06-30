import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Stack, Button, Typography } from '@mui/material';
import { X } from 'phosphor-react';

const EventDetails = ({ eventId, handleClose }) => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.allEvents);
  const selectedEvent = events.find((event) => event.id === eventId);

  console.log(selectedEvent);

  return (
    <Stack>
      <Stack
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="caption2">Event Details</Typography>
        <X size={22} onClick={handleClose} cursor="pointer" />
      </Stack>
      <Box>
        <img src={selectedEvent.bannerImage} alt="banner" />
      </Box>
      <Typography variant="h4">{selectedEvent.title}</Typography>
    </Stack>
  );
};

export default EventDetails;
