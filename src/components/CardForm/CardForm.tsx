import React, { FC, useState } from "react";
import { AlignLeft, CheckSquare, Clock, MoreHorizontal } from "react-feather";

import { CardFormProps } from "../CardForm/CardForm.types";

import Label from "../Label/Label";

import { Styled } from "./CardForm.styled";

import CardItem from "../CardItem";
import Dropdown from "../Dropdown";
import { formatDate } from "../Utils";

const CardForm: FC<CardFormProps> = (props) => {
  const { card, listId, removeCard, onDragEnd, onDragEnter, updateCard } =
    props;
  const { id, title, desc, date, tasks, labels, comment } = card;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <Styled>
      <>
        {showModal && (
          <CardItem
            onClose={() => setShowModal(false)}
            card={card}
            listId={listId}
            updateCard={updateCard}
          />
        )}
        <div
          className="card"
          key={card.id}
          draggable
          onDragEnd={() => onDragEnd(listId, id)}
          onDragEnter={() => onDragEnter(listId, id)}
          onClick={() => setShowModal(true)}
        >
          <div className="card-top">
            <div className="card-top-labels">
              {labels?.map((item: any, index: any) => (
                <Label key={index} item={item} />
              ))}
            </div>
            <div
              className="card-top-more"
              onClick={(event) => {
                event.stopPropagation();
                setShowDropdown(true);
              }}
            >
              <MoreHorizontal />
              {showDropdown && (
                <Dropdown
                  class="list-dropdown"
                  onClose={() => setShowDropdown(false)}
                >
                  <p onClick={() => removeCard(listId, id)}>Delete Card</p>
                </Dropdown>
              )}
            </div>
          </div>
          <div className="card-title">{title}</div>
          <div>
            <p title={desc}>
              <AlignLeft />
            </p>
            <p title={comment}></p>
          </div>
          <div className="card-footer">
            {date && (
              <p className="card-footer-item">
                <Clock className="card-footer-icon" />
                {formatDate(date)}
              </p>
            )}
            {tasks && tasks?.length > 0 && (
              <p className="card-footer-item">
                <CheckSquare className="card-footer-icon" />
                {tasks?.filter((item: any) => item.completed)?.length}/
                {tasks?.length}
              </p>
            )}
          </div>
        </div>
      </>
    </Styled>
  );
};

export default CardForm;
