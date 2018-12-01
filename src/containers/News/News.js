import React, { Component } from "react";
import "./News.css";
import { Link } from "react-router-dom";
import { getData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";

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

  text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit in augue nec interdum. In in nunc nibh. Fusce malesuada lorem eget enim volutpat, eu hendrerit nunc consectetur. Donec cursus sagittis libero, et scelerisque sapien sagittis a. Maecenas eleifend cursus diam, eu viverra arcu suscipit maximus. Ut a ipsum sollicitudin, ultrices magna a, dapibus nisi. Proin at placerat odio. Fusce mollis sed leo mattis elementum. Suspendisse potenti.\n Duis eu placerat lorem, id iaculis elit. Sed diam lectus, ultricies nec eros ut, ornare aliquam elit. Nunc tristique nulla ut efficitur dignissim. Vestibulum at convallis risus. Fusce quis tempor lectus, eu imperdiet lorem. Integer ac sollicitudin lectus, sit amet gravida sem. Vivamus quis ex tincidunt, dapibus justo in, ullamcorper neque. Vivamus nec fringilla metus. Sed pretium tincidunt finibus. Quisque mollis metus sit amet finibus pharetra.";

  trimText(text) {
    if (text.length > 250) {
      return (
        <div>
          {text.substring(0, 450) + "..."}{" "}
          <Link className="linkContainer" to="/singleNews">
            Zobacz więcej
          </Link>
        </div>
      );
    } else return text;
  }

  renderNewses = () => {
    const newses = this.state.news.map((news, i) => {
      return (
        <div className="newsContainer">
          <div className="newsHeader">{news.title}</div>
          <div className="newsDate">{news.dateOfPublication}</div>
          <div className="newsText">{this.trimText(news.content)}</div>
        </div>
      );
    });
    return newses;
  };

  render() {
    return (
      <div className="flex mainContainer">
        <div className="header">Aktualności</div>
        {this.renderNewses()}
      </div>
    );
  }
}

export default News;
