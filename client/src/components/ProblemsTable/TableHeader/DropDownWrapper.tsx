import React, { useRef } from "react";
import useMenuClose from "../../../hooks/useMenuClose";

interface DropDownWrapperProps {
  children: React.ReactNode;
  menuVisible: boolean;
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DropDownWrapper(props: DropDownWrapperProps) {
  // Reference to the wrapper containing dropdown btn and menu
  const dropDownRef = useRef<HTMLDivElement>(null);

  // To close menu on specific actions
  useMenuClose(props.menuVisible, props.setMenuVisible, dropDownRef);

  return (
    <div ref={dropDownRef} className="relative w-full md:w-auto">
      {props.children}
    </div>
  );
};

