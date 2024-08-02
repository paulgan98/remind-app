import { Add, Close } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Slide,
  SxProps,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { updateField } from '../utils/utils';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { trpc } from '../utils/trpc';

const sx: SxProps = {
  '& .MuiDialog-container': {
    height: 'unset',
    justifyContent: 'flex-end',
    animation: 'fadeIn 400ms ease',
  },
};

const Transition = React.forwardRef(function Transition(props: any, ref) {
  return (
    <Slide direction='left' timeout={400} ref={ref} {...props}>
      {props.children}
    </Slide>
  );
});

type CreateEventData = {
  userId: string;
  name: string;
  type: 'birthday' | 'custom';
  date: Date;
  duration: number | null;
  advanceReminder: Date | null;
  notes: string;
};

const defaultCreateEventData: CreateEventData = {
  userId: '66ac0103139d6782f9caae10',
  name: '',
  type: 'birthday',
  date: new Date(),
  duration: null,
  advanceReminder: new Date(),
  notes: '',
};

const CreateEventButtonOverlay: React.FC = () => {
  const trpcUtils = trpc.useUtils();
  const [openDialog, setOpenDialog] = useState(false);
  const [eventData, setEventData] = useState<CreateEventData>(
    defaultCreateEventData
  );

  const createEvent = trpc.createEvent.useMutation({
    onSuccess: () => {
      console.log('Event created');
      trpcUtils.getEventsByUserId.invalidate();
    },
  });

  const handleSubmit = async () => {
    if (eventData.date === undefined) {
      console.error('Date is required');
      return;
    }
    await createEvent.mutateAsync({
      ...eventData,
      date: eventData.date.toISOString(),
      advanceReminder: eventData.advanceReminder?.toISOString() || null,
    });
    setEventData(defaultCreateEventData);
  };

  return (
    <>
      <Button
        variant='outlined'
        startIcon={<Add />}
        onClick={() => {
          setOpenDialog(true);
        }}
      >
        Add Event
      </Button>
      <Dialog
        sx={sx}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            margin: 0,
            height: '100vh',
            width: '400px',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
        }}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <>New Event</>
          <IconButton size='small' onClick={() => setOpenDialog(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ overflowY: 'auto', flexShrink: 1 }}>
          <TextField
            required
            label='Name'
            value={eventData.name}
            onChange={(e) => {
              setEventData(updateField('name', e.target.value, eventData));
            }}
          />
          <TextField
            required
            select
            id='select-type'
            label='Type'
            value={eventData.type}
            onChange={(e) => {
              setEventData(updateField('type', e.target.value, eventData));
            }}
          >
            {[{ value: 'birthday' }, { value: 'custom' }].map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <DatePicker
            label='Date'
            value={dayjs(eventData.date)}
            onChange={(date) => {
              setEventData(
                updateField(
                  'date',
                  date ? new Date(date.toDate()) : null,
                  eventData
                )
              );
            }}
          />
          <DatePicker
            label='Advance Reminder'
            value={dayjs(eventData.advanceReminder)}
            onChange={(date) => {
              setEventData(
                updateField(
                  'advanceReminder',
                  date ? new Date(date.toDate()) : null,
                  eventData
                )
              );
            }}
          />
          <TextField
            multiline
            minRows={3}
            id='textfield-notes'
            label='Notes'
            value={eventData.notes}
            onChange={(e) => {
              setEventData(updateField('notes', e.target.value, eventData));
            }}
          />
          <DialogActions>
            <Button sx={{ width: '100%' }} onClick={handleSubmit}>
              Create Event
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateEventButtonOverlay;
