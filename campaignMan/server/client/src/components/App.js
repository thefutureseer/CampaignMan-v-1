import React from 'react';
//BrowserRouter is the brains it tells the router how to behave its
//the thing that looks at the url and then changes the set of components
//on the screen at any given time
//The "Route" is a react component used to set up a rule between a 
//certain route the user might visit and a set of components 
import {BrowserRouter, Route } from 'react-router-dom'

import Header from './Header';

//Dummie components to later make real
const Dashboard = () => <h1>Dashboard</h1>;
 const SurveyNew = () => <h1>SurveyNew</h1>;
const Landing = () => <h1>Landing</h1>;
const Google = () => <div> <p> Hi from REacter </p>
        <a className="App-link" href="http://localhost:5000/auth/google">
         SIGN IN WITH GOOGLE
        </a>
        </div>
function App() {
  return (
    <div className="container">
     <BrowserRouter>
       <div>
        <Header/>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/surveys" component={Dashboard}/>
        <Route path="/surveys/new" component={SurveyNew}/>
        <Route path="/goog" component={Google}/>
       </div>
     </BrowserRouter>
    </div>
  );
}
export default App;