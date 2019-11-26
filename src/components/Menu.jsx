import React, { Component } from "react";
import "./Menu.css";

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: window.pageYOffset,
      active: false
    };
  }

  render() {
    return (
      <nav className={this.state.scroll > 122 ? "bg-white row m-0" : "row m-0"}>
        <div className="container">
          <div className="row">
            <div className="col">
              <span>Horizontes Tur</span>
            </div>
            <div
              className={`col d-xs-block d-sm-none mobile ${this.state.active &&
                "slidein-menu p-0"}`}
            >
              <span>Horizontes Tur</span>
              <ul className="container-fluid menu-mobile p-0">
                <li>
                  <a href="#">
                    <i className="material-icons">home</i>Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="material-icons">info</i>Sobre
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="material-icons">ballot</i>Promoções
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <i
                className={`material-icons d-xs-block d-sm-none`}
                onClick={this.active.bind(this)}
              >
                dehaze
              </i>
              <ul className="container d-none d-sm-block">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Promoções</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  active() {
    this.setState({
      active: this.state.active ? false : true
    });
  }

  handleScroll() {
    const scrollTop = window.scrollY;
    this.setState({
      scroll: scrollTop
    });
  }
}
