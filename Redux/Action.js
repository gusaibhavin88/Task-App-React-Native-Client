import * as AuthApi from '../Api/authapi';

// ------------------------------------------------------------------------------------

export const Register = formdata => async dispatch => {
  try {
    dispatch({type: 'REGISTER_STARTED'});

    const {data} = await AuthApi.Register(formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({type: 'REGISTER_SUCCESS', payload: data});
  } catch (error) {
    dispatch({type: 'REGISTER_FAIL', payload: error.response.data.message});
  }
};

// ------------------------------------------------------------------------------------

export const LoginAcc = formdata => async dispatch => {
  try {
    dispatch({type: 'LOGIN_STARTED'});

    const {data} = await AuthApi.LoginAcc(formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(data);
    dispatch({type: 'LOGIN_SUCCESS', payload: data});
  } catch (error) {
    dispatch({type: 'LOGIN_FAIL', payload: error.response.data.message});
  }
};

// ------------------------------------------------------------------------------------

export const Loaduser = () => async dispatch => {
  try {
    dispatch({type: 'LOADUSER_STARTED'});
    const {data} = await AuthApi.Loaduser();
    dispatch({type: 'LOADUSER_SUCCESS', payload: data});
  } catch (error) {
    dispatch({type: 'LOADUSER_FAIL', payload: error.response.data.message});
  }
};

export const Otpverification = formdata => async dispatch => {
  try {
    dispatch({type: 'VERIFICATION_STARTED'});
    const {data} = await AuthApi.Otpverification(formdata);
    dispatch({type: 'VERIFICATION_SUCCESS', payload: data});
  } catch (error) {
    dispatch({type: 'VERIFICATION_FAIL', payload: error.response.data.message});
  }
};

export const Logout = () => async dispatch => {
  try {
    dispatch({type: 'LOGOUT_STARTED'});
    const {data} = await AuthApi.Logout();
    dispatch({type: 'LOGOUT_SUCCESS', payload: data.message});
  } catch (error) {
    dispatch({type: 'LOGOUT_FAIL', payload: error.response.data.message});
  }
};

export const addTasksitem = formdata => async dispatch => {
  try {
    dispatch({type: 'ADDTASK_STARTED'});
    console.log(formdata);
    const {data} = await AuthApi.addTasksitem(formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(data);
    dispatch({type: 'ADDTASK_SUCCESS', payload: data});
  } catch (error) {
    dispatch({type: 'ADDTASK_FAIL', payload: error.response.data.message});
  }
};

export const Changeaccountpassword = formdata => async dispatch => {
  try {
    dispatch({type: 'CHANGE_STARTED'});
    console.log(formdata);
    const {data} = await AuthApi.Changeaccountpassword(formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(data);
    dispatch({type: 'CHANGE_SUCCESS', payload: data});
  } catch (error) {
    dispatch({type: 'CHANGE_FAIL', payload: error.response.data.message});
  }
};



export const updateProfile = formdata => async dispatch => {
  try {
    dispatch({type: 'UPDATEPROFILE_STARTED'});
    console.log(formdata);
    const {data} = await AuthApi.updateProfile(formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(data);
    dispatch({type: 'UPDATEPROFILE_SUCCESS', payload: data});
  } catch (error) {
    dispatch({type: 'UPDATEPROFILE_FAIL', payload: error.response.data.message});
  }
};



export const deleteTaskItem = () => async dispatch => {
  try {
    dispatch({type: 'DELETE_STARTED'});
    const {data} = await AuthApi.deleteTaskItem();
    console.log(data);
    dispatch({type: 'DELETE_SUCCESS', payload: data.message});
  } catch (error) {
    dispatch({type: 'DELETE_FAIL', payload: error.response.data.message});
  }
};
