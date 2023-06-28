import React from 'react';
import { Stack } from '@mui/material';
import { Sidebar } from './components';
import { Events } from './sections';

import './App.css';

const App = () => {
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
        <Stack height="60px" alignItems="center" justifyContent="center" />

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
