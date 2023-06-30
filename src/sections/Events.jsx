import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Stack, Typography, Button } from '@mui/material';
import { EventCard, EventDetails, EventDialog } from '../components';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from '../components/SearchBar';
import { MagnifyingGlass } from 'phosphor-react';

const Events = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const storedEvents = localStorage.getItem('allEvents');
  const events = JSON.parse(storedEvents);
  const { isDetailedViewOpen, selectedEventId } = useSelector(
    (state) => state.eventData
  );

  console.log('detailView', isDetailedViewOpen);
  console.log('selectedEventId', selectedEventId);

  const openDetailView = (id) => {
    dispatch({ type: 'OPEN_DETAILED_VIEW', payload: id });
  };

  const closeDetailView = () => {
    dispatch({ type: 'CLOSE_DETAILED_VIEW' });
  };

  return (
    <Box p={2} sx={{ backgroundColor: '#FFF', borderRadius: '10px' }}>
      {!isDetailedViewOpen && (
        <>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h5" fontWeight={700}>
              Events
            </Typography>

            <Stack direction="row" justifyContent="space-evenly" spacing={2}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  borderRadius: '20px',
                  backgroundColor: '#2B81F8',
                  textTransform: 'none',
                }}
                onClick={() => setOpenDialog(true)}
              >
                Add New
              </Button>
            </Stack>
          </Stack>
          <Stack spacing={2} mt={5}>
            {events.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                onClick={() => {
                  openDetailView(event.id);
                }}
              />
            ))}
          </Stack>
        </>
      )}

      {isDetailedViewOpen && (
        <EventDetails eventId={selectedEventId} handleClose={closeDetailView} />
      )}

      {openDialog && (
        <EventDialog
          open={openDialog}
          handleClose={() => setOpenDialog(false)}
        />
      )}
    </Box>
  );
};

export default Events;
