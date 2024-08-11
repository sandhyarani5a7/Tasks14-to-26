import React, { Component } from 'react';
import axios from 'axios';

class Task25 extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => {
        this.setState({ posts: res.data.slice(0, 5) });
      })
      .catch((err) => {
        console.error('Error fetching posts:', err);
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h1>First 5 Posts</h1>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <p>No posts available!</p>
        )}
      </div>
    );
  }
}

export default Task25;
