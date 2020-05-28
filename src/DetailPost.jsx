import React, { Component } from "react";
import { ambilDetailPost } from "./action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class DetailPost extends Component {
   componentDidMount() {
      const idpost = this.props.match.params.idpost;
      this.props.ambilDetailPost(idpost);
   }

   render() {
      if (!this.props.detailPost) {
         return null;
      }

      if (!this.props.users) {
         return null;
      }

      const post = this.props.detailPost;
      const user = this.props.users.find((user) => user.id === post.userId);

      return (
         <div className="container mt-5 justify-content-center row ">
            <div className="col-6">
               <div className="card">
                  <div className="card-header">
                     <strong> {post.title}</strong>
                  </div>
                  <div className="card-body">
                     <p> {post.body}</p>
                  </div>
                  <div className="card-footer">
                     <p>By: {user.name}</p>
                     <p>Email;: {user.email}</p>
                     <p>City: {user.address.city}</p>
                  </div>
                  <Link to={"/"} className="btn btn-primary">
                     Kembali
                  </Link>
               </div>
            </div>
         </div>
      );
   }
}

const stateToProps = (state) => {
   return {
      detailPost: state.DetailPost,
      users: state.Users,
   };
};

export default connect(stateToProps, { ambilDetailPost })(DetailPost);
