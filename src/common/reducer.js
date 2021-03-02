export const initialState = {
  players: [],
  searchValue: "",
};
export const actionTypes = {
  SET_PLAYERS: "SET_PLAYERS",
  SET_SEARCH_VAL: "SET_SEARCH_VAL",
};
const reducer = (state, action) => {
  if (action) {
    switch (action.type) {
      case actionTypes.SET_PLAYERS:
        return { ...state, players: action.payload };
      case actionTypes.SET_SEARCH_VAL:
        return { ...state, searchValue: action.payload };
      default:
        return state;
    }
  }
};
export const getUser = () => {
  return (
    sessionStorage.getItem("ME") && JSON.parse(sessionStorage.getItem("ME"))
  );
};
export default reducer;
