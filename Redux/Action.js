import * as AuthApi from '../Api/authapi';

// ------------------------------------------------------------------------------------


export const Register = (formdata) => async(dispatch) => {
  try {
    dispatch({type: 'REGISTER_STARTED'});

    const {data} = await AuthApi.Register(formdata, 
      {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    );
    dispatch({type: 'REGISTER_SUCCESS', payload: data});
  } catch (error) {
    dispatch({type: 'REGISTER_FAIL', payload: error.response.data.message});  
  }
};

// ------------------------------------------------------------------------------------

export const LoginAcc = (formdata) => async(dispatch) => {
  try {
    dispatch({type: 'LOGIN_STARTED'});

    const {data} = await AuthApi.LoginAcc(formdata, {
      headers: {
        'Content-Type':  "application/json",
      },
    });
    console.log(data)
    dispatch({type: 'LOGIN_SUCCESS', payload: data});
  } catch (error) {
    dispatch({type: 'LOGIN_FAIL', payload: error.response});
  }
};

// ------------------------------------------------------------------------------------

export const Loaduser = () => async(dispatch) => {
  try {
    dispatch({type: 'LOADUSER_STARTED'});
    const {data} = await AuthApi.Loaduser()
    dispatch({type: 'LOADUSER_SUCCESS', payload: data});
  } catch (error) {
    dispatch({type: 'LOADUSER_FAIL', payload: error.response.data.message});
  }
};

export const Otpverification = (formdata) => async(dispatch) => {
  try {
    dispatch({type: 'VERIFICATION_STARTED'});
    const {data} = await AuthApi.Otpverification(formdata)
    dispatch({type: 'VERIFICATION_SUCCESS', payload: data});
  } catch (error) {
    dispatch({type: 'VERIFICATION_FAIL', payload: error.response.data.message});
  }
};

export const Logout = () => async(dispatch) => {
  try {
    dispatch({type: 'LOGOUT_STARTED'});
    const {data} = await AuthApi.Logout()
    dispatch({type: 'LOGOUT_SUCCESS', payload: data});
  } catch (error) {
    dispatch({type: 'LOGOUT_FAIL', payload: error.response.data.message});
  }
};