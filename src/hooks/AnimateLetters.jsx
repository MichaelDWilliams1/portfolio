import React from "react";
import { useEffect, useState } from "react";

const AnimateLetters = ({ letters }) => {
  const [text, setText] = useState("");
  const textState = ["istyping", "isdeleting"];
  const [typing, setTyping] = useState(textState[0]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {

      if (typing === "istyping" && text !== letters[count]) {
        setText(letters[count].slice(0, text.length + 1));
      } else if (text === letters[count] && typing === "istyping") {
        sleep(2000).then(() => {
          setTyping(textState[1]);
        });
      } else if (
        (text === letters[count] && typing === "isdeleting") ||
        typing === "isdeleting"
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
