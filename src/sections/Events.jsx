import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { EventCard } from '../components';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from '../components/SearchBar';
import { MagnifyingGlass } from 'phosphor-react';
import { events } from '../constants/data/events';

const Events = () => {
  return (
    <Box p={2} sx={{ backgroundColor: '#FFF', borderRadius: '10px' }}>
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
          >
            Add New
          </Button>
        </Stack>
      </Stack>

      <Stack spacing={2} mt={5}>
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </Stack>
    </Box>
  );
};

export default Events;
