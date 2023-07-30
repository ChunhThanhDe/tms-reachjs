import React, { useState, useEffect } from 'react';
import { Typography, MenuItem as Box, Card } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import { columns } from './ColumnSetup';
import { toast } from 'react-toastify';
import { ThemeProvider } from '@mui/material';
import tableTheme from 'app/components/Table/TableTheme';
import ChangeUserPasswordDialog from '../Modal/ChangeUserPasswordDialog';
import DeleteUserDialog from '../Modal/DeleteUserDialog';
import { getAPageUser } from 'app/Services/User_Auth_Service';
import BottomBarSetup from './BottomBarSetup';
import EditUserModal from '../Modal/EditUserModal';
import TopBarSetup from './TopBarSetup';
import UserListDeviceModal from '../Modal/UserListDeviceModal';
import { convertDateTime } from 'app/components/ConvertTimeDate';

const UserManageTable = () => {
  const [arrUsers, setArrUsers] = useState([]);
  const [paramsPageUser, setParamPageUser] = useState({
    page: 1,
    limit: 10,
    active: 1,
    search: null,
  });
  const [totalPage, setTotalPage] = useState();
  const [updateTable, setUpdateTable] = useState(true);
  const [resetTable, setResetTable] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [color, setColor] = useState('success');

  const handleLoadAPageUser = async () => {
    console.log(paramsPageUser);
    let response = await getAPageUser(paramsPageUser);
    if (response.status === 200) {
      console.log(`Page List: `, response);
      if (response.data.totalElement === null) {
        if (searchTerm !== null) {
          toast.error('No element matchs');
        } else {
          toast.error('Nothing to show');
        }
      }
      let arr = response.data.listResult;
      setArrUsers(arr);
      setTotalPage(response.data.totalPage);
    }
  };

  const handleMoveToNextPage = () => {
    if (paramsPageUser.page < totalPage) {
      setParamPageUser({ limit: paramsPageUser.limit, page: paramsPageUser.page + 1 });
      setUpdateTable(true);
    }
  };
  const handleMoveToPrePage = () => {
    if (paramsPageUser.page > 1) {
      setParamPageUser({ limit: paramsPageUser.limit, page: paramsPageUser.page - 1 });
      setUpdateTable(true);
    }
  };

  const handleChangeStatus = () => {
    if (color === 'success') {
      setColor('error');
      setParamPageUser({ ...paramsPageUser, active: 0 });
      setUpdateTable(true);
    }
    if (color === 'error') {
      setColor('disabled');
      setParamPageUser({ ...paramsPageUser, active: null });
      setUpdateTable(true);
    }
    if (color === 'disabled') {
      setColor('success');
      setParamPageUser({ ...paramsPageUser, active: 1 });
      setUpdateTable(true);
    }
  };

  const handleResetTable = () => {
    setResetTable(true);
    setSearchTerm('');
    setColor('success');
    // console.log('resetTable');
  };
  const handleSearchMode = () => {
    setParamPageUser({ ...paramsPageUser, search: searchTerm });
    setUpdateTable(true);
  };

  //Edit user

  useEffect(() => {
    if (resetTable) {
      setParamPageUser({ page: 1, limit: 10, active: 1, search: null });
      setResetTable(false);
      setUpdateTable(true);
    } else if (updateTable) {
      console.log('change status');
      handleLoadAPageUser();
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
          data={arrUsers}
          options={{ actionsColumnIndex: -1 }}
          enableExpanding
          enableEditing={false}
          enableBottomToolbar={true}
          enableGlobalFilter={false}
          enableColumnFilters={false}
          enableColumnActions={false}
          enablePagination={false}
          enableSorting={false}
          expanded={true}
          muiTableBodyRowProps={{ hover: false }}
          defaultColumn={{
            maxSize: 120,
            minSize: 10,
            size: 100, //default size is usually 180
          }}
          initialState={{
            density: 'compact',
            columnVisibility: {
              id: false,
            },
            columnOrder: [
              'id',
              'role-state',
              'name',
              'username',
              'email',
              'company',
              'contact',
              'mrt-row-expand',
              'mrt-row-actions',
            ],
          }}
          renderRowActionMenuItems={({ row }) => [
            <Box>
              <EditUserModal row={row} setUpdatetable={setUpdateTable} />
              <ChangeUserPasswordDialog row={row} />
              <DeleteUserDialog row={row} setUpdatetable={setUpdateTable} />
              <UserListDeviceModal row={row} />
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
              <Typography fontSize={'15px'}>Created By: {row.original.createdBy}</Typography>
              <Typography fontSize={'15px'}>
                Modified Date: {convertDateTime(row.original.modifiedDate)}
              </Typography>
              <Typography fontSize={'15px'}>Modified By: {row.original.modifiedBy}</Typography>
            </Box>
          )}
          renderBottomToolbarCustomActions={() => (
            <BottomBarSetup
              paramsPageUser={paramsPageUser}
              totalPage={totalPage}
              handleMoveToPrePage={handleMoveToPrePage}
              handleMoveToNextPage={handleMoveToNextPage}
            />
          )}
          renderTopToolbarCustomActions={() => (
            <TopBarSetup
              searchTerm={searchTerm}
              color={color}
              setSearchTerm={setSearchTerm}
              setResettable={setResetTable}
              handleSearchMode={handleSearchMode}
              handleChangeStatus={handleChangeStatus}
              handleResetTable={handleResetTable}
            />
          )}
        />
        {/* User table*/}
      </ThemeProvider>
    </Card>
  );
};

export default UserManageTable;
