import React from "react";
import "./GridBoxImage.css";

export class GridBoxImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  setActive() {
    this.setState({
      active: true
    });
  }

  setDesactive() {
    this.setState({
      active: false
    });
  }

  render() {
    return (
      <div
        className={`col-xs-12 col-sm-4 col-md-3 p-0 bg-img ${this.props.imageBg}`}
        onMouseOver={this.setActive.bind(this)}
        onMouseLeave={this.setDesactive.bind(this)}
      >
        <div
          className={`more-information ${this.state.active ? "slidein" : ""}`}
        >
          <i className="material-icons">add</i>
        </div>
        <div className={`description ${this.state.active ? "slideup" : ""}`}>
          <h4>{this.props.title}</h4>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}
