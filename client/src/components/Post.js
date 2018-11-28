import React from "react";
import moment from "moment";

const Post = ({ post }) => {
  if (!post.message && !post.story) return null;

  const text = post.message || post.story;
  const createdTime = post.created_time;
  const permalink = post.permalink_url;
  const picture = post.full_picture;
  const shares = post.shares ? post.shares.count : 0;

  return (
    <div className="card">
      <div class="card-image">
        <img src={picture} />
      </div>
      <div className="card-content">
        <p>{text}</p>
      </div>
      <div className="card-action">
        <p>
          <span>Shares: {shares}</span>
          <span className="right">
            <a href={permalink}>{moment(createdTime).calendar()}</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Post;
