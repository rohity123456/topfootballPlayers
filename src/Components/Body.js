import React from "react";
import { useStateValue } from "../common/StateProvider";
import "./css/Body.css";
import Player from "./Player";

function Body() {
  const [{ players, searchValue }] = useStateValue();
  const isMatchingCriteria = (...queries) => {
    return (
      !searchValue ||
      queries.some(
        (query) =>
          typeof query === "string" && query.toLowerCase().includes(searchValue)
      )
    );
  };
  return (
    <div className="body">
      <h1>Best Players :</h1>
      <div className="playerList">
        {players &&
          players.map(
            ({
              SkillDesc,
              PFName,
              Value,
              TName,
              Id,
              UpComingMatchesList: [{ VsTSCode, MDate }],
            }) => {
              return (
                isMatchingCriteria(PFName, TName) && (
                  <Player
                    skill={SkillDesc}
                    name={PFName}
                    team={TName}
                    value={Value}
                    key={Id}
                    id={Id}
                    nextMatchTeam={VsTSCode}
                    nextMatchDate={MDate}
                  />
                )
              );
            }
          )}
      </div>
    </div>
  );
}

export default Body;
