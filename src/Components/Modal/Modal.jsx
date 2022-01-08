import React from "react";
import './modal.scss'

function Modal(props){

    if(!props.modalView){
        return null
    }       
    return <div className="modal">
    <div className="modal-content">
        <h2>{props.comicDetail.title}</h2>
        <div className="details">
        <p>{props.comicDetail.description}</p>
        <div>{props.comicDetail.prices.map((e,i) =>{
           return <div className="price" key={i}>
            <span>{e.type}: </span>
            <span>{e.price}</span>
            </div> 
        })}</div>
        <div className="creators">Creators: {
            props.comicDetail.creators.items.map((e,i,arr) => {
            if(i===arr.length-1){
            return <span key={i}>{e.name}</span>
            }else
            {
                return <span key={i}>{e.name}, </span>
            }
            
        })}
        </div>
        <div>{
            <a href={`${props.comicDetail.urls[1].url}`} target='_blank' rel='noopener noreferrer'>FOR PURCHASE CLICK HERE!</a>
        }
        </div>
        </div>
    <button onClick={()=>props.setModalView(!props.modalView)}>X</button>
    </div>
    </div>
}

export default Modal









//filter je metoda definisana nad prototipom areja koja prima kolbek funkciju, ta cb prima el, i, niz
//cb funkcija ce se izvrsiti za svaki element u nizu
//ukoliko cb funkcija vrati truti vrednost za element, taj element ce se se smestiti u novi arej koji filter vraca
//a ukoliko cb funkcija vrati folsi, taj element se nece smestiti u novi arej.
//filter vraca novi arej

Array.prototype.filterica=function(callback){
    var noviNiz=[]
    for(var i=0; i<this.length;i++){
        if(callback(this[i],i,this)){
            noviNiz.push(this[i])
        }
    }
    return noviNiz
}

var a=[1,2,3,4,5,undefined]

var b=
Array.prototype.pushic=function(argument){
    for(i=0;i<=this.length;i++){
        if(this[i]===undefined){
            this[this.length]=argument
        }
    }
}

