import { useState } from "react";

function useLastesHookValue() {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount,
  };
}

export default useLastesHookValue;
