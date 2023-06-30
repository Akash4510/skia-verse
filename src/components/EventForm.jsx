import React, { useState } from 'react';
import { Stack, Button, TextField, Typography, MenuItem } from '@mui/material';
import {
  CloudArrowUp,
  ArrowRight,
  MapPin,
  GlobeHemisphereEast,
  User,
  Users,
  Heart,
  ArrowLeft,
  CheckCircle,
} from 'phosphor-react';
import FormProvider from './FormProvider';
import IconButton from './IconButton';
import UploadFileForm from './UploadFileForm';
import { gavel } from '../constants/images';
import AntSwitch from './AntSwitch';

const eventTypes = [
  {
    value: 'Hackathon',
    label: 'Hackathon',
  },
  {
    value: 'Workshop',
    label: 'Workshop',
  },
  {
    value: 'Seminar',
    label: 'Seminar',
  },
  {
    value: 'Webinar',
    label: 'Webinar',
  },
];

const MasterForm = ({ handleClose }) => {
  const [currentPopUp, setCurrentPopUp] = useState(1);

  // Form 1 Fields
  const [eventTitle, setEventTitle] = useState('');
  const [eventDesc, setEventDesc] = useState('');
  const [eventImage, setEventImage] = useState('');
  const [eventBannerImage, setEventBannerImage] = useState('');
  const [eventMode, setEventMode] = useState('online');
  const [eventType, setEventType] = useState('');

  // Form 2 Fields
  const [currFileUpload, setCurrFileUpload] = useState('eventImg');

  // Form 3 Fields
  const [participationType, setParticipationType] = useState('group');
  const [minMembers, setMinMembers] = useState(1);
  const [maxMembers, setMaxMembers] = useState(3);
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);
  const formattedTime = currentDate.toISOString().slice(11, 16);
  const [startDate, setStartDate] = useState(formattedDate);
  const [endDate, setEndDate] = useState(formattedDate);
  const [startTime, setStartTime] = useState(formattedTime);
  const [endTime, setEndTime] = useState(formattedTime);
  const [judgingMode, setJudgingMode] = useState('likes');
  const [location, setLocation] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);

  const isValidForm1 = () => {
    if (
      eventTitle === '' ||
      eventDesc === '' ||
      eventImage === null ||
      eventImage === '' ||
      eventBannerImage === null ||
      eventBannerImage === '' ||
      eventMode === '' ||
      eventType === ''
    ) {
      return false;
    }
    return true;
  };

  const isValidForm2 = () => {
    if (
      participationType === '' ||
      minMembers === '' ||
      maxMembers === '' ||
      startDate === '' ||
      endDate === '' ||
      startTime === '' ||
      endTime === '' ||
      judgingMode === '' ||
      location === ''
    ) {
      return false;
    }
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let storedState = localStorage.getItem('allEvents');
    storedState = JSON.parse(storedState);

    const newEvent = {
      id: storedState.length + 1,
      title: eventTitle,
      description: eventDesc,
      img: eventImage,
      bannerImg: eventBannerImage,
      mode: eventMode,
      type: eventType,
      participationType,
      minMembers,
      maxMembers,
      startDate,
      endDate,
      startTime,
      endTime,
      judgingMode,
      location,
      isPrivate,
      organiser: 'Synolo',
      status: 'Ongoing',
      pricePool: 30000,
      noOfRegistrations: 256,
    };
    console.log(newEvent);

    localStorage.setItem(
      'allEvents',
      JSON.stringify([...storedState, newEvent])
    );

    console.log('Sucessfully stored data in local storage');
    handleClose();
  };

  return (
    <FormProvider onSubmit={onSubmit}>
      {currentPopUp === 1 && (
        <Stack spacing={2.5} py={1}>
          <Stack>
            <label htmlFor="event-title">
              <Typography variant="caption2" fontWeight={500}>
                Event Title
              </Typography>
            </label>
            <input
              id="event-title"
              type="text"
              style={{
                height: '40px',
                borderRadius: '8px',
                border: '1px solid #000000',
                outline: 'none',
                paddingInline: '10px',
                fontSize: '0.9rem',
                opacity: '0.8',
              }}
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
          </Stack>

          <Stack>
            <label htmlFor="event-desc">
              <Typography variant="caption2" fontWeight={500}>
                Description
              </Typography>
            </label>
            <textarea
              name="event-desc"
              id="event-desc"
              cols="30"
              rows="4"
              resize
              style={{
                resize: 'none',
                borderRadius: '8px',
                border: '1px solid #000000',
                outline: 'none',
                padding: '10px 10px',
                fontSize: '0.9rem',
                opacity: '0.8',
              }}
              value={eventDesc}
              onChange={(e) => setEventDesc(e.target.value)}
            ></textarea>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="caption2" fontWeight={500}>
              Upload Image
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              {eventImage && <CheckCircle size={22} color="#2B81F8" />}
              <Button
                variant="outlined"
                disableElevation
                sx={{
                  width: '180px',
                  borderRadius: '10px',
                  textTransform: 'none',
                }}
                onClick={() => {
                  setCurrFileUpload('eventImg');
                  setCurrentPopUp(2);
                }}
              >
                <Typography
                  variant="caption2"
                  fontWeight={500}
                  sx={{ paddingRight: '5px' }}
                >
                  {eventImage ? 'Change Image' : 'Upload File'}
                </Typography>
                <CloudArrowUp size={16} />
              </Button>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="caption2" fontWeight={500}>
              Upload Banner Image
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              {eventBannerImage && <CheckCircle size={22} color="#2B81F8" />}
              <Button
                variant="outlined"
                disableElevation
                sx={{
                  width: '180px',
                  borderRadius: '10px',
                  textTransform: 'none',
                }}
                onClick={() => {
                  setCurrFileUpload('bannerImg');
                  setCurrentPopUp(2);
                }}
              >
                <Typography
                  variant="caption2"
                  fontWeight={500}
                  sx={{ paddingRight: '5px' }}
                >
                  {eventBannerImage ? 'Change Image' : 'Upload File'}
                </Typography>
                <CloudArrowUp size={16} />
              </Button>
            </Stack>
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
                onClick={() => setEventMode('offline')}
                icon={<MapPin size={22} />}
                text="Offline"
                width="130px"
              />
              <IconButton
                checked={eventMode === 'online'}
                onClick={() => setEventMode('online')}
                icon={<GlobeHemisphereEast size={22} />}
                text="Online"
                width="130px"
              />
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="caption2" fontWeight={500}>
              Event Type
            </Typography>
            <TextField
              id="event-type"
              select
              size="small"
              label="Select event type"
              sx={{
                width: '180px',
                fontSize: '0.9rem',
              }}
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            >
              {eventTypes.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{ fontSize: '0.9rem' }}
                >
                  <Typography variant="caption2" fontSize="0.9rem">
                    {option.label}
                  </Typography>
                </MenuItem>
              ))}
            </TextField>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ paddingTop: '10px' }}
          >
            <Button
              variant="outlined"
              disableElevation
              sx={{
                width: '120px',
                borderRadius: '10px',
                textTransform: 'none',
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{
                width: '120px',
                borderRadius: '10px',
                textTransform: 'none',
                backgroundColor: isValidForm1() ? '#2B81F8' : '#85C2F6',
                '&:hover': {
                  backgroundColor: isValidForm1() ? '#2B81F8' : '#85C2F6',
                },
                '&:disabled': {
                  backgroundColor: '#85C2F6',
                },
              }}
              onClick={() => {
                if (!isValidForm1()) return;
                setCurrentPopUp(3);
              }}
            >
              <Typography
                variant="caption2"
                fontWeight={500}
                sx={{ paddingRight: '10px' }}
              >
                Next
              </Typography>
              <ArrowRight size={16} />
            </Button>
          </Stack>
        </Stack>
      )}

      {currentPopUp === 2 && (
        <UploadFileForm
          file={currFileUpload === 'eventImg' ? eventImage : eventBannerImage}
          setFile={
            currFileUpload === 'eventImg' ? setEventImage : setEventBannerImage
          }
          handleClose={() => setCurrentPopUp(1)}
        />
      )}

      {currentPopUp === 3 && (
        <Stack spacing={2.5} py={1}>
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
                onClick={() => setParticipationType('individual')}
                icon={<User size={22} />}
                text="Individual"
                width="130px"
              />
              <IconButton
                checked={participationType !== 'individual'}
                onClick={() => setParticipationType('group')}
                icon={<Users size={22} />}
                text="Group"
                width="130px"
              />
            </Stack>
          </Stack>

          {participationType === 'group' && (
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
                  onChange={(e) => setMinMembers(e.target.value)}
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
                  onChange={(e) => setMaxMembers(e.target.value)}
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
          )}

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="caption2" fontWeight={500}>
              Start Date and Time
            </Typography>
            <Stack direction="row" spacing={0}>
              <TextField
                id="start-date"
                type="date"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: '140px', fontSize: '0.9rem', opacity: '0.8' }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <TextField
                id="start-time"
                type="time"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                sx={{ width: '140px', fontSize: '0.9rem', opacity: '0.8' }}
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </Stack>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="caption2" fontWeight={500}>
              End Date and Time
            </Typography>
            <Stack direction="row" spacing={0}>
              <TextField
                id="start-date"
                type="date"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: '140px', fontSize: '0.9rem', opacity: '0.8' }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <TextField
                id="start-time"
                type="time"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                sx={{ width: '140px', fontSize: '0.9rem', opacity: '0.8' }}
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
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
              Judging Mode
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                checked={judgingMode === 'likes'}
                onClick={() => setJudgingMode('likes')}
                icon={<Heart size={22} />}
                text="Likes"
                width="100px"
              />
              <IconButton
                checked={judgingMode === 'judge'}
                onClick={() => setJudgingMode('judge')}
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
              />
              <IconButton
                checked={judgingMode === 'hybrid'}
                onClick={() => setJudgingMode('hybrid')}
                icon={<User size={22} />}
                text="Hybrid"
                width="100px"
              />
            </Stack>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
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
              onChange={(e) => setLocation(e.target.value)}
            />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={5}>
            <Typography variant="caption2" fontWeight={500}>
              Private
            </Typography>
            <AntSwitch
              checked={isPrivate}
              onChange={() => setIsPrivate(!isPrivate)}
            />
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ paddingTop: '10px' }}
          >
            <Button
              variant="outlined"
              disableElevation
              sx={{
                width: '120px',
                borderRadius: '10px',
                textTransform: 'none',
              }}
              onClick={() => setCurrentPopUp(1)}
            >
              <ArrowLeft size={16} style={{ marginRight: '5px' }} />
              Back
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{
                width: '120px',
                borderRadius: '10px',
                textTransform: 'none',
                backgroundColor: isValidForm2() ? '#2B81F8' : '#85C2F6',
                '&:hover': {
                  backgroundColor: isValidForm2() ? '#2B81F8' : '#85C2F6',
                },
                '&:disabled': {
                  backgroundColor: '#85C2F6',
                  color: '#fff',
                },
              }}
              disabled={!isValidForm2()}
              type="submit"
            >
              <Typography variant="caption2" fontWeight={500}>
                Proceed
              </Typography>
            </Button>
          </Stack>
        </Stack>
      )}
    </FormProvider>
  );
};

export default MasterForm;
