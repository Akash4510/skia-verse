import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Sidebar } from './components';
import { Events } from './sections';
import './App.css';
import { allEventsInitialState } from './constants/data/events';

const App = () => {
  // Check if initial data has been set in local storage
  const isLocalStorageInitialized = localStorage.getItem(
    'isLocalStorageInitialized'
  );

  if (!isLocalStorageInitialized) {
    // Set initial data in local storage
    localStorage.setItem('allEvents', JSON.stringify(allEventsInitialState));

    // Set flag to indicate that local storage has been initialized
    localStorage.setItem('isLocalStorageInitialized', 'true');
  }

  return (
    <Stack height="100vh" overflow="hidden" direction="row">
      <Sidebar />
      <Stack
        overflow="scroll"
        flexGrow={1}
        sx={{
          overflowX: 'hidden',
        }}
      >
        <Stack height="60px" alignItems="center" justifyContent="center">
          <Typography variant="body" sx={{ opacity: 0.5 }}>
            Created by Akash Gupta
          </Typography>
        </Stack>

        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{
            height: 'calc(100% - 60px)',
            backgroundColor: '#F2F9FF',
          }}
          px={1}
          py={3}
        >
          <Events />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default App;
