import React, { useContext, useState, useEffect } from "react";
import './infoPage.scss'
import Header from "../../Components/Header/Header";
import Comic from "../../Components/Comic/Comic";
import Modal from '../../Components/Modal/Modal'
import { mainCtx } from "../../App";



function InfoPage(props){

    const {heroList, apiKey}=useContext(mainCtx)
    const heroId=props.match.params.id
    const [comics,setComics]=useState([])
    const [singleComic, setSingleComic]=useState([])
    const [comicView, setComicView]=useState(false)
    const [modalView, setModalView]=useState(false)

    useEffect(()=>{
        fetch(`http://gateway.marvel.com/v1/public/characters/${heroId}/comics?apikey=${apiKey}`)
        .then(res=>res.json())
        .then(res=>setComics(res.data.results))
    },[heroId, apiKey])

    const singleHero=heroList?.find(e=>e.id===parseInt(heroId))

    const comicDetail=comics.find(e=>e.id===singleComic)
   
    return <>
    <Header></Header>
    <Modal modalView={modalView} setModalView={setModalView} comicDetail={comicDetail}></Modal>
    {singleHero&&<div className="heroAndComics">
        <div className="heroInfo">
            <img src={`${singleHero.thumbnail.path}.${singleHero.thumbnail.extension}`} alt="avatar"/>
            <div>
                <h1>{singleHero.name}</h1>
                <p>{singleHero.description?singleHero.description:'No description available.'}</p>
            </div>
        </div>
        <div className="comics">
        <h2>COMICS</h2>
        <input type='checkbox' onChange={()=>setComicView(!comicView)}/>
        </div>
        {comicView&&<div className="allComics">
        {comics?.map((e,i)=><Comic key={i} data={e} setModalView={setModalView} setSingleComic={setSingleComic}></Comic>)}
        </div>}
    </div>}
    </>
}

export default InfoPage