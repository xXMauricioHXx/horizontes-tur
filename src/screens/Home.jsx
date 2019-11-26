import React from "react";
import { Menu } from "../components/Menu";
import Article from "../components/Article";
import Footer from "../components/Footer";
import { GridBoxImage } from "../components/GridBoxImage";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container-fluid p-0">
        <header>
          <Menu />
          <section>
            <h2>Horizontes Tur</h2>
            <span>Explore</span>
          </section>
        </header>
      </div>
      <section className="container-fluid about">
        <div className="container">
          <div className="row">
            <Article
              class={"col-xs-12 col-md-4"}
              image={"./assets/imgs/map.png"}
            >
              Vivamus ac laoreet nibh. Suspendisse eu faucibus eros, sit amet
              lobortis risus. Nullam suscipit sed arcu quis fringilla. Praesent
              malesuada risus nec commodo facilisis. Etiam malesuada a mauris
              vel convallis. Nunc arcu velit, pellentesque sed condimentum in,
              pretium id nulla. Pellentesque auctor dui augue, id porttitor enim
              luctus a.
            </Article>
            <Article
              class="col-xs-12 col-md-4 mt-4"
              image="./assets/imgs/bus.png"
            >
              Vivamus ac laoreet nibh. Suspendisse eu faucibus eros, sit amet
              lobortis risus. Nullam suscipit sed arcu quis fringilla. Praesent
              malesuada risus nec commodo facilisis. Etiam malesuada a mauris
              vel convallis. Nunc arcu velit, pellentesque sed condimentum in,
              pretium id nulla. Pellentesque auctor dui augue, id porttitor enim
              luctus a.
            </Article>
            <Article
              class="col-xs-12 col-md-4 mt-4"
              image="./assets/imgs/photo.png"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              fermentum auctor venenatis. Mauris at aliquet purus. Pellentesque
              facilisis diam in venenatis aliquet. Vivamus iaculis mi eu lacus
              suscipit faucibus. Mauris sem nisi, faucibus vitae urna id,
              egestas ultrice s erat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse potenti. Donec sem leo, semper id
              metus at, pellentesque luctus massa.
            </Article>
          </div>
        </div>
      </section>
      <section className="last-travel">
        <h2>Últimas Viagens</h2>
        <div className="container-fluid">
          <div className="row">
            <GridBoxImage imageBg="image-bg-1" title="Torres">
              Suspendisse potenti. Donec sem leo, semper id metus at, luctus
              massa.
            </GridBoxImage>
            <GridBoxImage imageBg="image-bg-2" title="Canela">
              Suspendisse potenti. Donec sem leo, semper id metus at, luctus
              massa.
            </GridBoxImage>
            <GridBoxImage imageBg="image-bg-3" title="Gramado">
              Suspendisse potenti. Donec sem leo, semper id metus at, luctus
              massa.
            </GridBoxImage>
            <GridBoxImage imageBg="image-bg-4" title="Cataratas">
              Suspendisse potenti. Donec sem leo, semper id metus at, luctus
              massa.
            </GridBoxImage>
          </div>
          <div className="row">
            <GridBoxImage imageBg="image-bg-5" title="Torres">
              Suspendisse potenti. Donec sem leo, semper id metus at, luctus
              massa.
            </GridBoxImage>
            <GridBoxImage imageBg="image-bg-6" title="Canela">
              Suspendisse potenti. Donec sem leo, semper id metus at, luctus
              massa.
            </GridBoxImage>
            <GridBoxImage imageBg="image-bg-7" title="Gramado">
              Suspendisse potenti. Donec sem leo, semper id metus at, luctus
              massa.
            </GridBoxImage>
            <GridBoxImage imageBg="image-bg-8" title="Cataratas">
              Suspendisse potenti. Donec sem leo, semper id metus at, luctus
              massa.
            </GridBoxImage>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
