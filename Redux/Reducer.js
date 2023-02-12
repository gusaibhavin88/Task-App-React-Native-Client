import { createReducer} from "@reduxjs/toolkit";

export const authReducer = createReducer(
 {},

// ---------------------------------------------------------

  {
    REGISTER_STARTED: (state) => {
      state.loading = true;
    },
    REGISTER_SUCCESS: (state , action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    REGISTER_FAIL: (state,action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    LOGIN_STARTED: (state) => {
      state.loading = true;
    },
    LOGIN_SUCCESS: (state , action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    LOGIN_FAIL: (state,action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    LOADUSER_STARTED: (state) => {
      state.loading = true;
    },
    LOADUSER_SUCCESS: (state , action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    LOADUSER_FAIL: (state,action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    VERIFICATION_STARTED: (state) => {
      state.loading = true;
    },
    VERIFICATION_SUCCESS: (state , action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    VERIFICATION_FAIL: (state,action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
  

    LOGOUT_STARTED: (state) => {
      state.loading = true;
    },
    LOGOUT_SUCCESS: (state , action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    LOGOUT_FAIL: (state,action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    ADDTASK_STARTED: (state) => {
      state.loading = true;
    },
    ADDTASK_SUCCESS: (state , action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    ADDTASK_FAIL: (state,action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    CHANGE_STARTED: (state) => {
      state.loading = true;
    },
    CHANGE_SUCCESS: (state , action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    CHANGE_FAIL: (state,action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    UPDATEPROFILE_STARTED: (state) => {
      state.loading = true;
    },
    UPDATEPROFILE_SUCCESS: (state , action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    UPDATEPROFILE_FAIL: (state,action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    DELETE_STARTED: (state) => {
      state.loading = true;
    },
    DELETE_SUCCESS: (state , action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    DELETE_FAIL: (state,action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
  },
// -------------------------------------------------------
);