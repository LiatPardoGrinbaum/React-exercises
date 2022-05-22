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
    // this.filterAvatars();
  };

  //not working well. why isn't it go back when I delete letters in the input text area?
  //all cards dissapear...
  // why is it "slow"?
  // filterAvatars = () => {
  //   const filteredArr = this.state.avatarArr.filter((avatarObj) => {
  //     let fullName = avatarObj.name.first.toLowerCase() + " " + avatarObj.name.last.toLowerCase();
  //     return fullName.includes(this.state.inputVal.toLowerCase());
  //   });
  //   this.setState({ avatarArr: filteredArr });
  // };

  render() {
    return (
      <div className="page-container">
        <Input onChangeEvent={this.onChangeInput} />
        <MapAvatar avatars={this.state.avatarArr} inputval={this.state.inputVal} />
      </div>
    );
  }
}

export default Ex13_2_avatar;
