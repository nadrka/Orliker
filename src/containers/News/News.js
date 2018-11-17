import React, { Component } from "react";
import "./News.css";
import { Link } from "react-router-dom";

class News extends Component {
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
  render() {
    return (
      <div className="flex mainContainer">
        <div className="header">Aktualności</div>
        <div className="newsContainer">
          <div className="newsHeader">Lorem ipsum</div>
          <div className="newsDate">07.10.2018 15:43</div>
          <div className="newsText">{this.trimText(this.text)}</div>
        </div>
        <div className="newsContainer">
          <div className="newsHeader">Lorem ipsum</div>
          <div className="newsDate">07.10.2018 15:43</div>
          <div className="newsText">{this.trimText(this.text)}</div>
        </div>
      </div>
    );
  }
}

export default News;
