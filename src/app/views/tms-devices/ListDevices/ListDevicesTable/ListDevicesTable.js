import React, { useState, useEffect } from 'react';
import { Box, Card, ThemeProvider, Typography } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import { columns } from './ColumnSetup';
import { getAPageListDevices } from 'app/Services/DevicesServices';
import BottomBarSetup from './BottomBarSetup';
import TopBarSetup from './TopBarSetup';
import { toast } from 'react-toastify';
import EditListDeviceModal from '../Modal/EditListDevicesModal';
import tableTheme from 'app/components/Table/TableTheme';
import { convertDateTime } from 'app/components/ConvertTimeDate';
import AddDeviceToListDevice from '../Modal/AddDeviceToListDevice/AddDeviceToListDevice';

const ListDevicesTable = () => {
  const [arrDevices, setArrDevices] = useState([]);
  const [paramsPageDevices, setParamPageDevices] = useState({
    page: 1,
    limit: 10,
    name: null,
  });
  const [totalPage, setTotalPage] = useState();
  const [updateTable, setUpdateTable] = useState(true);
  const [resetTable, setResetTable] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLoadAPageDevice = async () => {
    // console.log(paramsPageDevices);
    let response = await getAPageListDevices(paramsPageDevices);
    console.log(`Page List: `, response);
    if (response.status === 200) {
      // console.log(`Page List: `, response);
      if (response.data.totalElement === null && searchTerm !== null) {
        toast.error('NO elemant match');
      }
      let arr = response.data.listResult;
      setArrDevices(arr);
      setTotalPage(response.data.totalPage);
    }
  };

  const handleMoveToNextPage = () => {
    if (paramsPageDevices.page < totalPage) {
      setParamPageDevices({ limit: paramsPageDevices.limit, page: paramsPageDevices.page + 1 });
      setUpdateTable(true);
    }
  };
  const handleMoveToPrePage = () => {
    if (paramsPageDevices.page > 1) {
      setParamPageDevices({ limit: paramsPageDevices.limit, page: paramsPageDevices.page - 1 });
      setUpdateTable(true);
    }
  };

  const handleResetTable = () => {
    setResetTable(true);
    setSearchTerm('');
    // console.log('resetTable');
  };
  const handleSearchMode = () => {
    setParamPageDevices({ ...paramsPageDevices, name: searchTerm });
    setUpdateTable(true);
  };

  useEffect(() => {
    if (resetTable) {
      setParamPageDevices({ page: 1, limit: 10, name: null });
      setResetTable(false);
      setUpdateTable(true);
    } else if (updateTable) {
      console.log('change status');
      handleLoadAPageDevice();
      setUpdateTable(false);
    }
  }, [resetTable, updateTable]);

  // useEffect(() => {
  //   console.log(arrUsers);
  // }, [updateTable]);

  return (
    <Card>
      <ThemeProvider theme={tableTheme}>
        <MaterialReactTable
          columns={columns}
          data={arrDevices}
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
              'name',
              'location',
              'description',
              'mrt-row-expand',
              'mrt-row-actions',
            ],
          }}
          renderRowActionMenuItems={({ row, table, closeMenu }) => [
            <>
              <Box flexBasis="25%">
                <EditListDeviceModal row={row} setUpdatetable={setUpdateTable} />
              </Box>
              <Box flexBasis="25%">
                <AddDeviceToListDevice row={row} />
              </Box>
            </>,
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
              <Typography fontSize={'15px'}>Created By: {row.original.createdBy}</Typography>
              <Typography fontSize={'15px'}>
                Modified Date: {convertDateTime(row.original.modifiedDate)}
              </Typography>
              <Typography fontSize={'15px'}>Modified By: {row.original.modifiedBy}</Typography>
            </Box>
          )}
          renderBottomToolbarCustomActions={() => (
            <BottomBarSetup
              paramsPageDevices={paramsPageDevices}
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

export default ListDevicesTable;
