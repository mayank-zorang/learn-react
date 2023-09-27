import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This Page is about the Food company</h2>
        <UserClass name={"Anant Pandey"} location={"Kharagpur"} />
      </div>
    );
  }
}

// const About = () => {};

export default About;
