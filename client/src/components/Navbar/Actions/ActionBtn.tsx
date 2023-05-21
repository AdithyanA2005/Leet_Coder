import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ActionBtnProps {
  handleOnClick: () => void;
  btnText: string;
  icon: IconDefinition;
  children?: React.ReactNode;
};

export default function ActionBtn(props: ActionBtnProps) {
  return (
    <button
      onClick={props.handleOnClick}
      className="relative w-full flex items-center justify-between gap-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 focus-visible:transition focus-visible:duration-150 focus-visible:ease-in-out outline-none focus-visible:ring ring-gray-300 dark:ring-gray-600"
    >
      {/* The icon and text */}
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={props.icon}
          className="h-5 w-5 text-gray-500 dark:text-gray-400"
        />
        <span className="text-md font-medium text-gray-900 dark:text-gray-300">
          {props.btnText}
        </span>
      </div>

      {props.children}
    </button>
  );
};

