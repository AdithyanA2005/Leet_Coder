import { ReactNode } from "react";

interface DropDownMenuProps {
  children: ReactNode;
  visible: boolean;
};

export default function DropDownMenu(props: DropDownMenuProps) {
  return (
    <div className={`${props.visible ? "block" : "hidden"} w-full md:w-auto absolute left-0 mt-1.5 top-full bg-white z-10 rounded divide-y divide-gray-100 border border-gary-200 dark:border-gray-600 shadow dark:bg-gray-800 dark:divide-gray-600`}>
      <ul className="p-1 space-y-1 ">
        {props.children}
      </ul>
    </div>
  );
};

