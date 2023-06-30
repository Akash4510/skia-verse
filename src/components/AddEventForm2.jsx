import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Button, TextField, Typography } from '@mui/material';
import { ArrowLeft, User, Users, Heart } from 'phosphor-react';
import { gavel } from '../constants/images';
import FormProvider from './FormProvider';
import IconButton from './IconButton';
import AntSwitch from './AntSwitch';

const AddEventForm2 = ({ handleClose }) => {
  const eventData = useSelector((state) => state.eventData);
  const dispatch = useDispatch();

  const [participationType, setParticipationType] = useState('group');
  const [minMembers, setMinMembers] = useState(1);
  const [maxMembers, setMaxMembers] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [judgingMode, setJudgingMode] = useState('likes');
  const [location, setLocation] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);

  const onSubmit = () => {
    // const newEvent = {};
    // dispatch({ type: 'SET_EVENT_DATA', payload: newEvent });
    // handleClose();
    console.log('submitted last part of form');
    handleClose();
  };

  return (
    <FormProvider onSubmit={onSubmit}>
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
            onClick={handleClose}
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
            }}
            onClick={() => {
              dispatch({ type: 'SET_EVENT_DATA', payload: eventData });
            }}
            type="submit"
          >
            <Typography variant="caption2" fontWeight={500}>
              Proceed
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default AddEventForm2;
