import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DropDownWrapper from "./DropDownWrapper";
import DropDownMenu from "./DropDownMenu";
import DropDownBtn from "./DropDownBtn";
import DropDownItem from "./DropDownItem";

export default function TableHeader() {
  const [tagsMenuVisible, setTagsMenuVisible] = useState<boolean>(false);
  const [difficultyMenuVisible, setDifficultyMenuVisible] = useState<boolean>(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      {/* Action Buttons */}
      <div className="w-full md:w-auto flex flex-row items-center gap-2 sm:gap-3">
        {/* Difficulty Dropdown */}
        <DropDownWrapper menuVisible={difficultyMenuVisible} setMenuVisible={setDifficultyMenuVisible}>
          <DropDownBtn btnText="Difficulty" handleOnClick={() => setDifficultyMenuVisible(prev => !prev)} />

          <DropDownMenu visible={difficultyMenuVisible}>
            {["Easy", "Medium", "Difficult"].map((itemText) => (
              <DropDownItem key={itemText} itemText={itemText} />
            ))}
          </DropDownMenu>
        </DropDownWrapper>

        {/* Tags Dropdown */}
        <DropDownWrapper menuVisible={tagsMenuVisible} setMenuVisible={setTagsMenuVisible} >
          <DropDownBtn btnText="Tags" handleOnClick={() => setTagsMenuVisible(prev => !prev)} />

          <DropDownMenu visible={tagsMenuVisible}>
            {["Array", "String", "Linked List", "Stack", "Queue", "Tree", "Recursion", "Bit Manipulation", "Bitmask", "Binary Search", "Binary Tree"].map((itemText) => (
              <DropDownItem key={itemText} itemText={itemText} />
            ))}
          </DropDownMenu>
        </DropDownWrapper>
      </div>


      {/* Search Bar */}
      <div className="relative w-full md:w-1/2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FontAwesomeIcon icon={faSearch} className="text-gray-500 dark:text-gray-400" />
        </div>

        <input
          type="text"
          placeholder="Search"
          className="block w-full pl-10 p-2 text-sm rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus-visible:transition focus-visible:duration-150 focus-visible:ease-in-out focus-visible:ring ring-indigo-300"
        />
      </div>
    </div>
  );
};

