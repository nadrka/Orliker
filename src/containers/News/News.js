import React, { Component } from "react";
import "./News.css";
import { Link } from "react-router-dom";
import { getData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import moment from "moment";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

class News extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    this.getAllNewses();
  }

  getAllNewses = async () => {
    let news = await getData(`${ROUTES.NEWSES}`);
    console.log(news);
    this.setState({ news });
  };

  trimText(text, id) {
    if (text.length > 250) {
      return (
        <div>
          {text.substring(0, 450) + "..."}{" "}
          <Link className="linkContainer" to={"/singleNews/" + id}>
            Zobacz więcej
          </Link>
        </div>
      );
    } else return text;
  }

  renderNewses = () => {
    const newses = this.state.news.map((news, i) => {
      return (
        <div className="flex mainContainer">
          <div className="newsContainer">
            <div className="newsHeader">{news.title}</div>
            <div className="newsDate">Autor: {news.team ? news.team.name : "Organizator"}</div>
            <div className="newsDate">{moment(news.dateOfPublication).format("DD.MM.YYYY HH:mm")}</div>
            <div className="newsText">{this.trimText(news.content, news.id)}</div>
          </div>
        </div>
      );
    });
    return newses;
  };

  renderButton() {
    console.log(this.props.user);
    if (this.props.user && (this.props.user.role === "Admin" || this.props.user.isCaptain))
      return (
        <div className="flex buttonOnRight">
          <Link to="/addNews">
            <Button bsStyle="primary">Dodaj nowy post</Button>
          </Link>
        </div>
      );
    return null;
  }

  render() {
    return (
      <div className="flex columnFlex">
        <div className="flex topSection" style={{ justifyContent: "center" }}>
          <div className="flex class">
            <div className="bigFontBigMargin">Aktualności</div>
          </div>
          {this.renderButton()}
        </div>
        {this.renderNewses()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(News);
