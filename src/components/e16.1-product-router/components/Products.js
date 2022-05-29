import React from "react";
import store from "./store";
import { Link } from "react-router-dom";

class Products extends React.Component {
  state = { store: [] };

  componentDidMount() {
    this.setState({ store: store });
  }
  // the below i could also define inside a function and call it below.. i can also return (with map) more divs and html element for each card.
  //can make it all inside all inside the link (<link> blala</link>) includong passing props.
  render() {
    return (
      <div>
        {this.state.store.map((product) => {
          return (
            <div key={product.id}>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Products;
