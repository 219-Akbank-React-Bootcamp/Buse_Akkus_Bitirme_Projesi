import React, { FC, useState } from "react";

import { X } from "react-feather";
import { Styled } from "./CurrentInput.styled";
import { CurrentInputProps } from "./CurrentInput.types";

const CurrentInput: FC<CurrentInputProps> = (props) => {
  const {
    text,
    onSubmit,
    displayClass,
    editClass,
    placeholder,
    defaultValue,
    buttonText,
  } = props;
  const [isCurrentInput, setIsCurrentInput] = useState(false);
  const [inputText, setInputText] = useState(defaultValue || "");

  const submission = (e: any) => {
    e.preventDefault();
    if (inputText && onSubmit) {
      setInputText("");
      onSubmit(inputText);
    }
    setIsCurrentInput(false);
  };

  return (
    <Styled>
      <div className="current-input">
        {isCurrentInput ? (
          <form
            className={`current-input-edit ${editClass ? editClass : ""}`}
            onSubmit={submission}
          >
            <input
              type="text"
              value={inputText}
              placeholder={placeholder || text}
              onChange={(event) => setInputText(event.target.value)}
              autoFocus
            />
            <div className="current-input-edit-footer">
              <button type="submit">{buttonText || "Add"}</button>
              <X
                onClick={() => setIsCurrentInput(false)}
                className="closeIcon"
              />
            </div>
          </form>
        ) : (
          <p
            className={`current-input-display ${
              displayClass ? displayClass : ""
            }`}
            onClick={() => setIsCurrentInput(true)}
          >
            {text}
          </p>
        )}
      </div>
    </Styled>
  );
};

export default CurrentInput;
