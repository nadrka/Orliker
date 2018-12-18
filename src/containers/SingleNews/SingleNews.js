import React, { Component } from "react";
import "./SingleNews.css";
import { Link } from "react-router-dom";
import { getData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import moment from "moment";

class SingleNews extends Component {
  state = {
    currentNews: null
  };
  async componentDidMount() {
    let news = await getData(`${ROUTES.NEWSES}/${this.props.match.params.id}`);
    this.setState({ currentNews: news });
  }

  render() {
    return (
      <div className="flex mainContainer">
        <div className="header">
          <Link
            onClick={() => this.props.history.goBack()}
            className="btn btn-info btn-lg"
            style={{
              backgroundColor: "#d3d3d3",
              borderColor: "#d2d2d2"
            }}
          >
            <span className="glyphicon glyphicon-arrow-left" />
          </Link>
          Aktualności
        </div>
        {this.state.currentNews && (
          <div className="newsContainer">
            <div className="newsHeader">{this.state.currentNews.title}</div>
            <div className="newsDate">
              {moment(this.state.currentNews.dateOfPublication).format("DD.MM.YYYY HH:mm")}
            </div>
            <div className="newsText">{this.state.currentNews.content}</div>
          </div>
        )}
      </div>
    );
  }
}

export default SingleNews;
