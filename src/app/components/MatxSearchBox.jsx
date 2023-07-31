import { Autocomplete, Box, Icon, IconButton, TextField } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { topBarHeight } from 'app/utils/constant';
import React, { useEffect, useState } from 'react';
import { getSearchResult } from 'app/Services/User_Auth_Service';

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 9,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  height: topBarHeight,
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  '& input::placeholder': {
    color: theme.palette.text.primary,
  },
}));

const MatxSearchBox = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    setSearchTerm('');
    setArr([]);
  };

  const { palette } = useTheme();
  const textColor = palette.text.primary;
  const [searchTerm, setSearchTerm] = useState('');
  const [arr, setArr] = useState([]);

  const handleBarSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchMode = async () => {
    let res = await getSearchResult(searchTerm);
    console.log(res);
    if (res.status === 200) {
      setArr(res.data.listResult);
    }
    console.log(arr);
  };

  useEffect(() => {
    if (searchTerm !== '') {
      handleSearchMode();
    }
  }, [searchTerm]);

  return (
    <React.Fragment>
      {!open && (
        <IconButton onClick={toggle}>
          <Icon sx={{ color: textColor }}>search</Icon>
        </IconButton>
      )}

      {open && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <SearchContainer>
            <Box width={20}></Box>
            <Autocomplete
              id="free-solo-demo"
              fullWidth
              freeSolo
              options={arr.map((option) => option.sn)}
              onChange={(event, value) => {
                if (value) {
                  const selectedOption = arr.find((option) => option.sn === value);
                  if (selectedOption) {
                    window.location.href = `/tms-devices/devices-management/device?id=${selectedOption.id}&sn=${selectedOption.sn}`;
                  }
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Serial Number"
                  variant="standard"
                  onChange={(e) => handleBarSearch(e)}
                  InputProps={{
                    endAdornment: [],
                  }}
                  sx={{
                    marginBottom: '10px',
                    border: 'none',
                    '&:hover': {
                      border: 'none',
                    },
                    '&:focus': {
                      border: 'none',
                      outline: 'none',
                    },
                  }}
                  fullWidth
                />
              )}
            />
            <IconButton onClick={toggle} sx={{ mx: 2, verticalAlign: 'middle' }}>
              <Icon sx={{ color: textColor }}>close</Icon>
            </IconButton>
          </SearchContainer>
        </div>
      )}
    </React.Fragment>
  );
};

export default MatxSearchBox;
