import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { server } from './config/config';
import './App.css';

const App = () => {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]); // Store comments

  useEffect(() => {
    axios.get(`${server}/video`).then(res => setVideo(res.data));
    fetchComments(); // Fetch comments when the app loads
  }, []);

  const fetchComments = () => {
    axios.get(`${server}/comments`).then(res => setComments(res.data));
  };

  const updateTitle = () => {
    axios.put(`${server}/video/title`, { title }).then(() => alert('Title updated'));
  };

  const addComment = () => {
    axios.post(`${server}/comment`, { comment }).then(() => {
      alert('Comment added');
      setComment(''); // Clear input
      fetchComments(); // Refresh comments
    });
  };

  const deleteComment = (id) => {
    axios.delete(`${server}/comment/${id}`).then(() => {
      alert('Comment deleted');
      fetchComments(); // Refresh comments
    });
  };

  return (
    <>
      <header className="header">YouTube API Viewer</header>

      <div className="container">
        {video && (
          <div className="video-section">
            <h1 className="video-title">{video.items[0].snippet.title}</h1>
            <iframe
              className="video-frame"
              src={`https://www.youtube.com/embed/${video.items[0].id}`}
            ></iframe>
          </div>
        )}

        {/* Update Title */}
        <input type="text" placeholder="New Title" value={title} onChange={(e) => setTitle(e.target.value)} className="input-field" />
        <button onClick={updateTitle} className="button blue">Update Title</button>

        {/* Add Comment */}
        <input type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} className="input-field" />
        <button onClick={addComment} className="button green">Add Comment</button>

        {/* Display Comments */}
        <div className="comments-section">
          <h2>Comments</h2>
          {comments.length === 0 ? (
            <p>No comments yet</p>
          ) : (
            <ul>
              {comments.map((c) => (
                <li key={c._id} className="comment-item">
                  {c.comment}
                  <button onClick={() => deleteComment(c._id)} className="button red">Delete</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
