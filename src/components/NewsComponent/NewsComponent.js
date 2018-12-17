import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function trimText(text, id) {
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

const NewsComponent = props => {
  let nameOfPublisher = "Organizator";
  if (props.teamName) nameOfPublisher = props.teamName;
  else if (props.news.team) nameOfPublisher = props.news.team.name;
  return (
    <div className="flex mainContainer">
      <div className="newsContainer">
        <div className="newsHeader">{props.news.title}</div>
        <div className="newsDate">Autor: {nameOfPublisher}</div>
        <div className="newsDate">{moment(props.news.dateOfPublication).format("DD.MM.YYYY HH:mm")}</div>
        <div className="newsText">{trimText(props.news.content, props.news.id)}</div>
      </div>
    </div>
  );
};

export default NewsComponent;
