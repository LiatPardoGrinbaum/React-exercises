import React from "react";
import store from "./store";
import "../style.css";
import { Link } from "react-router-dom";

class ProductDetail extends React.Component {
  state = { store: [] };

  componentDidMount() {
    this.setState({ store: store });
  }
  /*   getProductById = () => {
    //id from params is a string!
    let index = this.props.match.params.id.slice(1);
    const products = this.state.store;
    const productObj = products.find((product) => {
      if (Number(index) === product.id) {
        return product;
      }
    });
    console.log(productObj);
    return productObj;
  }; */
  render() {
    // const productObj = this.getProductById();
    const products = this.state.store;
    let index = this.props.match.params.id;
    let indexNum = Number(index) - 1;
    console.log(this.state.store);
    return (
      <div>
        <button style={{ margin: "5px" }}>
          <Link to={"/products"}>back</Link>
        </button>
        {/*         {products.map((product) => {
          if (Number(index) === product.id) {
          
            return (
              <div className="productContainer">
                <h1>{product.title}</h1>
                <p>{`Prics: ${product.price} $`}</p>
                <div>
                  <img className="productImg" src={product.imageUrl}></img>
                </div>
              </div>
            );
          }
        })} */}

        {products.length > 0 && (
          <div className="productContainer">
            <h1>{products[indexNum].title}</h1>
            <p>{`Prics: ${products[indexNum].price} $`}</p>
            <div>
              <img className="productImg" src={products[indexNum].imageUrl}></img>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductDetail;
