import React, { useState, useEffect } from 'react';
import { Divider, InputBase, Paper, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { MaterialReactTable } from 'material-react-table';
// import { SimpleCard } from 'app/components';
// import { Card } from '@mui/material';
import { IconButton, Grid, Tooltip } from '@mui/material';
import { Close } from '@mui/icons-material';
import { getAPageDevice } from 'app/Services/DevicesServices';
import { convertDateTime } from 'app/components/ConvertTimeDate';

const DevicesTable = () => {
  const [arrDevices, setArrDevices] = useState([]);
  const [paramsPageDevice, setParamPageDevice] = useState({
    page: 1,
    limit: 10,
  });
  const [totalPage, setTotalPage] = useState();
  // const [active, setActive] = useState(true);
  const [updateTable, setUpdatetable] = useState(true);
  const [resetTable, setResettable] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleResetTableToDefault = async () => {
    let response = await getAPageDevice({ page: 1, limit: 10 });
    if (response.status === 200) {
      console.log(`default list: `, response.data.listResult);
      let arr = response.data.listResult;
      setArrDevices(arr);
      setResettable(true);
    }
  };

  const loadAPageDevice = async () => {
    let response = await getAPageDevice(paramsPageDevice);
    if (response.status === 200) {
      console.log(`Page List: `, response);
      let arr = response.data.listResult;
      setArrDevices(arr);
      setTotalPage(response.data.totalPage);
    }
  };

  const handleMoveToNextPage = () => {
    if (paramsPageDevice.page < totalPage) {
      setParamPageDevice({ limit: paramsPageDevice.limit, page: paramsPageDevice.page + 1 });
      setUpdatetable(true);
    }
  };
  const handleMoveToPrePage = () => {
    if (paramsPageDevice.page > 1) {
      setParamPageDevice({ limit: paramsPageDevice.limit, page: paramsPageDevice.page - 1 });
      setUpdatetable(true);
    }
  };
  const handleChangeSearchBar = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (updateTable) {
      loadAPageDevice();
      setUpdatetable(false);
    }
  }, [updateTable]);

  useEffect(() => {
    if (resetTable) {
      handleResetTableToDefault();
      setResettable(false);
    }
  }, [resetTable]);

  // useEffect(() => {
  //   console.log(arrDevices);
  // }, [updateTable]);

  //Column setup
  const columns = [
    {
      accessorKey: 'id',
      header: 'ID',
      size: 10,
    },
    {
      accessorKey: 'sn',
      header: 'Serial Number',
      size: 50,
    },
    {
      accessorKey: 'mac',
      header: 'MAC',
      size: 50,
    },
  ];
  //Column setup

  return (
    // <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
    // <SimpleCard>
    <MaterialReactTable
      columns={columns}
      data={arrDevices}
      initialState={{
        density: 'compact',
        columnVisibility: {
          id: false,
        },
        columnOrder: ['id', 'sn', 'MAC'],
      }}
      options={{ actionsColumnIndex: -1 }}
      enableColumnActions
      enableGlobalFilter={false}
      enableColumnFilters={false}
      renderTopToolbarCustomActions={() => (
        <>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              id="search"
              type="search"
              label="Search"
              variant="standard"
              value={searchTerm}
              onChange={handleChangeSearchBar}
              inputProps={{ 'aria-label': 'Searching' }}
              edge="end"
            />
            <Tooltip arrow placement="right" title="Search">
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search" helperText="Search">
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <Tooltip arrow placement="right" title="Reset table to default">
              <IconButton
                color="warning"
                sx={{ p: '10px' }}
                aria-label="directions"
                onClick={handleResetTableToDefault}
              >
                <Close />
              </IconButton>
            </Tooltip>
          </Paper>
          {/* <Select size="normal" defaultValue="today">
            <MenuItem value="now">Now</MenuItem>
            <MenuItem value="today">Today</MenuItem>
            <MenuItem value="last_7_days">Last 7 days</MenuItem>
            <MenuItem value="last_30_days">Last 30 days</MenuItem>
          </Select> */}
        </>
      )}
      renderBottomToolbarCustomActions={() => (
        <Grid item xs={12} sm={6}>
          Page {paramsPageDevice.page} of {totalPage}
        </Grid>
      )}
      renderDetailPanel={({ row }) => (
        <Box
          sx={{
            display: 'grid',
            margin: 'auto',
            gridTemplateColumns: '1fr 1fr',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography fontSize={'15px'}>
            Created Date: {convertDateTime(row.original.createdDate)}
          </Typography>
          <Typography fontSize={'15px'}>
            Modified Date: {convertDateTime(row.original.modifiedDate)}
          </Typography>
        </Box>
      )}
      muiTablePaginationProps={{
        rowsPerPageOptions: [10],
        nextIconButtonProps: {
          disabled: !(paramsPageDevice.page < totalPage),
          onClick: handleMoveToNextPage,
        },
        backIconButtonProps: {
          disabled: !(paramsPageDevice.page > 1),
          onClick: handleMoveToPrePage,
        },
      }}
    />
    // </SimpleCard>
    // </Card>
  );
};

export default DevicesTable;
