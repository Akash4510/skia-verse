import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { CurrencyInr, Users, Tag, MapPin, CalendarBlank } from 'phosphor-react';
import useResponsive from '../hooks/useResponsive';

const EventCard = ({
  name,
  img,
  organiser,
  status,
  pricePool,
  noOfRegistrations,
  tag,
  location,
  date,
}) => {
  const { isDesktop } = useResponsive();

  return (
    <Stack
      p={2}
      width="100%"
      border="1px solid rgba(0, 0, 0, 0.4)"
      borderRadius="10px"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
    >
      <Stack direction="row" spacing={2}>
        <Box width="140px" borderRadius="10px">
          <img style={{ borderRadius: '10px' }} src={img} alt={name} />
        </Box>
        <Stack spacing={2} py={1.5} justifyContent="space-between">
          <Stack>
            <Typography variant="h6" fontSize="1.4rem">
              {name}
            </Typography>
            <Typography variant="caption" fontSize="1rem">
              {organiser}
            </Typography>
          </Stack>

          <Box
            width="max-content"
            sx={{
              border: '0.6px solid #74BFFF4D',
              borderRadius: '5px',
              padding: '0.05rem 0.5rem',
              backgroundColor: '#74BFFF1A',
              cursor: 'pointer',
            }}
          >
            <Typography
              variant="caption"
              fontSize="0.8rem"
              sx={{ color: '#0089FF' }}
            >
              {status}
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Stack
        alignItems="center"
        justifyContent="flex-end"
        py={2}
        sx={{ mt: '50px' }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <CurrencyInr size={20} />
          <Typography variant="caption" fontSize="1rem">
            <span style={{ fontWeight: '600' }}>{pricePool}</span> in prices
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Users size={20} />
          <Typography variant="caption" fontSize="1rem">
            <span style={{ fontWeight: '600' }}>{noOfRegistrations}</span>{' '}
            registered
          </Typography>
        </Stack>
      </Stack>

      {isDesktop && (
        <Stack direction="row" spacing={1}>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: '#000', opacity: '0.4' }}
          />

          <Stack spacing={1.5} px={2.5}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Tag size={18} />
              <Typography variant="caption" fontSize="0.9rem">
                {tag}
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <MapPin size={18} />
              <Typography variant="caption" fontSize="0.9rem">
                {location}
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <CalendarBlank size={18} />
              <Typography variant="caption" fontSize="0.9rem">
                {date}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default EventCard;
