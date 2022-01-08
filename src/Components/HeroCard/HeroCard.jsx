import React from "react";
import { Link } from "react-router-dom";
import './heroCard.scss'



function HeroCard(props){


    return <div className="heroCard">
         <h2>{props.data.name}</h2>
         <img src={`${props.data.thumbnail.path}.${props.data.thumbnail.extension}`} alt="avatar"/>
         <div className="cardButtons">
         <Link to={`/info/${props.data.id}`}>
             <button>INFO</button>
         </Link>
         <button onClick={()=>{
             if(!props.myTeam.includes(props.data)){
                props.setMyTeam([...props.myTeam,props.data])
                localStorage.setItem('myTeam', JSON.stringify([...props.myTeam,props.data]))
             }
             }}>ADD</button>
         </div>
        </div>
}



export default HeroCard