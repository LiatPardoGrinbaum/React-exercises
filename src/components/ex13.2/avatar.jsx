import React from "react";
import "../ex13.2/style.css";

class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar-container">
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
        </div>
        <div className="picture">
          <img src={this.props.picture} alt=""></img>
        </div>
      </div>
    );
  }
}

export default Avatar;
