import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Stack,
  Button,
  Typography,
  Tabs,
  Tab,
  TextField,
} from '@mui/material';
import {
  X,
  MapPin,
  GlobeHemisphereEast,
  User,
  Users,
  Heart,
} from 'phosphor-react';
import { gavel } from '../constants/images';
import IconButton from './IconButton';
import AntSwitch from './AntSwitch';

const EventDetails = ({ eventId, handleClose }) => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.allEvents);
  const selectedEvent = events.find((event) => event.id === eventId);

  console.log(selectedEvent);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newTab) => {
    setSelectedTab(newTab);
  };

  return (
    <Stack p={2}>
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
      <Box
        width="100%"
        sx={{
          margin: '20px 0 30px 0',
        }}
      >
        <img
          src={selectedEvent.bannerImg}
          style={{
            width: '100%',
            height: '220px',
            objectFit: 'cover',
            borderRadius: '10px 10px 0 0',
          }}
          alt="banner"
        />
      </Box>
      <Typography variant="h4">{selectedEvent.title}</Typography>

      <Tabs
        sx={{
          p: 2,
        }}
        value={selectedTab}
        onChange={handleTabChange}
      >
        <Tab label="Overview" />
        <Tab label="Evaluation" />
        <Tab label="Rewards" />
        <Tab label="Timeline" />
      </Tabs>

      <Stack spacing={2}>
        <Stack spacing={1}>
          <Typography variant="h6" fontWeight={400} sx={{ ml: '10px' }}>
            Description
          </Typography>
          <Stack
            p={2}
            spacing={2}
            width="100%"
            border="1px solid rgba(0, 0, 0, 0.4)"
            borderRadius="10px"
          >
            <Typography variant="body" fontWeight={300}>
              {selectedEvent.description}
            </Typography>
            <Stack width="100%">
              <Button
                variant="contained"
                disableElevation
                sx={{
                  width: '120px',
                  marginLeft: 'auto',
                  borderRadius: '10px',
                  textTransform: 'none',
                  backgroundColor: '#F25E2C',
                  borderColor: '#F25E2C',
                  '&:hover': {
                    // Slighly darken the background on hover
                    backgroundColor: '#F25E3C',
                    borderColor: '#F25E3C',
                  },
                }}
                onClick={handleClose}
              >
                Edit
              </Button>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h6" fontWeight={400} sx={{ ml: '10px' }}>
            Details
          </Typography>
          <Stack
            p={2}
            spacing={2}
            width="100%"
            border="1px solid rgba(0, 0, 0, 0.4)"
            borderRadius="10px"
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Typography variant="caption2" fontWeight={500}>
                  Location
                </Typography>
                <TextField
                  id="location"
                  size="small"
                  variant="outlined"
                  placeholder="Enter location"
                  sx={{ width: '300px' }}
                  value={selectedEvent.location}
                />
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Typography variant="caption2" fontWeight={500}>
                  Event Mode
                </Typography>
                <Stack direction="row" spacing={2}>
                  <IconButton
                    checked={selectedEvent.mode === 'offline'}
                    icon={<MapPin size={22} />}
                    text="Offline"
                    width="130px"
                  />
                  <IconButton
                    checked={selectedEvent.mode === 'online'}
                    icon={<GlobeHemisphereEast size={22} />}
                    text="Online"
                    width="130px"
                  />
                </Stack>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Typography variant="caption2" fontWeight={500}>
                  Participation Type
                </Typography>
                <Stack direction="row" spacing={2}>
                  <IconButton
                    checked={selectedEvent.participationType === 'individual'}
                    icon={<User size={22} />}
                    text="Individual"
                    width="130px"
                  />
                  <IconButton
                    checked={selectedEvent.participationType !== 'individual'}
                    icon={<Users size={22} />}
                    text="Group"
                    width="130px"
                  />
                </Stack>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Typography variant="caption2" fontWeight={500}>
                  Group Size
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={0}
                  sx={{ position: 'relative' }}
                >
                  <input
                    id="min-members"
                    className="num-input"
                    type="number"
                    value={selectedEvent.minMembers}
                    style={{
                      width: '140px',
                      border: '1px solid #ccc',
                      borderRadius: '8px 0 0 8px',
                      borderRight: 'none',
                      padding: '7px 12px',
                      outline: '1px solid #2b81f8',
                    }}
                  />
                  <Typography
                    variant="body2"
                    fontSize="0.75rem"
                    sx={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-150%, -50%)',
                      opacity: 0.7,
                    }}
                  >
                    Min
                  </Typography>
                  <input
                    id="max-members"
                    className="num-input"
                    type="number"
                    value={selectedEvent.maxMembers}
                    style={{
                      width: '140px',
                      border: '1px solid #ccc',
                      borderRadius: '0 8px 8px 0',
                      padding: '7px 12px',
                      outline: '1px solid #2b81f8',
                    }}
                  />
                  <Typography
                    variant="body2"
                    fontSize="0.75rem"
                    sx={{
                      position: 'absolute',
                      right: '0%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      opacity: 0.7,
                    }}
                  >
                    Max
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Typography variant="caption2" fontWeight={500}>
                  Judging Mode
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    checked={selectedEvent.judgingMode === 'likes'}
                    icon={<Heart size={22} />}
                    text="Likes"
                    width="100px"
                  />
                  <IconButton
                    checked={selectedEvent.judgingMode === 'judge'}
                    icon={
                      <img
                        src={gavel}
                        alt="gavel"
                        style={{
                          width: '38px',
                          color:
                            selectedEvent.judgingMode === 'judge'
                              ? '#2B81F8'
                              : '#fff',
                          margin: '2px 4px',
                        }}
                      />
                    }
                    text="Judging"
                    width="100px"
                  />
                  <IconButton
                    checked={selectedEvent.judgingMode === 'hybrid'}
                    icon={<User size={22} />}
                    text="Hybrid"
                    width="100px"
                  />
                </Stack>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={5}>
                <Typography variant="caption2" fontWeight={500}>
                  Private
                </Typography>
                <AntSwitch checked={selectedEvent.isPrivate} />
              </Stack>
            </Stack>
            <Stack width="100%">
              <Button
                variant="contained"
                disableElevation
                sx={{
                  width: '120px',
                  marginTop: '10px',
                  marginLeft: 'auto',
                  borderRadius: '10px',
                  textTransform: 'none',
                  backgroundColor: '#F25E2C',
                  borderColor: '#F25E2C',
                  '&:hover': {
                    // Slighly darken the background on hover
                    backgroundColor: '#F25E3C',
                    borderColor: '#F25E3C',
                  },
                }}
                onClick={handleClose}
              >
                Edit
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EventDetails;
