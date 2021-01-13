//import logo from './logo.svg';
//import './App.css';
//{/*<Contacts contacts={this.state.contacts} />*/}
// <input type = "text" value = {this.state.entered_name} onChange = {this.updateState}/>
//<h1>{this.state.entered_name}</h1>

import React, { Component } from 'react';
import Repos from './components/contacts';
import Main_account from './components/main_account';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {  
      github_handle: "",
      repos: [],
      main_account: [],
      view_page: false,
    }
    this.updateGithubHandle = this.updateGithubHandle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRepos = this.getRepos.bind(this);
    this.getMainAccount = this.getMainAccount.bind(this);
    
  };
/*
  getContents(){
    for(var i = 0; i < this.state.repos.length; i++){
      var url = `https://api.github.com/users/${repos[i]}/repos`;
    }

    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({ repos: data })
    })
    .catch(console.log)
  }
  */
  getRepos(val){
    //this.setState({ view_page: true })
    var url = `https://api.github.com/users/${val}/repos`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({ repos: data })
    })
    .catch(console.log)
  }

  getMainAccount(val){
    var url = `https://api.github.com/users/${val}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({ user_details: data })
    })
    .catch(console.log)
  }

  handleSubmit(e){
    this.setState({ view_page: true })
    const target = e.target;
    const value = target.value;

    //this.setState({github_handle: value});
    //e.preventDefault();
    console.log(value + "here")
    const val = this.state.github_handle;
    e.preventDefault();
    this.getRepos(val);
    this.getMainAccount(val);
  };
  
  updateGithubHandle(e) {

    const target = e.target;
    const value = target.value;

    this.setState({github_handle: value});
    console.log(this.state.github_handle);
    e.preventDefault();
  }


  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type = "text" value = {this.state.github_handle} onChange = {this.updateGithubHandle}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <div>
          {this.state.view_page ? <Main_account main_account={this.state.main_account} />: 'not'}
          {this.state.view_page ? <Repos repos={this.state.repos} />: 'not'}
        </div>
      </div>
    );
  }
}

export default App;
