import React from 'react'
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { ComicPage } from '../pages/ComicPage';
import { Home } from '../pages/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/comic" element={<ComicPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    
  )
}

export default App;