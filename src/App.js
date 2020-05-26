import React, { Component } from "react";
import { connect } from "react-redux";
import { ambilDataPost } from "./action"; //import data dari action

export class App extends Component {
   componentDidMount(){
      this.props.ambilDataPost()
   }

   render() {
      return <div></div>;
   }
}

const stateToProps = (state) => {
   return { ListPost: state.listPost };
};

export default connect(stateToProps, { ambilDataPost })(App);
