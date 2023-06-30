import React, { useState } from 'react';
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
  const storedEvents = localStorage.getItem('allEvents');
  const events = JSON.parse(storedEvents);
  const selectedEvent = events.find((event) => event.id === eventId);

  console.log(selectedEvent);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newTab) => {
    setSelectedTab(newTab);
  };

  const [eventDesc, setEventDesc] = useState(selectedEvent.description);
  const [eventMode, setEventMode] = useState(selectedEvent.mode);
  const [participationType, setParticipationType] = useState(
    selectedEvent.participationType
  );
  const [minMembers, setMinMembers] = useState(selectedEvent.minMembers);
  const [maxMembers, setMaxMembers] = useState(selectedEvent.maxMembers);
  const [judgingMode, setJudgingMode] = useState(selectedEvent.judgingMode);
  const [location, setLocation] = useState(selectedEvent.location);
  const [isPrivate, setIsPrivate] = useState(selectedEvent.isPrivate);

  const [descEdiable, setDescEdiable] = useState(false);
  const [dataEditable, setDataEditable] = useState(false);

  const resetDesc = () => {
    setEventDesc(selectedEvent.description);
    setDescEdiable(false);
  };

  const resetData = () => {
    setEventMode(selectedEvent.mode);
    setParticipationType(selectedEvent.participationType);
    setMinMembers(selectedEvent.minMembers);
    setMaxMembers(selectedEvent.maxMembers);
    setJudgingMode(selectedEvent.judgingMode);
    setLocation(selectedEvent.location);
    setIsPrivate(selectedEvent.isPrivate);
    setDataEditable(false);
  };

  const updateDesc = () => {
    const newEvents = events.map((event) => {
      if (event.id === eventId) {
        return {
          ...event,
          description: eventDesc,
        };
      }
      return event;
    });
    localStorage.setItem('allEvents', JSON.stringify(newEvents));
    setDescEdiable(false);
  };

  const updateData = () => {
    const newEvents = events.map((event) => {
      if (event.id === eventId) {
        return {
          ...event,
          mode: eventMode,
          participationType,
          minMembers,
          maxMembers,
          judgingMode,
          location,
          isPrivate,
        };
      }
      return event;
    });
    localStorage.setItem('allEvents', JSON.stringify(newEvents));
    setDataEditable(false);
  };

  const deleteEvent = () => {
    const newEvents = events.filter((event) => event.id !== eventId);
    localStorage.setItem('allEvents', JSON.stringify(newEvents));
    handleClose();
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
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{selectedEvent.title}</Typography>
        <Button
          variant="contained"
          disableElevation
          sx={{
            width: '120px',
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
          onClick={deleteEvent}
        >
          <Typography variant="caption2" fontWeight={500}>
            Delete Event
          </Typography>
        </Button>
      </Stack>

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
            <textarea
              name="event-desc"
              id="event-desc"
              cols="30"
              rows="4"
              resize
              style={{
                resize: 'none',
                borderRadius: '8px',
                border: 'none',
                outline: 'none',
                fontSize: '1rem',
                opacity: '0.8',
              }}
              value={eventDesc}
              onChange={(e) => setEventDesc(e.target.value)}
              disabled={!descEdiable}
            ></textarea>
            <Stack
              width="100%"
              direction="row"
              alignItems="center"
              spacing={2}
              justifyContent="flex-end"
              sx={{
                marginTop: '10px',
              }}
            >
              {descEdiable && (
                <Button
                  variant="outlined"
                  disableElevation
                  sx={{
                    width: '120px',
                    borderRadius: '10px',
                    textTransform: 'none',
                  }}
                  onClick={resetDesc}
                >
                  Cancel
                </Button>
              )}
              <Button
                variant="contained"
                disableElevation
                sx={{
                  width: '120px',
                  marginLeft: 'auto',
                  borderRadius: '10px',
                  textTransform: 'none',
                  backgroundColor: descEdiable ? '#2B81F8' : '#F25E2C',
                  borderColor: descEdiable ? '#2B81F8' : '#F25E2C',
                  '&:hover': {
                    // Slighly darken the background on hover
                    backgroundColor: descEdiable ? '#2B82F8' : '#F25E3C',
                    borderColor: descEdiable ? '#2B82F8' : '#F25E3C',
                  },
                }}
                onClick={descEdiable ? updateDesc : () => setDescEdiable(true)}
              >
                {descEdiable ? 'Save' : 'Edit'}
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
            spacing={3}
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
                  value={location}
                  onChange={(e) => {
                    if (dataEditable) {
                      setLocation(e.target.value);
                    }
                  }}
                  disabled={!dataEditable}
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
                    checked={eventMode === 'offline'}
                    onClick={() => {
                      if (dataEditable) {
                        setEventMode('offline');
                      }
                    }}
                    icon={<MapPin size={22} />}
                    text="Offline"
                    width="130px"
                  />
                  <IconButton
                    checked={eventMode === 'online'}
                    onClick={() => {
                      if (dataEditable) {
                        setEventMode('online');
                      }
                    }}
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
                    checked={participationType === 'individual'}
                    onClick={() => {
                      if (dataEditable) {
                        setParticipationType('individual');
                      }
                    }}
                    icon={<User size={22} />}
                    text="Individual"
                    width="130px"
                  />
                  <IconButton
                    checked={participationType === 'group'}
                    onClick={() => {
                      if (dataEditable) {
                        setParticipationType('group');
                      }
                    }}
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
                    value={minMembers}
                    onChange={(e) => {
                      if (dataEditable) {
                        setMinMembers(e.target.value);
                      }
                    }}
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
                    value={maxMembers}
                    onChange={(e) => {
                      if (dataEditable) {
                        setMaxMembers(e.target.value);
                      }
                    }}
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
                    checked={judgingMode === 'likes'}
                    icon={<Heart size={22} />}
                    text="Likes"
                    width="100px"
                    onClick={() => {
                      if (dataEditable) {
                        setJudgingMode('likes');
                      }
                    }}
                  />
                  <IconButton
                    checked={judgingMode === 'judge'}
                    icon={
                      <img
                        src={gavel}
                        alt="gavel"
                        style={{
                          width: '38px',
                          color: judgingMode === 'judge' ? '#2B81F8' : '#fff',
                          margin: '2px 4px',
                        }}
                      />
                    }
                    text="Judging"
                    width="100px"
                    onClick={() => {
                      if (dataEditable) {
                        setJudgingMode('judge');
                      }
                    }}
                  />
                  <IconButton
                    checked={judgingMode === 'hybrid'}
                    icon={<User size={22} />}
                    text="Hybrid"
                    width="100px"
                    onClick={() => {
                      if (dataEditable) {
                        setJudgingMode('hybrid');
                      }
                    }}
                  />
                </Stack>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={5}>
                <Typography variant="caption2" fontWeight={500}>
                  Private
                </Typography>
                <AntSwitch
                  checked={isPrivate}
                  onChange={() => {
                    if (dataEditable) {
                      setIsPrivate(!isPrivate);
                    }
                  }}
                />
              </Stack>
            </Stack>
            <Stack
              width="100%"
              direction="row"
              alignItems="center"
              spacing={2}
              justifyContent="flex-end"
              sx={{
                marginTop: '10px',
              }}
            >
              {dataEditable && (
                <Button
                  variant="outlined"
                  disableElevation
                  sx={{
                    width: '120px',
                    borderRadius: '10px',
                    textTransform: 'none',
                  }}
                  onClick={resetData}
                >
                  Cancel
                </Button>
              )}
              <Button
                variant="contained"
                disableElevation
                sx={{
                  width: '120px',
                  marginLeft: 'auto',
                  borderRadius: '10px',
                  textTransform: 'none',
                  backgroundColor: dataEditable ? '#2B81F8' : '#F25E2C',
                  borderColor: dataEditable ? '#2B81F8' : '#F25E2C',
                  '&:hover': {
                    // Slighly darken the background on hover
                    backgroundColor: dataEditable ? '#2B82F8' : '#F25E3C',
                    borderColor: dataEditable ? '#2B82F8' : '#F25E3C',
                  },
                }}
                onClick={() => {
                  if (dataEditable) {
                    updateData();
                  } else {
                    setDataEditable(true);
                  }
                }}
              >
                {dataEditable ? 'Save' : 'Edit'}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EventDetails;
