import React from "react";
import moment from "moment";

const Post = ({ post }) => {
  if (!post.message && !post.story) return null;

  const text = post.message || post.story;
  const createdTime = post.create_time;

  return (
    <div className="card">
      <div className="card-content">
        <p>{text}</p>
      </div>
      <div className="card-action">
        <p className="right-align">{moment(createdTime).calendar()}</p>
      </div>
    </div>
  );
};

export default Post;
