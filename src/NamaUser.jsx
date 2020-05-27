import React, { Component } from "react";
import { connect } from "react-redux"; //mengkoneksi ke action redux
import { ambilUser } from "./action"; //mengambil variable data dari action

export class NamaUser extends Component {
   render() {
      return <div>{this.props.User ? this.props.User.name : null}</div>;
   }
}

const stateToProps = (state, props) => {
   return { User: state.Users.find((user) => user.id === props.userId) };
};

export default connect(stateToProps, { ambilUser })(NamaUser);
