import React, { useEffect, useState } from "react";

import Option from "../../interfaces/option";

import "./styles.css";

type MenuProps = {
    options: Option[]
}

type ItemMenuProps = {
  key: number,
  option: Option,
  animationDuration: number;
  active: boolean;
  onClick: (option: Option) => void
}

function Menu(props: MenuProps) {

  const [showMenuItem, setShowMenuItem] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const { options } = props;

  document.addEventListener('scroll', () => {
    const isTop = window.scrollY < 50;
    setIsTop(isTop);
    if(isTop) setShowMenuItem(false);
  });

  const handleOptionClick = (option: Option) => {
    const element = document.getElementById(option.id);
    if(element) {
      element.scrollIntoView({ behavior: "smooth" });
      setShowMenuItem(false);
    }
  }

  return (
    <>
      <nav className="bg-transparent p-6">
        <ul className="flex justify-center items-center gap-8 flex-wrap">
          {options.map((option : Option, index : number) => (
            <li
              key={index}
              className="text-white hover:cursor-pointer last:border-yellow-500 last:outline last:p-2 hover:text-[var(--secondary-color)]"
              onClick={() => handleOptionClick(option)}>{option.label.toUpperCase()}</li>
          ))}
        </ul>
      </nav>
      {!isTop && (
        <div className="fixed bottom-0 left-0 m-4 z-20">
          <ul className="flex flex-col gap-1 text-white left-0">
            {options.map((option: Option, index: number) => (
              <ItemMenu
              key={index}
              option={option}
              animationDuration={index}
              active={showMenuItem}
              onClick={() => handleOptionClick(option)}/>
            ))}
          </ul>
          <button
            className="btn-menu-suspended bg-menu-suspended text-white rounded-full mt-3 p-8"
            onClick={() => setShowMenuItem(prev => !prev)}
            >
              <div className={`icon-1 ${showMenuItem ? "active" : ""}`}></div>
              <div className={`icon-2 ${showMenuItem ? "active" : ""}`}></div>
              <div className={`icon-3 ${showMenuItem ? "active" : ""}`}></div>
          </button>
      </div>
      )}
    </>
  );
}

function ItemMenu (props: ItemMenuProps): JSX.Element {

  const { key, option, animationDuration, active, onClick, } = props;

  const [show, setShow] = useState(false);

  useEffect(() => {
    if(active) setShow(true);
  }, [active])

  return (
    <>
      {show && (
        <li key={key}
        style={{ "--animation-duration": `0.${9 - animationDuration}s`} as React.CSSProperties}
        className={`${active ? "animation-slidein" : "animation-slideout"} bg-menu-suspended py-3 rounded-r-2xl absoulte hover:cursor-pointer hover:w-[210px]`}
        onClick={() => {
          onClick(option);
        }}
        >{option.label.toUpperCase()}</li>)}
    </>
  )
}

export default Menu;