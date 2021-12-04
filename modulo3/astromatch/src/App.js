import React, { useEffect } from "react";
import Home from "./pages/Home/Home"
import Match from "./pages/Match/Match";
import Loading from "./pages/Loading/Loading";
import { ScreenCard } from "./styledApp";



export default class App extends React.Component{
  state = {
    screen: "home"
  }

  goToMatches = () => {
    this.setState({screen: "match"})
  }

  goToHome = () => {
    this.setState({screen: "home"})
  }

  selectPage = () => {
    switch (this.state.screen){
      case "home":
        return <Home goToMatches={this.goToMatches}/>
      case "match":
        return <Match goToHome={this.goToHome}/>
      default:
        return <Loading goToHome={this.goToHome}/>
    }
  }

  render(){
    return (
      <ScreenCard>
        {this.selectPage()}
      </ScreenCard>
    );
  }
  
}