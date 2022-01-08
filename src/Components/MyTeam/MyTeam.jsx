import React from "react";
import "./myTeam.scss";

function MyTeam(props) {
  return (
    <div className="myTeam">
      <h1>MY TEAM</h1>
      {props.myTeam &&
        props.myTeam.map((e, i) => (
          <div className="myTeamHero" key={i}>
            <img
              src={`${e.thumbnail.path}.${e.thumbnail.extension}`}
              alt="avatar"
            />
            <p>{e.name}</p>
            <button
              onClick={() => {
                props.myTeam.splice(i, 1);
                props.setMyTeam([...props.myTeam]);
                localStorage.setItem(
                  "myTeam",
                  JSON.stringify([...props.myTeam])
                );
              }}
            >
              X
            </button>
          </div>
        ))}
    </div>
  );
}

export default MyTeam;
