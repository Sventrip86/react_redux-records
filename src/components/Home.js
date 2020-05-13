import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import Record from '../record.png';
import { connect } from 'react-redux'

class Home extends Component {
  // state = {          ****now we are grabbing the state from the store
  //   posts: [],       **** and we dont need axios anymore
  // };
  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     console.log(res);
  //     this.setState({
  //       posts: res.data.slice(0, 10),
  //     });
  //   });
  // }
  render() {
    console.log(this.props)
    // const { posts } = this.state; ****AXIOS WHEN THE STATE WAS IN App.js
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
          <img src={Record} alt="Vynil"/>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h2 className="center">Records of the week</h2>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)
