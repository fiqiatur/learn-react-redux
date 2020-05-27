import React, { Component } from "react";
import { connect } from "react-redux";
import { ambilPostdanUser } from "./action"; //import data dari action
import NamaUser from "./NamaUser";

export class App extends Component {
   componentDidMount() {
      this.props.ambilPostdanUser();
   }

   renderList() {
      if (!this.props.ListPost.data) {
         return <span>Loading...</span>;
      }
      const listpost = this.props.ListPost.data;

      return listpost.map((post) => {
         return (
            <div key={post.id}>
               <div className="card ">
                  <div className="card-header">
                     {" "}
                     <NamaUser userId={post.userId} />
                  </div>
                  <div className="card-body">
                     <h5 className="card-title">{post.title}</h5>
                     <p className="card-text">{post.body}</p>
                     <a href="#" className="btn btn-primary">
                        Lihat Detail
                     </a>
                  </div>
               </div>
               <br />
            </div>
         );
      });
   }

   render() {
      return (
         <div className="container">
            <h2>Daftar Post</h2>
            {this.renderList()}
         </div>
      );
   }
}

const stateToProps = (state) => {
   return { ListPost: state.listPost };
};

export default connect(stateToProps, { ambilPostdanUser })(App);
