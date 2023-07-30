export const columns = [
  {
    accessorKey: 'sn',
    header: 'Serial Number',
    enableEditing: false,
    enableSorting: false,
    muiTableHeadCellProps: {
      align: 'center',
    },
    muiTableBodyCellProps: {
      align: 'center',
    },
    enableColumnFilter: false,
    size: 50,
  },
  {
    accessorKey: 'model',
    header: 'Model',
    muiTableHeadCellProps: {
      align: 'center',
    },
    muiTableBodyCellProps: {
      align: 'center',
    },
    muiTableBodyCellEditTextFieldProps: {
      required: true,
    },
  },
];
