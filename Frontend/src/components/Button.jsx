import { useState } from "react";

function Button() {
  let [count, counter] = useState("Red");

  let colours = ["Red", "Blue", "Yellow", "Purple", "Grey"];

  function handleSwitch() {
    for (let i = 0; i < colours.length; i++) {
      if (count === colours[i]) {
        counter(colours[i + 1]);
        console.log(i);
      }
      if (count === colours[colours.length - 1]) {
        counter(colours[0]);
      }
    }
  }

  return (
    <>
      <button className="search-button" onClick={() => handleSwitch()}>
        State: {count}
      </button>
    </>
  );
}

export default Button;
