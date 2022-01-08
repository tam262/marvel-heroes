import React from "react";
import './comic.scss'

function Comic(props){

    return <div className="singleComic">
        <img src={`${props.data.thumbnail.path}.${props.data.thumbnail.extension}`} alt="comic" onClick={()=>{
            props.setSingleComic(props.data.id)
            props.setModalView(true)
        }}/>
        <h3>{props.data.title}</h3>
    </div>
    
}

export default Comic