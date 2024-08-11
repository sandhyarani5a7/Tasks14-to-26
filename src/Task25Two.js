import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Task25Two = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.error('Error fetching the post:', err);
      });
  }, []);

  return (
    <div>
      <h1>Post Details</h1>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

export default Task25Two;
