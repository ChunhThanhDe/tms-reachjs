import React, { createContext, useEffect, useReducer } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios.js';
import { MatxLoading } from 'app/components';
// import { postLogin } from 'app/Services/Service';

const initialState = {
  isAuthenticated: false,
  isInitialised: false,
  user: null,
};

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }

  const decodedToken = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  // console.log(`decodedToken`, decodedToken);
  // console.log(`currentTime`, currentTime);
  // console.log(decodedToken.exp > currentTime);
  return decodedToken.exp > currentTime;
};

const setSession = (accessToken, user) => {
  if (accessToken && user) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('user', JSON.stringify(user));
    axios.defaults.headers.common.Authorization = `TMS ${accessToken}`;
    // console.log(axios.defaults);
  } else {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common.Authorization;
  }
};

const reducer = (state, action) => {
  // console.log('Dispatching action:', action.type, action.payload);
  // console.log('Current state:', state);
  switch (action.type) {
    case 'INIT': {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        user,
      };
    }
    case 'LOGIN': {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...initialState,
  method: 'JWT',
  login: () => Promise.resolve(),
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (username, password) => {
    const response = await axios
      .post(`/TMS/api/auth/signin`, {
        username: username,
        password: password,
      })
      .catch(function (error) {
        if (error.response) {
          return error.response.data;
          // console.log(`error status`, error.response.status);
          // console.log(`error header`, error.response.headers);
        }
      });
    console.log(`response `, response);
    if (response.status === 200) {
      const accessToken = response.data.accessToken;
      const user = {
        id: response.data.id,
        email: response.data.email,
        username: response.data.username,
        role: response.data.roles,
      };
      // console.log(`token `, accessToken);
      // console.log(`user `, user);

      setSession(accessToken, user);

      dispatch({
        type: 'LOGIN',
        payload: {
          user,
        },
      });
      return 'Success';
    } else {
      // console.log(response.message);
      return response.message;
    }
  };

  const logout = () => {
    setSession(null, null);
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    (async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');
        const user = JSON.parse(window.localStorage.getItem('user'));
        // console.log(accessToken);
        // console.log(user);
        // console.log(accessToken && isValidToken(accessToken));
        if (accessToken && isValidToken(accessToken)) {
          // console.log(accessToken);
          setSession(accessToken, user);
          console.log(user);

          dispatch({
            type: 'INIT',
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: 'INIT',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INIT',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    })();
  }, []);

  if (!state.isInitialised) {
    // console.log(state.isInitialised);
    return <MatxLoading />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'JWT',
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
