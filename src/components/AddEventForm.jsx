import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Button, TextField, Typography, MenuItem } from '@mui/material';
import {
  CloudArrowUp,
  ArrowRight,
  MapPin,
  GlobeHemisphereEast,
} from 'phosphor-react';
import FormProvider from './FormProvider';
import IconButton from './IconButton';
import FileUploadButton from './FileUploadButton';

const eventTypes = [
  {
    value: 'hackathon',
    label: 'Hackathon',
  },
  {
    value: 'workshop',
    label: 'Workshop',
  },
  {
    value: 'seminar',
    label: 'Seminar',
  },
  {
    value: 'webinar',
    label: 'Webinar',
  },
];

const AddEventForm = ({ handleClose }) => {
  const eventData = useSelector((state) => state.eventData);
  const dispatch = useDispatch();

  const [eventTitle, setEventTitle] = useState('');
  const [eventDesc, setEventDesc] = useState('');
  const [eventImage, setEventImage] = useState('');
  const [eventBannerImage, setEventBannerImage] = useState('');
  const [eventMode, setEventMode] = useState('online');
  const [eventType, setEventType] = useState(null);

  const onSubmit = () => {
    const newEvent = {
      title: eventTitle,
      description: eventDesc,
      image: eventImage,
      bannerImage: eventBannerImage,
      mode: eventMode,
      type: eventType,
    };
    dispatch({ type: 'SET_EVENT_DATA', payload: newEvent });
    handleClose();
  };

  return (
    <FormProvider onSubmit={onSubmit}>
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
          <FileUploadButton
            text="Upload Files"
            icon={<CloudArrowUp size={16} />}
            width="180px"
            file={eventImage}
            setFile={setEventImage}
          />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="caption2" fontWeight={500}>
            Upload Banner Image
          </Typography>
          <Button
            variant="outlined"
            disableElevation
            sx={{
              width: '180px',
              borderRadius: '10px',
              textTransform: 'none',
            }}
          >
            <Typography variant="caption2" sx={{ paddingRight: '5px' }}>
              Upload Files
            </Typography>
            <CloudArrowUp size={16} />
          </Button>
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
            }}
            onClick={() => {
              dispatch({ type: 'SET_EVENT_DATA', payload: eventData });
            }}
            type="submit"
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
    </FormProvider>
  );
};

export default AddEventForm;
