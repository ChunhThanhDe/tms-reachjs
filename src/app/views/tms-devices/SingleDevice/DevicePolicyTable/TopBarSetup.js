import React from 'react';
import {
  TextField,
  Divider,
  InputAdornment,
  Select,
  MenuItem,
  FormControlLabel,
} from '@mui/material';
import { IconButton, Grid, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Close, RestartAlt } from '@mui/icons-material';

const TopBarSetup = (props) => {
  const { searchTerm, setSearchTerm, handleResetTable, handleSearchMode, status, setStatus } =
    props;

  const handleChange = (event) => {
    // console.log(event.target.value);
    setStatus(event.target.value);
  };
  const handleChangeSearchBar = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStartSearchMode = () => {
    if (isSearchTermEmpty) {
      return;
    } else {
      handleSearchMode();
    }
  };
  const handleCloseSearchMode = () => {
    setSearchTerm('');
    handleResetTable();
  };
  const isSearchTermEmpty = searchTerm && searchTerm.trim().length === 0;

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
          id="search"
          type="search"
          label="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleChangeSearchBar}
          edge="end"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment>
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
              </InputAdornment>
            ),
          }}
        />
        <Tooltip arrow placement="top" title={'Close Search'}>
          <IconButton type="button" onClick={handleCloseSearchMode} disabled={isSearchTermEmpty}>
            <Close color="error" />
          </IconButton>
        </Tooltip>
        <FormControlLabel
          variant="standard"
          sx={{ m: 1, minWidth: 100, height: 30 }}
          // label="Status"
          control={
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={status}
              displayEmpty
              onChange={handleChange}
              sx={{ height: 30 }}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value={0}>Not Active</MenuItem>
              <MenuItem value={1}>Pending</MenuItem>
              <MenuItem value={2}>Running</MenuItem>
              <MenuItem value={3}>Success</MenuItem>
              {/* <MenuItem value={4}>Timeout</MenuItem> */}
            </Select>
          }
        />
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
      </Grid>
    </Grid>
  );
};

export default TopBarSetup;
