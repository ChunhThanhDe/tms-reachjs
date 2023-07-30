import React, { useState, useEffect } from 'react';
import { Box, Card, IconButton, ThemeProvider, Tooltip, Typography } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import BottomBarSetup from './BottomBarSetup';
import TopBarSetup from './TopBarSetup';
import { toast } from 'react-toastify';
import EditPolicyModal from '../Modal/EditPolicyModal';
import tableTheme from 'app/components/Table/TableTheme';
import InfoIcon from '@mui/icons-material/Info';
import { getPolicy, putPolicyStatus } from 'app/Services/PolicyServices';
import { NavLink } from 'react-router-dom';
import { Pause, PlayArrow, Stop } from '@mui/icons-material';
import EditPolicyAPK from '../Modal/EditPolicyApk/EditPolicyAPK';
import { convertDateTime } from 'app/components/ConvertTimeDate';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import EditPolicyDevices from '../Modal/EditPolicyDevices/EditPolicyDevices';

const PolicyManageTable = () => {
  const [arrPolicy, setArrPolicy] = useState([]);
  const [paramsPagePolicy, setParamPagePolicy] = useState({
    page: 1,
    limit: 10,
    policyname: null,
  });
  const [totalPage, setTotalPage] = useState();
  const [updateTable, setUpdateTable] = useState(true);
  const [resetTable, setResetTable] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLoadAPagePolicy = async () => {
    console.log(paramsPagePolicy);
    let response = await getPolicy(paramsPagePolicy);
    console.log(`Page List: `, response);
    if (response.status === 200) {
      // console.log(`Page List: `, response);
      if (response.data.totalElement === null && searchTerm !== null) {
        toast.error('No elements match');
      }
      let arr = response.data.listResult;
      setArrPolicy(arr);
      setTotalPage(response.data.totalPage);
    }
  };

  const handleMoveToNextPage = () => {
    if (paramsPagePolicy.page < totalPage) {
      setParamPagePolicy({ limit: paramsPagePolicy.limit, page: paramsPagePolicy.page + 1 });
      setUpdateTable(true);
    }
  };
  const handleMoveToPrePage = () => {
    if (paramsPagePolicy.page > 1) {
      setParamPagePolicy({ limit: paramsPagePolicy.limit, page: paramsPagePolicy.page - 1 });
      setUpdateTable(true);
    }
  };

  const handleResetTable = () => {
    setResetTable(true);
    setSearchTerm('');
    // console.log('resetTable');
  };
  const handleSearchMode = () => {
    setParamPagePolicy({ ...paramsPagePolicy, policyname: searchTerm });
    setUpdateTable(true);
  };
  const handlePolicyAction = async (id, status) => {
    console.log(id, status);
    let res = await putPolicyStatus(id, status);
    if (res.status === 200) {
      // console.log(res);
      setUpdateTable(true);
    } else {
      toast.error(res.message);
    }
  };

  useEffect(() => {
    if (resetTable) {
      setParamPagePolicy({ page: 1, limit: 10, policyname: null });
      setResetTable(false);
      setUpdateTable(true);
    } else if (updateTable) {
      console.log('change status');
      handleLoadAPagePolicy();
      setUpdateTable(false);
    }
  }, [resetTable, updateTable]);

  const columns = [
    {
      accessorKey: 'id',
      header: 'ID',
      size: 20,
      enableEditing: false,
      enableFilters: false,
      muiTableHeadCellProps: {
        align: 'center',
      },
      muiTableBodyCellProps: {
        align: 'center',
      },
      Cell: (row) => <span>{row.row.original.id}</span>,
    },
    {
      accessorKey: 'policyname',
      header: 'Policy',
      enableEditing: false,
      enableSorting: false,
    },
    {
      accessorKey: 'commandName',
      header: 'Command',
      enableEditing: false,
      enableSorting: false,
    },
    {
      accessorKey: 'action',
      header: 'Action',
      enableEditing: false,
      enableSorting: false,
      Cell: (row) => (
        <Box>
          {row.row.original.action === 1
            ? 'Install'
            : row.row.original.action === 2
            ? 'Uninstall'
            : 'Run command'}
        </Box>
      ),
    },
    {
      accessorKey: 'status',
      header: 'Staus',
      enableEditing: false,
      enableSorting: false,
      Cell: (row) => (
        <Box>
          {row.row.original.status === 0 ? (
            <Tooltip arrow placement="top" title="">
              <NotStartedIcon color="primary" />
            </Tooltip>
          ) : row.row.original.status === 1 ? (
            <Tooltip arrow placement="top" title="Running">
              <PlayCircleIcon color="success" />
            </Tooltip>
          ) : row.row.original.status === 2 ? (
            <Tooltip arrow placement="top" title="Pause">
              <PauseCircleIcon color="warning" />
            </Tooltip>
          ) : (
            <Tooltip arrow placement="top" title="Stop">
              <StopCircleIcon color="error" />
            </Tooltip>
          )}
        </Box>
      ),
    },
    {
      Header: 'Policy Action',
      accessorKey: 'policyAction',
      muiTableHeadCellProps: {
        align: 'left',
      },
      muiTableBodyCellProps: {
        align: 'center',
      },
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Tooltip
            arrow
            placement="top"
            title={row.original.status === 2 ? 'Continue' : 'Run'}
            disabled={
              !(row.original.status === 0 || row.original.status === 3 || row.original.status === 2)
            }
          >
            <IconButton
              color={
                row.original.status === 0 || row.original.status === 3 || row.original.status === 2
                  ? 'primary'
                  : 'inherit'
              }
              disabled={
                !(
                  row.original.status === 0 ||
                  row.original.status === 3 ||
                  row.original.status === 2
                )
              }
              onClick={() => {
                handlePolicyAction(row.original.id, 1);
              }}
            >
              {row.original.status === 2 ? <SlowMotionVideoIcon /> : <PlayArrow />}
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="top" title="Pause" disabled={row.original.status !== 1}>
            <IconButton
              color={row.original.status === 1 ? 'warning' : 'inherit'}
              disabled={row.original.status !== 1}
              onClick={() => {
                handlePolicyAction(row.original.id, 2);
              }}
            >
              <Pause />
            </IconButton>
          </Tooltip>
          <Tooltip
            arrow
            placement="top"
            title="Stop"
            disabled={!(row.original.status === 1 || row.original.status === 2)}
          >
            <IconButton
              color={row.original.status === 1 || row.original.status === 2 ? 'error' : 'inherit'}
              disabled={!(row.original.status === 1 || row.original.status === 2)}
              onClick={() => {
                handlePolicyAction(row.original.id, 3);
              }}
            >
              <Stop />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Card>
      <ThemeProvider theme={tableTheme}>
        <MaterialReactTable
          columns={columns}
          data={arrPolicy}
          options={{ actionsColumnIndex: -1 }}
          enableExpanding
          enableGlobalFilter={false}
          enableColumnFilters={false}
          enableColumnActions={false}
          enablePagination={false}
          enableSorting={false}
          muiTableBodyRowProps={{ hover: false }}
          defaultColumn={{
            maxSize: 120,
            minSize: 10,
            size: 100, //default size is usually 180
          }}
          initialState={{
            columnVisibility: {
              id: false,
            },
            columnOrder: [
              'id',
              'policyname',
              'commandName',
              'action',
              'status',
              'mrt-row-expand',
              'mrt-row-actions',
              'policyAction',
            ],
          }}
          renderRowActionMenuItems={({ row, table, closeMenu }) => [
            <EditPolicyModal row={row} setUpdatetable={setUpdateTable} />,
            <EditPolicyAPK row={row} setUpdatetable={setUpdateTable} />,
            <EditPolicyDevices row={row} setUpdatetable={setUpdateTable} />,
            <Tooltip arrow placement="bottom" title="Detail">
              <NavLink
                to={`/tms-policy/policy-management/policy?id=${row.original.id}&pn=${row.original.policyname}`}
              >
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </NavLink>
            </Tooltip>,
          ]}
          displayColumnDefOptions={{ 'mrt-row-actions': { size: 300, header: '' } }}
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
              <Typography fontSize={'15px'}>Created By: {row.original.createdBy}</Typography>
              <Typography fontSize={'15px'}>
                Modified Date: {convertDateTime(row.original.modifiedDate)}
              </Typography>
              <Typography fontSize={'15px'}>Modified By: {row.original.modifiedBy}</Typography>
            </Box>
          )}
          renderBottomToolbarCustomActions={() => (
            <BottomBarSetup
              paramsPageDevices={paramsPagePolicy}
              totalPage={totalPage}
              handleMoveToPrePage={handleMoveToPrePage}
              handleMoveToNextPage={handleMoveToNextPage}
            />
          )}
          renderTopToolbarCustomActions={() => (
            <TopBarSetup
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setResettable={setResetTable}
              handleSearchMode={handleSearchMode}
              handleResetTable={handleResetTable}
            />
          )}
        />
      </ThemeProvider>
    </Card>
  );
};

export default PolicyManageTable;
