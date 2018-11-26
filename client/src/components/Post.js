import React from "react";
import moment from "moment";

const Post = ({ post }) => {
  if (!post.message && !post.story) return null;

  const text = post.message || post.story;
  const createdTime = post.create_time;
  const permalink = post.permalink_url;

  return (
    <div className="card">
      <div className="card-content">
        <p>{text}</p>
      </div>
      <div className="card-action">
        <p className="right-align">
          <a href={permalink}>{moment(createdTime).calendar()}</a>
        </p>
      </div>
    </div>
  );
};

export default Post;
