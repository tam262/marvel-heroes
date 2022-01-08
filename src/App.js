import React, { useEffect, useState} from "react";
import './App.css';
import MainPage from './Pages/Main Page/MainPage.jsx'
import InfoPage from './Pages/Info Page/InfoPage.jsx'
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const mainCtx=React.createContext()


function App() {

  const apiKey='e63801654e62f468f5a201c3ba4a5937'
  const [heroList, setHeroList]=useState([])

  useEffect(()=>{
    fetch (`http://gateway.marvel.com/v1/public/characters?apikey=${apiKey}`)
    .then(res=>res.json())
    .then(res=>
      setHeroList(res.data.results))
  },[])


  return (
      <BrowserRouter>
      <mainCtx.Provider value={{heroList, apiKey}}>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/info/:id' component={InfoPage}/>
        </Switch>
      </mainCtx.Provider>
     </BrowserRouter>
  );
}

export default App;
