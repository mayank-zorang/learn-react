import { useEffect, useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const count2 = useState(2);

  useEffect(()=> {
    //api call
  },[])
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p>count: {count}</p>
      <p>count2: {count2}</p>


      <h3>Location: Gurugram</h3>
      <h4>Contact: @mkpaswan007</h4>
    </div>
  );
};

export default User;
