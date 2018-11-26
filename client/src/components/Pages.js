import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Pages extends Component {
  state = { pages: [] };
  componentDidMount() {
    const { accessToken } = this.props;
    axios.get(`/api/pages?access_token=${accessToken}`).then(response => {
      this.setState({ pages: response.data });
    });
  }

  render() {
    const { pages } = this.state;

    return (
      <div className="container fb-pages">
        {pages.map(({ id, name, category }) => (
          <Link to={`/page/${id}`} key={id}>
            <div className="card hoverable">
              <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Pages;
