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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { AddBox } from '@mui/icons-material';
import { postCreateNewPolicy } from 'app/Services/PolicyServices';
import ListSelect from 'app/components/List/ListSelect';

const NewPolicyModal = (props) => {
  const { setResettable } = props;
  const [openModal, setOpenModal] = useState(false);
  const [policyname, setPolicyname] = useState('');
  const [commandName, setCommandName] = useState('');
  const [action, setAction] = useState();
  const Noti = ['Reboot', 'Notification'];

  // const handleResetTable = () => {
  //   setResettable(false);
  // };
  const handleCreatePolicyClick = () => {
    setOpenModal((prevState) => !prevState);
  };

  const handleCloseModalNewPolicy = () => {
    setOpenModal((prevState) => !prevState);
    setCommandName('');
    setAction();
    setPolicyname('');
  };

  const handleCommandChange = (command) => {
    setCommandName(command);
  };
  const handleOnchangeInput = (e, id) => {
    switch (id) {
      case 'policyname':
        setPolicyname(e.target.value);
        break;
      case 'action':
        setAction(e.target.value);
        break;
      default:
        break;
    }
  };
  const checkValidateInput = () => {
    let check = true;
    const inputValues = {
      policyname: policyname,
      commandName: commandName,
      action: action,
    };
    const requiredInputs = ['policyname', 'action'];
    for (let i = 0; i < requiredInputs.length; i++) {
      if (!inputValues[requiredInputs[i]]) {
        check = false;
        setOpenModal(true);
        toast.info('Missing required parameter: ' + requiredInputs[i]);
        break;
      }
    }
    return check;
  };

  const handleAddNewListDevices = async () => {
    let isValid = checkValidateInput();
    if (isValid) {
      let newListDevices = {
        policyname: policyname,
        commandName: commandName,
        action: action,
      };
      let response = await postCreateNewPolicy(newListDevices);
      console.log('createList', response);
      if (response && response.statusCode === 500) {
        response.message.includes(`JSON parse error`)
          ? toast.error('Contact must be phone number')
          : toast.error(response.message);
      } else if (response && response.status === 200) {
        toast.success(`Create list devices success`);
        handleCloseModalNewPolicy();
        setResettable(true);
      } else {
        toast.error(response.message);
        handleCloseModalNewPolicy();
      }
    }
  };

  return (
    <>
      <Tooltip arrow placement="top" title="Add New Policy">
        <IconButton onClick={handleCreatePolicyClick}>
          <AddBox color="primary" />
        </IconButton>
      </Tooltip>
      <Modal open={openModal} onClose={handleCloseModalNewPolicy}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            minWidth: 400,
            width: '60%',
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Create a new Policy
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="policyname"
                label="Policy"
                fullWidth
                margin="normal"
                onChange={(e) => {
                  handleOnchangeInput(e, 'policyname');
                }}
                value={policyname}
              />
            </Grid>
            <Grid item xs={12}>
              <ListSelect
                data={Noti}
                handleSelected={handleCommandChange}
                title={'Command'}
                defaultValue={commandName}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  padding: '10px',
                  width: '100%',
                }}
              >
                Action
                <RadioGroup
                  row
                  name="row-radio-buttons-group"
                  onChange={(e) => {
                    handleOnchangeInput(e, 'action');
                  }}
                  defaultValue={action}
                >
                  <FormControlLabel value={1} control={<Radio />} label="Install" />
                  <FormControlLabel value={2} control={<Radio />} label="Uninstall" />
                  <FormControlLabel value={3} control={<Radio />} label="Run Command" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1rem',
            }}
          >
            <Button variant="contained" onClick={handleCloseModalNewPolicy}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" onClick={handleAddNewListDevices}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default NewPolicyModal;
