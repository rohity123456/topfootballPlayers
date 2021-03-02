import React from "react";
import "./css/Player.css";

function Player(props) {
  const { skill, name, value, team, id, nextMatchTeam, nextMatchDate } = props;
  const getNextMatchString = () => {
    let nextMatchDateString = new Date(nextMatchDate + " UTC").toString();
    nextMatchDateString = nextMatchDateString.slice(
      0,
      nextMatchDateString.indexOf(" GMT")
    );
    return (
      nextMatchDateString &&
      nextMatchTeam &&
      `Next Match vs ${nextMatchTeam} at ${nextMatchDate}`
    );
  };
  return (
    <div className="player">
      <div className="player__top">
        <img src={id ? `./playerImages/${id}.jpg` : ""} alt={name} />
      </div>
      <div className="player__bottom">
        <div className="player__info">
          <h3>{name}</h3>
          <div className="categoryContainer">
            <span>
              {team} | {skill}
            </span>
          </div>
        </div>

        <p className="player_description">{getNextMatchString()}</p>

        <div className="valuediv">
          <span>{`Value : ${value}`}</span>
        </div>
      </div>
    </div>
  );
}

export default Player;
