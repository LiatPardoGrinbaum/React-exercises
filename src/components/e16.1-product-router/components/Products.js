import React from "react";
import store from "./store";
import { Link } from "react-router-dom";

class Products extends React.Component {
  state = { store: [] };

  componentDidMount() {
    this.setState({ store: store });
  }
  render() {
    return (
      <div>
        {this.state.store.map((product) => {
          return (
            <div key={product.id}>
              <Link to={`/product/:${product.id}`}>{product.title}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Products;
