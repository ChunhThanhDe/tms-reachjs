import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Box,
  IconButton,
  Button,
  Modal,
  Typography,
  TextField,
  Grid,
  Tooltip,
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import { putEditCommand } from 'app/Services/PolicyServices';
import ListSelect from 'app/components/List/ListSelect';

const EditCommandModal = (props) => {
  const { row, setUpdatetable } = props;
  const [openModal, setOpenModal] = useState(false);
  const [command, setCommand] = useState(row.original.command);
  const [name, setName] = useState(row.original.name);
  const preCommand = row.original.command;
  const preName = row.original.name;
  const Noti = ['Reboot', 'Notification'];

  // const handleResetTable = () => {
  //   setResettable(false);
  // };
  const handleOpenEditDescription = () => {
    setOpenModal((prevState) => !prevState);
  };

  const handleCloseModalEditDescription = () => {
    setOpenModal((prevState) => !prevState);
  };

  const handleCommandChange = (command) => {
    setCommand(command);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEditCommand = async () => {
    if (preCommand === command && preName === name) {
      toast.info('Nothing changes');
      handleCloseModalEditDescription();
      return;
    }
    if (command === '' || name === '') {
      return;
    }
    let data = {
      id: row.original.id,
      command: command,
      name: name,
    };
    let response = await putEditCommand(data);
    console.log('editCommandResponse', response);
    if (response && response.status === 200) {
      toast.success(`Change command data success`);
      setUpdatetable(true);
      handleCloseModalEditDescription();
    } else if (response.statusCode === 500) {
      toast.error(`Error: `, response.message);
    }
  };

  return (
    <>
      <Tooltip arrow placement="bottom" title="Edit Policy">
        <IconButton onClick={handleOpenEditDescription}>
          <Edit color="primary" />
        </IconButton>
      </Tooltip>
      <Modal open={openModal} onClose={handleCloseModalEditDescription}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            minWidth: 400,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Edit
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ListSelect
                data={Noti}
                handleSelected={handleCommandChange}
                title={'Command'}
                defaultValue={command}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="name"
                label="Name"
                fullWidth
                margin="normal"
                onChange={(event) => handleNameChange(event)}
                value={name}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1rem',
            }}
          >
            <Button variant="contained" onClick={handleCloseModalEditDescription}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" onClick={handleEditCommand}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default EditCommandModal;
