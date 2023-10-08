import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        Location: "Deafult",
        avatar_url:
          "https://i.pinimg.com/originals/a5/b3/05/a5b3058977325b1d4664380d7e7623c3.jpg",
        Contact: "@mkpaswan007",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mayank-zorang");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("json: ", json);
  }

  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card m-4 p-4 bg-gray-100 rounded-lg">
        <img src={avatar_url} />
        <h2>{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @{login}</h4>
      </div>
    );
  }
}

export default UserClass;

/*
----------MOUNTING-------------
  Constructor (dummy)
  Render (dummy)
    <HTHL Dummy >
  Component Did MOunt
    <API Call>
    <this.setState> - State variable is updated
-------------UPDATE----------------
  render (APi data)
    <HTML (new API data>)
  camponentDid Update
*/
