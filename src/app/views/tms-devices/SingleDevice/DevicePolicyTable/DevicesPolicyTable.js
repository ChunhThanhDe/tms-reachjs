import React, { useState, useEffect } from 'react';
import { Box, Card, ThemeProvider, Typography, Tooltip, IconButton } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import { columns } from './ColumnSetup';
import { getAPageDevicePolicy } from 'app/Services/DevicesServices';
import BottomBarSetup from './BottomBarSetup';
import tableTheme from 'app/components/Table/TableTheme';
import TopBarSetup from './TopBarSetup';
import { toast } from 'react-toastify';
import InfoIcon from '@mui/icons-material/Info';
import { convertDateTime } from 'app/components/ConvertTimeDate';
import { NavLink } from 'react-router-dom';

// import { NavLink } from 'react-router-dom';

const DevicePolicyTable = (props) => {
  const { deviceID } = props;
  const [arrApps, setArrApps] = useState([]);
  const [paramsPageDeviceApps, setParamPageDeviceApps] = useState({
    page: 1,
    limit: 5,
    status: 3,
  });
  const [totalPage, setTotalPage] = useState();
  const [updateTable, setUpdateTable] = useState(true);
  const [resetTable, setResetTable] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);
  const [status, setStatus] = useState(3);

  const handleLoadAPageDevice = async () => {
    let response = await getAPageDevicePolicy(paramsPageDeviceApps, deviceID);
    if (response.status === 200) {
      // console.log(`Page List Policy: `, response);
      if (response.data.totalElement === null && searchTerm !== null) {
        toast.error('No elements match');
      }
      let arr = response.data.listResult;
      setArrApps(arr);
      setTotalPage(response.data.totalPage);
      setUpdateTable(false);
    }
  };

  const handleMoveToNextPage = () => {
    if (paramsPageDeviceApps.page < totalPage) {
      setParamPageDeviceApps({
        limit: paramsPageDeviceApps.limit,
        page: paramsPageDeviceApps.page + 1,
      });
      setUpdateTable(true);
    }
  };
  const handleMoveToPrePage = () => {
    if (paramsPageDeviceApps.page > 1) {
      setParamPageDeviceApps({
        limit: paramsPageDeviceApps.limit,
        page: paramsPageDeviceApps.page - 1,
      });
      setUpdateTable(true);
    }
  };

  const handleResetTable = () => {
    setResetTable(true);
    setSearchTerm('');
    setStatus(3);
    setParamPageDeviceApps({ page: 1, limit: 5, status: 3 });
    // console.log('resetTable');
  };
  const handleSearchMode = () => {
    setParamPageDeviceApps({ ...paramsPageDeviceApps, search: searchTerm });
    setUpdateTable(true);
  };

  useEffect(() => {
    if (resetTable) {
      setResetTable(false);
      setUpdateTable(true);
    }
    if (updateTable) {
      handleLoadAPageDevice();
    }
  }, [resetTable, updateTable]);

  useEffect(() => {
    setParamPageDeviceApps({ ...paramsPageDeviceApps, status: status });
    setUpdateTable(true);
  }, [status]);

  return (
    <Card>
      <ThemeProvider theme={tableTheme}>
        <MaterialReactTable
          columns={columns}
          data={arrApps}
          options={{ actionsColumnIndex: -1 }}
          enableExpanding
          enableGlobalFilter={false}
          enableColumnFilters={false}
          enableColumnActions={false}
          enablePagination={false}
          enableSorting={false}
          muiTableBodyRowProps={{ hover: false }}
          defaultColumn={{
            maxSize: 100,
            minSize: 10,
            size: 80, //default size is usually 180
          }}
          initialState={{
            density: 'comfortable',
            columnVisibility: {
              id: false,
            },
            columnOrder: [
              'id',
              'policyName',
              'action',
              'status',
              'mrt-row-expand',
              'mrt-row-actions',
            ],
          }}
          renderRowActions={({ row, table, closeMenu }) => [
            <Box>
              <Tooltip arrow placement="bottom" title="Detail">
                <NavLink
                  to={`/tms-policy/policy-management/policy?id=${row.original.id}&pn=${row.original.policyname}`}
                >
                  <IconButton>
                    <InfoIcon color="primary" />
                  </IconButton>
                </NavLink>
              </Tooltip>
            </Box>,
          ]}
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
          renderBottomToolbarCustomActions={() => (
            <BottomBarSetup
              paramsPageDevices={paramsPageDeviceApps}
              totalPage={totalPage}
              handleMoveToPrePage={handleMoveToPrePage}
              handleMoveToNextPage={handleMoveToNextPage}
            />
          )}
          renderTopToolbarCustomActions={() => (
            <TopBarSetup
              status={status}
              setStatus={setStatus}
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

export default DevicePolicyTable;
