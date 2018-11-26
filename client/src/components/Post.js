import React from "react";
import moment from "moment";

const Post = ({ text, createdTime }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p>{text}</p>
      </div>
      <div className="card-action">
        <p>Created time: {moment(createdTime).calendar()}</p>
      </div>
    </div>
  );
};

export default Post;
