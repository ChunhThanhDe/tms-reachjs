import { Button, Grid, Icon, styled } from '@mui/material';
import { getAnUser, putEditUserData } from 'app/Services/User_Auth_Service';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import useAuth from 'app/hooks/useAuth';
import { toast } from 'react-toastify';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const AccountForm = () => {
  const [state, setState] = useState({});
  const [oldData, setOldData] = useState({});
  const { user } = useAuth();
  const [updateData, setUpdateData] = useState(true);
  const { id, name, email, userName, company, contact } = state;

  useEffect(() => {
    if (updateData) {
      handleLoadAccountData();
      setUpdateData(false);
    }
  }, [updateData]);

  const handleLoadAccountData = async () => {
    let accountData = await getAnUser(user.id);
    // console.log(accountData);
    if (accountData.status === 200) {
      setState({
        id: accountData.data.id,
        name: accountData.data.name,
        email: accountData.data.email,
        userName: accountData.data.username,
        company: accountData.data.company,
        contact: accountData.data.contact,
      });
      setOldData({
        id: accountData.data.id,
        name: accountData.data.name,
        email: accountData.data.email,
        userName: accountData.data.username,
        company: accountData.data.company,
        contact: accountData.data.contact,
      });
    } else {
      toast.error(accountData.message);
    }
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
    // console.log(event.target.value);
    // console.log(name);
  };

  const handleSubmit = async () => {
    if (company === oldData.company && contact === oldData.contact && email === oldData.email) {
      toast.info('Nothing changes');
    } else {
      let data = {
        id: id,
        company: company,
        email: email,
        contact: contact,
      };
      let responseChangeData = await putEditUserData(data);
      console.log(responseChangeData);
    }
  };

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid spacing={6}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  name="name"
                  disabled="true"
                  id="standard-basic"
                  value={name || ''}
                  onChange={handleChange}
                  errorMessages={['this field is required']}
                  label="Name"
                  validators={['required']}
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  name="userName"
                  disabled="true"
                  label="Username"
                  onChange={handleChange}
                  value={userName || ''}
                  validators={['required']}
                  errorMessages={['this field is required']}
                  sx={{ width: '100%' }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                name="email"
                label="Email"
                value={email || ''}
                onChange={handleChange}
                validators={['required']}
                errorMessages={['this field is required', 'email is not valid']}
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                name="company"
                value={company || ''}
                label="Company"
                onChange={handleChange}
                validators={['required']}
                errorMessages={['this field is required']}
                sx={{ width: '100%' }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                type="number"
                name="contact"
                label="Contact(Phone Number)"
                onChange={handleChange}
                InputProps={{
                  endAdornment: [],
                }}
                value={contact || ''}
                errorMessages={['this field is required']}
                validators={
                  [
                    // 'required',
                    // 'minStringLength:9', 'maxStringLength: 11'
                  ]
                }
                sx={{ width: '100%' }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default AccountForm;
