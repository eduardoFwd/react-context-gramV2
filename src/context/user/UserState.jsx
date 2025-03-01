import { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
const UserState = (props) => {
  const initialState = {
    currentUser: {},
    suggestedAccounts: [],
    followedAccounts: [],
    getUser,
    getSuggestedAccount,
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const user = {
    username: "JP",
    followers: 2,
  };
  const suggestedAccounts = [
    {
      uid: 66,
      username: "Udemy",
      thumbnail:
        "https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og",
    },
    {
      uid: 787,
      username: "Nasa",
      thumbnail:
        "data:image/png;base64,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",
    },
  ];
  function addAccount(account) {
    dispatch({
      type: "addAccount",
      payload: account,
    });
  }
  function getUser() {
    dispatch({
      type: "getUser",
      payload: user,
    });
  }
  function getSuggestedAccount() {
    if (state.followedAccounts.length > 0) {
      return suggestedAccounts;
    } else {
      dispatch({
        type: "getSuggestedAccount",
        payload: suggestedAccounts,
      });
    }
  }
  function unFollow(uid) {
    dispatch({
      type: "unFollow",
      payload: uid,
    });
  }
  return (
    <UserContext.Provider
      value={{
        currentUser: state.currentUser,
        suggestedAccounts: state.suggestedAccounts,
        followedAccounts: state.followedAccounts,
        getUser,
        getSuggestedAccount,
        addAccount,
        unFollow,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
