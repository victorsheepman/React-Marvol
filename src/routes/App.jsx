import React,{useState, useEffect} from 'react'
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import { AppContext, useInitialState } from '../context/AppContext';
import { ModalComic } from '../components/ModalComic';
import { Layout } from '../containers/Layout';

import { ComicPage } from '../pages/ComicPage';
import { Home } from '../pages/Home';



const API = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=486ce811693dd0ffba4d053c3279bac9&hash=fafa17edf0942ba98e08bed985b2ae1d'
const App = () => {
    
  const initialvalue = useInitialState();
  
  return (
    <AppContext.Provider value={initialvalue}>
    <BrowserRouter>
      <Layout>
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/comic" element={<ComicPage />} />
          {/*<Route exact path="/modal" element={<ModalComic />} />*/}
          <Route exact path="/modal" element={<ModalComic />} />
          
        </Routes>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;