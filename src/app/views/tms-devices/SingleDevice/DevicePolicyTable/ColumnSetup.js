import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Tooltip } from '@mui/material';
import { Circle, Pending } from '@mui/icons-material';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import ErrorIcon from '@mui/icons-material/Error';

export const columns = [
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
    accessorKey: 'policyName',
    header: 'Policy',
    enableEditing: false,
    enableSorting: false,
  },
  // {
  //   accessorKey: 'commandName',
  //   header: 'Command',
  //   enableEditing: false,
  //   enableSorting: false,
  // },
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
    header: 'Status',
    enableEditing: false,
    enableSorting: false,
    Cell: (row) => (
      <Box>
        {row.row.original.status === 0 ? (
          <Tooltip arrow placement="top" title="Not active">
            <DoNotDisturbOnIcon color="error" />
          </Tooltip>
        ) : row.row.original.status === 1 ? (
          <Tooltip arrow placement="top" title="Pending">
            <Pending color="secondary" />
          </Tooltip>
        ) : row.row.original.status === 2 ? (
          <Tooltip arrow placement="top" title="Running">
            <Circle color="primary" />
          </Tooltip>
        ) : row.row.original.status === 3 ? (
          <Tooltip arrow placement="top" title="Success">
            <CheckCircleIcon color="success" />
          </Tooltip>
        ) : (
          <Tooltip arrow placement="top" title="Timeout">
            <ErrorIcon color="error" />
          </Tooltip>
        )}
      </Box>
    ),
  },
];
