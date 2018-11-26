import React, { Component } from "react";
import axios from "axios";

class Page extends Component {
  state = { page: null };

  componentDidMount() {
    const { accessToken, id } = this.props;
    axios.get(`/api/page/${id}?access_token=${accessToken}`).then(response => {
      this.setState({ page: response.data });
    });
  }

  render() {
    const { page } = this.state;

    if (page)
      return (
        <div className="container fb-page">
          <p>Name: {page.name}</p>
          <p>Category: {page.category}</p>
          <p>About: {page.about}</p>
          <p>Fan count: {page.fan_count}</p>
        </div>
      );

    return null;
  }
}

export default Page;
