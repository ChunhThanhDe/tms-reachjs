import React, { useState, useEffect } from 'react';
import { Card, IconButton, ThemeProvider, Tooltip } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import { columns } from './ColumnSetup';
import BottomBarSetup from './BottomBarSetup';
import tableTheme from 'app/components/Table/TableTheme';
import TopBarSetup from './TopBarSetup';
import { toast } from 'react-toastify';
import { getPolicyDevice } from 'app/Services/PolicyServices';
import InfoIcon from '@mui/icons-material/Info';
import { NavLink } from 'react-router-dom';

// import { NavLink } from 'react-router-dom';

const PolicDevicesTable = (props) => {
  const { id } = props;
  const [arrApps, setArrApps] = useState([]);
  const [paramsPage, setParamPage] = useState({
    page: 1,
    limit: 10,
    id: id,
  });
  const [totalPage, setTotalPage] = useState();
  const [updateTable, setUpdateTable] = useState(true);
  const [resetTable, setResetTable] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLoadAPagePolicyAPK = async () => {
    let response = await getPolicyDevice(paramsPage);
    if (response.status === 200) {
      // console.log(`Page List App: `, response);
      if (response.data.totalElement === null && searchTerm !== null) {
        toast.error('No elements match');
      }
      let arr = response.data.listResult;
      setArrApps(arr);
      setTotalPage(response.data.totalPage);
    }
  };

  const handleResetTable = () => {
    setResetTable(true);
    setSearchTerm('');
    // console.log('resetTable');
  };
  const handleMoveToNextPage = () => {
    if (paramsPage.page < totalPage) {
      setParamPage({
        limit: paramsPage.limit,
        page: paramsPage.page + 1,
      });
      setUpdateTable(true);
    }
  };
  const handleMoveToPrePage = () => {
    if (paramsPage.page > 1) {
      setParamPage({
        limit: paramsPage.limit,
        page: paramsPage.page - 1,
      });
      setUpdateTable(true);
    }
  };
  const handleSearchMode = () => {
    setParamPage({ ...paramsPage, search: searchTerm });
    setUpdateTable(true);
  };

  //Edit user

  useEffect(() => {
    if (resetTable) {
      setParamPage({ page: 1, limit: 10, id: id });
      setResetTable(false);
      setUpdateTable(true);
    } else if (updateTable) {
      // console.log('change status');
      handleLoadAPagePolicyAPK();
      setUpdateTable(false);
    }
  }, [resetTable, updateTable]);

  return (
    <Card>
      <ThemeProvider theme={tableTheme}>
        <MaterialReactTable
          columns={columns}
          data={arrApps}
          options={{ actionsColumnIndex: -1 }}
          enableTopToolbar={false}
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
            density: 'compact',
            columnVisibility: {
              id: false,
            },
            columnOrder: ['id', 'sn', 'model', 'mrt-row-actions'],
          }}
          renderRowActions={({ row, closeMenu }) => [
            <Tooltip arrow placement="bottom" title="Detail">
              <NavLink
                to={`/tms-devices/devices-management/device?id=${row.original.id}&sn=${row.original.sn}`}
              >
                <IconButton>
                  <InfoIcon color="primary" />
                </IconButton>
              </NavLink>
            </Tooltip>,
          ]}
          renderBottomToolbarCustomActions={() => (
            <BottomBarSetup
              paramsPageDevices={paramsPage}
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

export default PolicDevicesTable;
