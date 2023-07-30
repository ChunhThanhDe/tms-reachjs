import { Box, IconButton, Tooltip } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
// import ChangeUserPasswordDialog from '../Modal/ChangeUserPasswordDialog';
// import DeleteUserDialog from '../Modal/DeleteUserDialog';

export const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 20,
    enableEditing: false,
    enableFilters: false,
    // muiTableHeadCellProps: {
    //   align: 'center',
    // },
    // muiTableBodyCellProps: {
    //   align: 'center',
    // },
    Cell: (row) => <span>{row.row.original.id}</span>,
  },
  {
    accessorKey: 'role-state',
    header: 'Role/State',
    enableEditing: false,
    enableSorting: false,
    // muiTableHeadCellProps: {
    //   align: 'center',
    // },
    // muiTableBodyCellProps: {
    //   align: 'center',
    // },
    enableColumnFilter: false,
    size: 50,
    Cell: (row) => (
      <Box>
        <Tooltip
          placement="left"
          title={
            row.row.original.rulename[0] === `ROLE_USER` && !row.row.original.rulename[1]
              ? 'User'
              : 'Admin'
          }
        >
          <IconButton>
            {row.row.original.rulename[0] === `ROLE_USER` && !row.row.original.rulename[1] ? (
              <PersonIcon color={row.row.original.active === true ? 'success' : 'error'} />
            ) : (
              <AdminPanelSettingsIcon
                color={row.row.original.active === true ? 'success' : 'error'}
              />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    ),
  },
  {
    accessorKey: 'name',
    header: 'Name',
    // muiTableHeadCellProps: {
    //   align: 'center',
    // },
    // muiTableBodyCellProps: {
    //   align: 'center',
    // },
    muiTableBodyCellEditTextFieldProps: {
      required: true,
    },
  },
  {
    accessorKey: 'username',
    header: 'Username',
    enableEditing: false,
    // muiTableHeadCellProps: {
    //   align: 'center',
    // },
    // muiTableBodyCellProps: {
    //   align: 'center',
    // },
  },
  {
    accessorKey: 'email',
    header: 'Email',
    // muiTableHeadCellProps: {
    //   align: 'center',
    // },
    // muiTableBodyCellProps: {
    //   align: 'center',
    // },
    muiTableBodyCellEditTextFieldProps: {
      required: true,
    },
  },
  {
    accessorKey: 'company',
    header: 'Company',
    // muiTableHeadCellProps: {
    //   align: 'center',
    // },
    // muiTableBodyCellProps: {
    //   align: 'center',
    // },
    muiTableBodyCellEditTextFieldProps: {
      required: true,
    },
  },
  {
    accessorKey: 'contact',
    header: 'Contact',
    // muiTableHeadCellProps: {
    //   align: 'center',
    // },
    // muiTableBodyCellProps: {
    //   align: 'center',
    // },
    muiTableBodyCellEditTextFieldProps: {
      required: true,
      type: 'number',
    },
  },
  // {
  //   accessorKey: 'createdBy',
  //   header: 'Create by',
  //   muiTableHeadCellProps: {
  //     align: 'center',
  //   },
  //   muiTableBodyCellProps: {
  //     align: 'center',
  //   },
  //   enableEditing: false,
  // },
  // {
  //   accessorKey: 'createdDate',
  //   header: 'Create date',
  //   muiTableHeadCellProps: {
  //     align: 'center',
  //   },
  //   muiTableBodyCellProps: {
  //     align: 'center',
  //   },
  //   enableEditing: false,
  // },
  // {
  //   accessorKey: 'modifiedBy',
  //   header: 'Modified by',
  //   enableEditing: false,
  // },
  // {
  //   accessorKey: 'modifiedDate',
  //   header: 'Modified date',
  //   muiTableHeadCellProps: {
  //     align: 'center',
  //   },
  //   muiTableBodyCellProps: {
  //     align: 'center',
  //   },
  //   enableEditing: false,
  // },
];
