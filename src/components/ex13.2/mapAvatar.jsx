import React from "react";
import Avatar from "./avatar.jsx";

class MapAvatar extends React.Component {
  render() {
    return (
      <div className="allAvatars-container">
        {this.props.avatars
          .filter((avatarObj) => {
            let fullName = avatarObj.name.first.toLowerCase() + " " + avatarObj.name.last.toLowerCase();
            if (this.props.inputval === "") {
              return avatarObj;
            } else if (fullName.includes(this.props.inputval.toLowerCase())) {
              return avatarObj;
            }
          })
          .map((avatarObj, key) => {
            return <Avatar name={avatarObj.name.first + " " + avatarObj.name.last} email={avatarObj.email} picture={avatarObj.picture.large} key={key} />;
          })}
      </div>
    );
  }
}

export default MapAvatar;
