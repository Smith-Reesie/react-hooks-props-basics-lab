import React from "react";

function Home(props) {
  // console.log(props)
  const {name, city} = props.user
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
