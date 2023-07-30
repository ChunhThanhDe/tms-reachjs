import React from 'react';
import { TextField, Divider } from '@mui/material';
import { IconButton, Grid, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Close, RestartAlt } from '@mui/icons-material';
import NewAPKModal from '../Modal/NewAPKModal';

const TopBarSetup = (props) => {
  const {
    setResettable,
    handleResetTable,
    handleSearchMode,
    searchTermPackage,
    setSearchTermPackage,
    searchTermVersion,
    setSearchTermVersion,
  } = props;

  const handleChangeSearchPackage = (event) => {
    setSearchTermPackage(event.target.value);
  };

  const handleChangeSearchVersion = (event) => {
    setSearchTermVersion(event.target.value);
  };

  const handleStartSearchMode = () => {
    if (isSearchTermEmpty) {
      return;
    } else {
      handleSearchMode();
    }
  };
  const handleCloseSearchMode = () => {
    setSearchTermPackage('');
    setSearchTermVersion('');
    handleResetTable();
  };
  const isSearchTermEmpty =
    searchTermPackage.trim().length === 0 && searchTermVersion.trim().length === 0;

  return (
    <Grid container fullWidth>
      <Grid
        item
        lg={8}
        md={8}
        sm={12}
        xs={12}
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <TextField
          id="searchpackage"
          type="search"
          label="Search Package Name"
          variant="outlined"
          size="small"
          value={searchTermPackage}
          onChange={handleChangeSearchPackage}
          edge="end"
          fullWidth
        />
        <Divider sx={{ height: 28, m: 0.5, borderWidth: 2, opacity: 0 }} orientation="vertical" />
        <TextField
          id="searchversion"
          type="search"
          label="Search Version"
          variant="outlined"
          size="small"
          value={searchTermVersion}
          onChange={handleChangeSearchVersion}
          edge="end"
          fullWidth
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Tooltip arrow placement="top" title={'Search'}>
          <IconButton
            type="button"
            aria-label="search"
            helperText="Search"
            onClick={handleStartSearchMode}
          >
            <SearchIcon color="primary" />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title={'Close Search'}>
          <IconButton type="button" onClick={handleCloseSearchMode} disabled={isSearchTermEmpty}>
            <Close color="error" />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid
        item
        lg={4}
        md={4}
        sm={12}
        xs={12}
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Tooltip arrow placement="top" title="Reset table to default">
          <IconButton color="primary" aria-label="clear" onClick={handleResetTable}>
            <RestartAlt />
          </IconButton>
        </Tooltip>
        <NewAPKModal setResettable={setResettable} />
      </Grid>
    </Grid>
  );
};

export default TopBarSetup;
