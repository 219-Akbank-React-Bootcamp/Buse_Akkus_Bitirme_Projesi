import React, { FC, useState } from "react";
import { ListFormProps } from "./ListForm.types";
import { Styled } from "./ListForm.styled";
import { MoreHorizontal } from "react-feather";
import CurrentInput from "../CurrentInput";
import Dropdown from "../Dropdown";
import CardForm from "../CardForm";
import Button from "../Button";

const ListForm: FC<ListFormProps> = (props) => {
  const {
    list,
    addCard,
    removeList,
    removeCard,
    onDragEnd,
    onDragEnter,
    updateCard,
    addTest,
  } = props;
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Styled>
      <div className="list">
       
        <div className="list-inner" key={list?.id}>
          <div className="list-header">
            <p className="list-header-title">
              {list?.title}
              <span>{list?.cards?.length || 0}</span>
            </p>
            <div
              className="list-header-title-more"
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
                  <p onClick={() => removeList(list?.id)}>Delete list</p>
                </Dropdown>
              )}
            </div>
          </div>
          <div className="list-cards custom-scroll">
            {list?.cards?.map((item) => (
              <CardForm
                key={item.id}
                card={item}
                listId={list.id}
                removeCard={removeCard}
                onDragEnter={onDragEnter}
                onDragEnd={onDragEnd}
                updateCard={updateCard}
              />
            ))}
            <CurrentInput
              text="+ Add Card"
              placeholder="Enter Card Title"
              displayClass="list-add-card"
              editClass="list-add-card-edit"
              onSubmit= {(value: string) => addCard(list?.id, value)}
            />
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default ListForm;
