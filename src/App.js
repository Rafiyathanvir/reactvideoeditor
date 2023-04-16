import './App.css';
//import VideoEditor from './VideoEditor/VideoEditor'
import './App1.css';
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="wrapper">

         <Sidebar/> 
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content"> <Topbar/>
<Routes>
  <Route path="/dashboard" element={<Dashboard/>}></Route>
 




</Routes>
           </div>
          </div>
       </div>
</BrowserRouter>
    </div>
  );
}

export default App;
