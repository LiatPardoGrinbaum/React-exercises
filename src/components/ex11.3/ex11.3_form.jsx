import React from "react";
import "../ex11.3/style.css";

//didn't finish the whole exercise but wrote below comments of how should probably solve it.
class Form extends React.Component {
  state = {
    fnameValue1: "",
    lnameValue2: "",
    emailValue3: "",
  };

  handleSubmit = () => {
    //when submiting- we want to get a message (with confirm window?..) that asks the user weather he\she wants to review the form. if no then submit. if yes- the create a new componnet that takes values as props from this current component (the parent) and show it on screen. inside add 2 buttons- one to go back to the form and edit it, and the other to send the survey (submit)
    //find out how can i return? I think just to remove the pop up div/component? maybe use booleans and state to know if its hidden or shown.
  };
  render() {
    console.log(this.state.fnameValue1);
    console.log(this.state.lnameValue2);
    console.log(this.state.emailValue3);
    return (
      <div className="inner-container">
        <fieldset>
          <legend>Contact Me</legend>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                value={this.state.fnameValue1}
                onChange={(e) => {
                  this.setState({ fnameValue1: e.target.value });
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                value={this.state.lnameValue2}
                onChange={(e) => {
                  this.setState({ lnameValue2: e.target.value });
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={this.state.emailValue3}
                onChange={(e) => {
                  this.setState({ emailValue3: e.target.value });
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="select">Age:</label>
              {/* find out how do i make select and options controlled */}
              <select id="select">
                <option>0-15</option>
                <option>16-40</option>
                <option>41-55</option>
                <option>56-100</option>
              </select>
            </div>
            <div>
              {/* need to make it controlled too! */}
              <label htmlFor="textarea">Free Text</label>
              <textarea id="textarea"></textarea>
            </div>
            <input type="submit" value="Continue"></input>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default Form;
