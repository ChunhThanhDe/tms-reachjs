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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { putEditCommand } from 'app/Services/PolicyServices';

const EditPolicyModal = (props) => {
  const { row, setUpdatetable } = props;
  const [openModal, setOpenModal] = useState(false);
  const [action, setAction] = useState(row.original.action);
  const [policyname, setPolicyname] = useState(row.original.policyname);
  const preAction = row.original.action;
  const prePolicyName = row.original.policyname;

  // const handleResetTable = () => {
  //   setResettable(false);
  // };
  const handleOpenEditDescription = () => {
    setOpenModal((prevState) => !prevState);
  };

  const handleCloseModalEditDescription = () => {
    setOpenModal((prevState) => !prevState);
  };

  const handlePolicyActionChange = (event) => {
    setAction(event.target.value);
  };

  const handlePolicyNameChange = (event) => {
    setPolicyname(event.target.value);
  };

  const handleEditPolicy = async () => {
    if (action === preAction && prePolicyName === policyname) {
      toast.info('Nothing changes');
      handleCloseModalEditDescription();
      return;
    }
    if (preAction === '') {
      return;
    }
    let data = {
      id: row.original.id,
      policyname: policyname,
      action: action,
    };
    let response = await putEditCommand(data);
    console.log('editPolicyResponse', response);
    if (response && response.status === 200) {
      toast.success(`Change list devices data success`);
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
              <TextField
                id="name"
                label="Policy Name"
                fullWidth
                margin="normal"
                onChange={(event) => handlePolicyNameChange(event)}
                value={policyname}
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
                  onChange={handlePolicyActionChange}
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
            <Button variant="contained" onClick={handleCloseModalEditDescription}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" onClick={handleEditPolicy}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default EditPolicyModal;
