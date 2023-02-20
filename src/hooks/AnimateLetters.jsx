import React from "react";
import { useEffect, useState } from "react";

const AnimateLetters = ({ letters }) => {
  const [text, setText] = useState("");
  const textState = ["isTyping", "isDeleting"];
  const [typing, setTyping] = useState(textState[0]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {

      if (typing === "isTyping" && text !== letters[count]) {
        setText(letters[count].slice(0, text.length + 1));
      } else if (text === letters[count] && typing === "isTyping") {
        sleep(2000).then(() => {
          setTyping(textState[1]);
        });
      } else if (
        (text === letters[count] && typing === "isDeleting") ||
        typing === "isDeleting"
      ) {
        setText(letters[count].slice(0, text.length - 1));
        if (text.length <= 2) {
          setTyping(textState[0]);
          setCount(count !== letters.length - 1 ? count + 1 : 0);
        }
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [text, typing, count]);

  // this makes the animation "sleep" for 2 seconds. After 2 seconds the promise is resolved which turns our state to "isDeleting"
  // by doing this we allow our next else if statement to begin deleting letters and keeps us in the loop.
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  
  }

  return (
    <>
      {text}
      <span className="blink">|</span>
    </>
  );
};

export default AnimateLetters;
