import React, { Component } from "react";
import axios from "axios";

import Post from "./Post";

class Page extends Component {
  state = { page: null, feed: [] };

  componentDidMount() {
    const { accessToken, id } = this.props;
    axios.get(`/api/page/${id}?access_token=${accessToken}`).then(response => {
      this.setState({ page: response.data });
    });

    axios
      .get(`/api/page/${id}/feed?access_token=${accessToken}`)
      .then(response => {
        this.setState({ feed: response.data });
      });
  }

  render() {
    const { page, feed } = this.state;

    if (page)
      return (
        <div className="container fb-page">
          <h2>{page.name}</h2>
          <div className="card z-depth-0">
            <div className="card-content">
              <p>Name: {page.name}</p>
              <p>Category: {page.category}</p>
              <p>About: {page.about}</p>
              <p>Fan count: {page.fan_count}</p>
            </div>
          </div>

          <h4>Page feed</h4>
          {feed
            .filter(post => post.message || post.story)
            .map(post => ({ ...post, text: post.message || post.story }))
            .map(post => (
              <Post
                key={post.id}
                text={post.text}
                createdTime={post.created_time}
              />
            ))}
        </div>
      );

    return null;
  }
}

export default Page;
