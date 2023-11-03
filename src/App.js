
import './App.css';
import { Routes , Route, Navigate, Redirect
  //  BrowserRouter 
  } from 'react-router-dom'

import routes from './pages/router'
import Home from './pages/Home01';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './template/header';
import Footer from './template/footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
          {/* <Route path="/NFT" element={<Home />} /> */}
          <Route index path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />}></Route>
      </Routes>
      <Routes>
      {
      routes.map((data,index) => (
          <Route exact={true} path={data.path} element={data.component} key={index} />
      ))
      }
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
