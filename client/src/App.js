import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import User from './components/Users/User'
import Posts from './components/Posts/Posts';
import Users from './components/Users/Users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }

  connecToServer() {
    fetch('/');
  }

  componentDidMount() {
    this.connecToServer();
  }

  // componentDidMount = () => {
  //   axios
  //     .get('http://localhost:3333/api/posts')
  //     .then(res => {
  //       this.setState({ posts: res.data.posts });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Users} />
        <Route path='/users/:id' component={User} />
        {/* <Posts /> */}
      </div>
    );
  }
}

export default App;
