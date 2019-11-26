import React from "react";
import "./Article.css";

const Article = props => {
  return (
    <article className={props.class}>
      <img src={props.image} alt={""} />
      {props.children}
    </article>
  );
};

export default Article;
