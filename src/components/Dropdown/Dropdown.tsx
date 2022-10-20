import React, { FC, useEffect, useRef } from "react";
import { Styled } from "./Dropdown.styled";
import { DropdownProps } from "./Dropdown.types";


const Dropdown: FC<DropdownProps> = (props) => {
  const dropdownRef: any = useRef();

  const handleClick = (event: any) => {
    if (
      dropdownRef &&
      !dropdownRef.current?.contains(event.target) &&
      props.onClose
    )
      props.onClose();
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <Styled>
    <div
      ref={dropdownRef}
      className={`dropdown current-scroll ${props.class ? props.class : ""}`}
    >
      {props.children}
    </div>
    </Styled>
  );
}

export default Dropdown;
