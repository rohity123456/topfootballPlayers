import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { actionTypes } from "./common/reducer";
import { useStateValue } from "./common/StateProvider";
import CONST from "./common/constants";
import { customFetch } from "./common/backend";

function App() {
  const [, dispatch] = useStateValue();
  const { SET_PLAYERS } = actionTypes;
  const sortedList = (list = [], property) => {
    return list.sort((a, b) => a[property] - b[property]);
  };
  useEffect(() => {
    async function fetchAndSetData(URL) {
      const data = await customFetch(URL);
      if (data.hasOwnProperty("playerList"))
        dispatch({
          type: SET_PLAYERS,
          payload: sortedList(data["playerList"], "Value"),
        });
    }
    fetchAndSetData(CONST.API_URL);
  }, []);
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
