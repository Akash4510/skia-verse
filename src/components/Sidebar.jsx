import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {
  House,
  Shield,
  Calendar,
  ChartLineUp,
  Info,
  MinusCircle,
} from 'phosphor-react';

const menus = [
  {
    icon: <House size={24} />,
    title: 'Home',
  },
  {
    icon: <Shield size={24} />,
    title: 'Clubs',
  },
  {
    icon: <Calendar size={24} />,
    title: 'Events',
  },
  {
    icon: <ChartLineUp size={24} />,
    title: 'Analytics',
  },
];

const options = [
  {
    icon: <Info size={24} />,
    title: 'Help & Information',
  },
  {
    icon: <MinusCircle size={24} />,
    title: 'Logout',
  },
];

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(2);

  return (
    <Box
      width={225}
      height="100vh"
      sx={{
        borderRight: '1px solid #E4F0FF',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Stack height="60px" alignItems="center" justifyContent="center">
        <Typography
          variant="h5"
          sx={{ textTransform: 'uppercase' }}
          fontWeight={700}
        >
          Skia
        </Typography>
      </Stack>

      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{
          height: 'calc(100% - 60px)',
          backgroundColor: '#F2F9FF',
          borderRight: '1px solid #E4F0FF',
          boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.25)',
        }}
        px={1}
        py={3}
      >
        <Stack spacing={1}>
          {menus.map((menu, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              spacing={2}
              px={2}
              sx={{
                height: '40px',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#E4F0FF',
                },
                borderRadius: '10px',
                backgroundColor:
                  activeMenu === index ? '#E4F0FF' : 'transparent',
                opacity: activeMenu === index ? 1 : 0.5,
              }}
              onClick={() => setActiveMenu(index)}
            >
              {menu.icon}
              <Typography variant="subtitle1" fontWeight={500}>
                {menu.title}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Stack>
          {options.map((option, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              spacing={2}
              px={2}
              sx={{
                height: '40px',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#E4F0FF',
                  opacity: 1,
                },
                borderRadius: '10px',
                opacity: 0.6,
              }}
            >
              {option.icon}
              <Typography variant="subtitle2" fontWeight={500}>
                {option.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
