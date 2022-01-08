import React, { useContext, useState } from "react";
import "./mainPage.scss";
import Header from "../../Components/Header/Header.jsx";
import HeroCard from "../../Components/HeroCard/HeroCard.jsx";
import MyTeam from "../../Components/MyTeam/MyTeam.jsx";
import { mainCtx } from "../../App";

function MainPage() {
  const { heroList } = useContext(mainCtx);
  const [searchText, setSearchText] = useState("");
  const [myTeam, setMyTeam] = useState(
    JSON.parse(localStorage.getItem("myTeam")) || []
  );
  const filteredHeroes = heroList.filter((e) => {
    return e.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      <Header></Header>
      <div className="main">
        <input
          className="searchInput"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <div className="mainFlex">
          <div className="heroCardsWrapper">
            {filteredHeroes.map((e, i) => (
              <HeroCard
                key={i}
                data={e}
                myTeam={myTeam}
                setMyTeam={setMyTeam}
              ></HeroCard>
            ))}
          </div>
          <MyTeam myTeam={myTeam} setMyTeam={setMyTeam}></MyTeam>
        </div>
      </div>
    </>
  );
}

export default MainPage;
