import { useEffect, useState } from "react";
import "./Selct.css";
import axios from "axios";
function Select() {
  const [text, settext] = useState("all categore");
  const [selectIndex, setSelectIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(function () {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => setAllCategories(data));
  }, []);

  function test() {
    console.log(allCategories);
  }

  test();
  function handelOpen() {
    setIsOpen(() => !isOpen);
  }

  function closeSelect(index, itemName) {
    setSelectIndex(index);
    setIsOpen(false);
    settext(itemName);
  }

  return (
    <>
      <span className="cursor" onClick={handelOpen}>
        {text}
      </span>
      {isOpen && (
        <div className="cat_input">
          <input type="text" />
          <ul className="list-unstyled">
            {allCategories.map((element, index) => (
              <li
                onClick={() => closeSelect(index, element.categore_name)}
                className={selectIndex == index ? "active" : ""}
              >
                {element.categore_name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Select;
