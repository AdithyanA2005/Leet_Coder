import { useEffect, useCallback, RefObject } from "react";

type Keys = string[];

export default function useMenuClose(
  expanded: boolean = false,
  setExpanded: (value: boolean) => void = () => {},
  wrapperRef: RefObject<HTMLElement> | null = null,
  keys: Keys = ["Escape"]
) {
  // Close menu when clicked outside of wrapper
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!wrapperRef?.current?.contains(e.target as Node)) {
        setExpanded(false);
      }
    },
    [setExpanded, wrapperRef]
  );

  // Close menu when `Escape` key is pressed
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (keys.includes(e.code)) setExpanded(false);
    },
    [keys, setExpanded]
  );

  useEffect(() => {
    if (!wrapperRef || !wrapperRef.current) return;

    if (expanded) {
      document.addEventListener("click", handleClick);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [expanded, handleClick, handleKeyDown, wrapperRef]);
};

