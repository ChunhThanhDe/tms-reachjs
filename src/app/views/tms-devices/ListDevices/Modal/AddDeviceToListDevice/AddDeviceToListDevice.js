import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Modal,
  // Tooltip,
  Typography,
} from '@mui/material';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import { Close } from '@mui/icons-material';
import DeviceManageTable from './TableDevices/DevicesManageTable';
import DevicesInListDeviceTable from './DevicesInListDeviceTable/DevicesInListDeviceTable';

const AddDeviceToListDevice = (props) => {
  const { row } = props;
  const [openModal, setOpenModal] = useState(false);
  const [addDevicesSuccess, setAddDevicesSuccess] = useState(false);

  const handleOpenEditDescription = () => {
    setOpenModal((prevState) => !prevState);
  };
  const handleAddDeviceSuccess = () => {
    setAddDevicesSuccess(true);
  };
  const handleCloseModal = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <Button onClick={handleOpenEditDescription}>
        <QueuePlayNextIcon color="primary" />
        <Typography
          style={{ marginLeft: '8px', color: 'black', whiteSpace: 'nowrap' }}
          textTransform="none"
        >
          Add devices to list device
        </Typography>
      </Button>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '95%',
            minHeight: '35%',
            maxHeight: '95%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 0,
            overflow: 'auto',
          }}
        >
          <Box sx={{ p: 1 }}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {' '}
              <Typography
                variant="h6"
                align="left"
                fontWeight="fontWeightBold"
                fontSize={22}
                sx={{ marginTop: '15px', marginLeft: '10px' }}
              >
                Add devices to list devices
              </Typography>
              <IconButton type="button">
                <Close color="inherit" onClick={handleCloseModal} />
              </IconButton>
            </Box>
            <DeviceManageTable
              id={row.original.id}
              handleAddDeviceSuccess={handleAddDeviceSuccess}
            />
            <br />
            <Box sx={{ width: '100%', height: '100%', bgcolor: 'background.paper' }}>
              <DevicesInListDeviceTable
                id={row.original.id}
                addDevicesSuccess={addDevicesSuccess}
                setAddDevicesSuccess={setAddDevicesSuccess}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddDeviceToListDevice;
