import React, { FC } from "react";
import { Styled } from "./Modal.styled";
import { ModalProps } from "./Modal.types";

const Modal: FC<ModalProps> = (props) => {
  return (
    <Styled>
      <div
        className="modal"
        onClick={() => (props.onClose ? props.onClose() : "")}
      >
        <div
          className="modal-content custom-scroll"
          onClick={(event) => event.stopPropagation()}
        >
          {props.children}
        </div>
      </div>
    </Styled>
  );
};

export default Modal;
