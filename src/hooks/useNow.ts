import { useMemo, useState } from "react";
const useNow = () => {
  const [now, setNow] = useState(() => ~~(new Date().getTime() / 1000));
  useMemo(() => {
    const timeout = setTimeout(() => {
      setNow(~~(new Date().getTime() / 1000));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [now]);
  return now;
};

export default useNow;
