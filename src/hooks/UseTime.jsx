import { useEffect, useRef, useState } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function UseTime() {
  const [date, setDate] = useState(new Date());
  useInterval(() => setDate(new Date()), 1000);
  return date.toLocaleTimeString();
}
