import { useEffect, useRef } from "react";

export const useTitle = (title: string) => {
  const documentDefined = typeof document !== "undefined";
  const originalTitle = useRef(documentDefined ? document.title : null);

  useEffect(() => {
    if (!documentDefined) return;

    const currentTitle = originalTitle.current; // Capture the current value

    if (document.title !== title) document.title = title;

    return () => {
      document.title = currentTitle || 'GitYo';
    };
  }, [title, documentDefined]);
};