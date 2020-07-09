import React from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Usercard from './components/Usercard'
import Followers from './components/Followers'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: []
    };
    console.log('Constructor is running')
  }

  componentDidMount() {
    console.log('cDM is running')

    axios.get('https://api.github.com/users/JDMTias')
    .then(res => {
      const info = res.data
      console.log(info)
      this.setState({
        userInfo: info
      })
    })    
    
  }


 render(){
   console.log("Rendering!", this.state.userInfo)
   if(this.state.userInfo.length === 0){
     return <p>Patience you must have young padawan ...</p>
    }

   return (
     <>
     <Router>
       <nav>
       <a href='/'>Home</a>
     </nav>
     <div className='App'>
      <Route path='/'exact>
        <Usercard userInfo={this.state.userInfo}/> 
      </Route> 
      <Route path='/followers'>
        <Followers/>
      </Route>
     </div>
     </Router>
     </>
   )

   }
};

export default App;