import { useRef, useEffect } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef();
  useEffect(() => {
    if (!ref.current) return;
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    const cb = (entries) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);

    return () => {
      if (observer.current) observer.current.disconnect(); // Очищення observer при видаленні компонента
    };
  }, [isLoading]);
};
