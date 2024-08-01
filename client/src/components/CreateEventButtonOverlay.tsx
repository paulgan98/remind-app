import { Add, Close } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  MenuItem,
  Slide,
  SxProps,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { updateField } from '../utils/utils';
import { DatePicker } from '@mui/x-date-pickers';

const sx: SxProps = {
  '& .MuiDialog-container': {
    height: 'unset',
    justifyContent: 'flex-end',
    animation: 'fadeIn 400ms ease',
  },
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" timeout={400} ref={ref} {...props} />;
});

const CreateEventButtonOverlay: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [eventData, setEventData] = useState({});

  const handleSubmit = () => {
    console.log(eventData);
    setEventData({});
  };

  return (
    <>
      <Button
        variant="outlined"
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
          <IconButton size="small" onClick={() => setOpenDialog(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ overflowY: 'auto', flexShrink: 1 }}>
          <TextField
            required
            label="Name"
            onChange={(e) => {
              setEventData(updateField('name', e.target.value, eventData));
            }}
          />
          <TextField
            required
            select
            id="select-type"
            label="Type"
            defaultValue="birthday"
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
            label="Date"
            onChange={(date) => {
              setEventData(
                updateField(
                  'date',
                  new Date(date?.month, date?.date, date?.year),
                  eventData
                )
              );
            }}
          />
          <DatePicker label="Advance Reminder" />
          <TextField
            multiline
            minRows={3}
            id="textfield-notes"
            label="Notes"
            // defaultValue="birthday"
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
