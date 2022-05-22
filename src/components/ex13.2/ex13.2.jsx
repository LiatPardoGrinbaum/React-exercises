import React from "react";
import Axios from "axios";
import MapAvatar from "./mapAvatar.jsx";
import Input from "./input.jsx";
import "../ex13.2/style.css";

class Ex13_2_avatar extends React.Component {
  state = {
    avatarArr: [],
    filteredArr: [],
    inputVal: "",
  };

  componentDidMount = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/?results=10");
    console.log(data.results);
    this.setState({
      avatarArr: data.results,
    });
  };

  onChangeInput = (inputValue) => {
    this.setState({ inputVal: inputValue });
    this.filterAvatars();
  };

  filterAvatars = () => {
    const filteredArr = this.state.avatarArr.filter((avatarObj) => {
      let fullName = avatarObj.name.first.toLowerCase() + " " + avatarObj.name.last.toLowerCase();
      if (fullName.includes(this.state.inputVal.toLowerCase())) {
        return avatarObj;
      }
    });
    this.setState({ avatarArr: filteredArr });
  };

  render() {
    return (
      <div className="page-container">
        <Input onChangeEvent={this.onChangeInput} />
        <MapAvatar avatars={this.state.avatarArr} />
      </div>
    );
  }
}

export default Ex13_2_avatar;
