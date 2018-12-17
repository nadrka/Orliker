import React, { Component } from "react";
import "./News.css";
import { Link } from "react-router-dom";
import { getData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import moment from "moment";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import NewsComponent from "../../components/NewsComponent/NewsComponent";

class News extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    this.getAllNewses();
  }

  getAllNewses = async () => {
    let news = await getData(`${ROUTES.NEWSES}`);
    this.setState({ news });
  };

  renderNewses = () => {
    const newses = this.state.news.map((news, i) => {
      return <NewsComponent news={news} />;
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
