import { useLayoutEffect, useState } from "react";

const globalAny:any = global;

const useIsDark = () => {
  const [isDark, setIsDark] = useState(false);
  useLayoutEffect(() => {
    if (!globalAny.matchMedia) {
      return () => {};
    }
    const media = globalAny.matchMedia("(prefers-color-scheme: dark)");
    if (media.matches) {
      setIsDark(true);
    }
    if (media.addListener) {
      const callback = (evt: any) => {
        setIsDark(!!evt.matches);
      };

      media.addListener(callback);
      if (media.removeListener) {
        return () => media.removeListener(callback);
      }
    }
    return () => {};
  }, []);
  return isDark;
};

export default useIsDark;
