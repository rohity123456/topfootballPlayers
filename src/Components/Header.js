import React from "react";
import { debounce } from "../common/helperfunctions";
import { actionTypes } from "../common/reducer";
import { useStateValue } from "../common/StateProvider";
import "./css/Header.css";

function Header() {
  const [, dispatch] = useStateValue();
  const { SET_SEARCH_VAL } = actionTypes;
  const handleInput = (e) => {
    const inp = e.target.value.trim();
    dispatch({ type: SET_SEARCH_VAL, payload: inp.toLowerCase() });
  };

  return (
    <header>
      <div className="logoContainer">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Soccer_ball.svg/1200px-Soccer_ball.svg.png"
          alt=""
        ></img>
      </div>
      <nav>
        <input
          type="text"
          placeholder="Search Player"
          onChange={debounce(handleInput, 1000)}
        />
        <i className="fa fa-search searchIcon"></i>
      </nav>
    </header>
  );
}

export default Header;
