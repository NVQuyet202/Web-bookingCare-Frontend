import actionTypes from "./actionTypes";
import {
  getAllCodeService,
  createNewUserService,
  getAllUsers,
  deleteUserService,
  editUserService,
  getTopDoctorHomeService,
} from "../../services/userService";
import { toast } from "react-toastify";
// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });

      let res = await getAllCodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (e) {
      dispatch(fetchGenderFailed());
      console.log("fetchGenderStart error: ", e);
    }
  };
};

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});

export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});

export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILED,
});

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});

export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
});

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: actionTypes.FETCH_POSITION_SUCCESS,
      // });
      let res = await getAllCodeService("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (e) {
      dispatch(fetchPositionFailed());
      console.log("fetchPositionStart error: ", e);
    }
  };
};

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("ROLE");
      console.log(res);
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (e) {
      dispatch(fetchRoleFailed());
      console.log("fetchRoleStart error: ", e);
    }
  };
};

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      if (res && res.errCode === 0) {
        toast.success("Create New User succeed");
        dispatch(saveUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        dispatch(saveUserFailed());
      }
    } catch (e) {
      dispatch(saveUserFailed());
      console.log("saveUserFailed error: ", e);
    }
  };
};

export const saveUserSuccess = () => ({
  type: "CREATE_USER_SUCCESS",
});

export const saveUserFailed = () => ({
  type: actionTypes.CREATE_USER_FAILED,
});

export const fetchAllUsersStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("ALL");
      if (res && res.errCode === 0) {
        dispatch(fetchAllUsersrSuccess(res.users.reverse()));
      } else {
        dispatch(fetchAllUsersrFailed());
      }
    } catch (e) {
      dispatch(fetchAllUsersrFailed());
      console.log("fetchAllUsersrStart error: ", e);
    }
  };
};

export const fetchAllUsersrSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: data,
});

export const fetchAllUsersrFailed = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAILED,
});

export const deleteUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      if (res && res.errCode === 0) {
        toast.success("Delete User succeed");
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.success("Delete User error");
        dispatch(deleteUserFailed());
      }
    } catch (e) {
      dispatch(deleteUserFailed());
      console.log("saveUserFailed error: ", e);
    }
  };
};

export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});

export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED,
});

export const editUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(userId);
      if (res && res.errCode === 0) {
        toast.success("update User succeed");
        dispatch(editUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error("update User error");
        dispatch(editUserFailed());
      }
    } catch (e) {
      toast.error("update User error");
      dispatch(editUserFailed());
      console.log("saveUserFailed error: ", e);
    }
  };
};

export const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});

export const editUserFailed = () => ({
  type: actionTypes.EDIT_USER_FAILED,
});

export const fetchTopDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopDoctorHomeService("");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
          dataDoctors: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
        });
      }
    } catch (e) {
      console.log("FETCH_TOP_DOCTORS_FAILED: ", e);
      dispatch({
        type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
      });
    }
  };
};
