import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';

import modules from './modules';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  console.log(modules);
  return (
    <div className="App">
     
        <div className="App">
          <header className="App-header">
            <ul className="App-nav">
              
              {modules.map(module => ( // with a name, and routes  //{currentTab === module.moduleName ? 'active' : ''}
                 <li key={module.moduleName} className={currentTab === module.moduleName ? 'active' : ''}>
                 <Link to={module.routerProps.path} onClick={() => setCurrentTab(module.moduleName)}>{module.moduleName}</Link>
               </li>
                  
              ))}
            </ul>
          </header>
          <div className="App-content">
            {modules.map(module => (
             <Routes>
              <Route path = {module.routerProps.path} exact element = {<module.routerProps.element/>} key={module.moduleName} />
              </Routes>
            ))}
          </div>
        </div>
      
    </div>
  );
}

export default App;
