import { useEffect, useState } from "react";

const TYPE_SPEED = 70;
const DELETE_SPEED = 35;
const HOLD_DURATION = 1800;

// Types each word, holds it, deletes it, then moves on to the next one.
// Starts with the first word fully typed so the server-rendered HTML is complete.
const useTypewriter = (words: string[]) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const word = words[index];
    const isTyped = !deleting && text === word;
    const isCleared = deleting && text === "";
    const delay = isTyped ? HOLD_DURATION : deleting ? DELETE_SPEED : TYPE_SPEED;

    const timeout = setTimeout(() => {
      if (isTyped) {
        setDeleting(true);
      } else if (isCleared) {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      } else {
        setText(deleting ? text.slice(0, -1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [words, index, text, deleting]);

  return text;
};

export default useTypewriter;
