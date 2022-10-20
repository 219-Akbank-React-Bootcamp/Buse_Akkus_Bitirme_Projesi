import React, { useEffect, useState, FC } from "react";
import { Styled } from "./Board.styled";
import { CardFormValuesProps } from "../CardForm/CardForm.types";
import CurrentInput from "../CurrentInput";
import { ListFormProps, ListFormValuesProps } from "../ListForm/ListForm.types";
import ListForm from "../ListForm";
import { useLoginContext } from "../../contexts/LoginContext/LoginContext";
import Button from "../Button";
import { LogOut } from "react-feather";

const Board: FC<ListFormProps> = (props) => {
  const [lists, setLists] = useState<ListFormValuesProps[]>([]);
  useEffect(() => {}, []);

  const { logout } = useLoginContext();

  const handleLogout = () => {
    logout();
  };

  const [targetCard, setTargetCard] = useState({
    listId: 0,
    cardId: 0,
  });

  const addlistHandler = (name: string) => {
    const tempListsList = [...lists];
    tempListsList.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
      boardId: 8,
      data: {
        id: Date.now() + Math.random() * 2,
        title: name,
        boardId: 0,
        updatedAt: "",
        createdAt: "",
      },
    });
    setLists(tempListsList);
  };

  const removeList = (listId: number) => {
    const listIndex = lists.findIndex(
      (item: ListFormValuesProps) => item.id === listId
    );
    if (listIndex < 0) return;

    const tempListsList = [...lists];
    tempListsList.splice(listIndex, 1);
    setLists(tempListsList);
  };

  const addCardHandler = (listId: number, title: string) => {
    const listIndex = lists.findIndex(
      (item: ListFormValuesProps) => item.id === listId
    );
    if (listIndex < 0) return;

    const tempListsList = [...lists];
    tempListsList[listIndex].cards.push({
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      date: "",
      tasks: [],
      desc: "",
    });
    setLists(tempListsList);
  };

  const removeCard = (listId: number, cardId: number) => {
    const listIndex = lists.findIndex(
      (item: ListFormValuesProps) => item.id === listId
    );
    if (listIndex < 0) return;

    const tempListsList = [...lists];
    const cards = tempListsList[listIndex].cards;

    const cardIndex = cards.findIndex((item: any) => item.id === cardId);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setLists(tempListsList);
  };

  const updateCard = (
    listId: number,
    cardId: number,
    card: CardFormValuesProps
  ) => {
    const listIndex = lists.findIndex((item) => item.id === listId);
    if (listIndex < 0) return;

    const tempListsList = [...lists];
    const cards = tempListsList[listIndex].cards;

    const cardIndex = cards.findIndex((item: any) => item.id === cardId);
    if (cardIndex < 0) return;

    tempListsList[listIndex].cards[cardIndex] = card;

    setLists(tempListsList);
  };

  const onDragEnd = (listId: number, cardId: number) => {
    const sourceListIndex = lists.findIndex(
      (item: ListFormValuesProps) => item.id === listId
    );
    if (sourceListIndex < 0) return;

    const sourceCardIndex = lists[sourceListIndex]?.cards?.findIndex(
      (item: any) => item.id === cardId
    );
    if (sourceCardIndex < 0) return;

    const targetListIndex = lists.findIndex(
      (item: ListFormValuesProps) => item.id === targetCard.listId
    );
    if (targetListIndex < 0) return;

    const targetCardIndex = lists[targetListIndex]?.cards?.findIndex(
      (item: any) => item.id === targetCard.cardId
    );
    if (targetCardIndex < 0) return;

    const tempListsList = [...lists];
    const sourceCard = tempListsList[sourceListIndex].cards[sourceCardIndex];
    tempListsList[sourceListIndex].cards.splice(sourceCardIndex, 1);
    tempListsList[targetListIndex].cards.splice(targetCardIndex, 0, sourceCard);
    setLists(tempListsList);

    setTargetCard({
      listId: 0,
      cardId: 0,
    });
  };

  const onDragEnter = (listId: number, cardId: number) => {
    if (targetCard.cardId === cardId) return;
    setTargetCard({
      listId: listId,
      cardId: cardId,
    });
  };

  const handleTest = () => {
    var testA = {
      id: 0,
      title: "",
      boardId: 8,
      data: { id: 1, title: "", boardId: 1, updatedAt: "", createdAt: "" },
      cards: [],
    };
    props.addTest?.(testA);
  };

  return (
    <Styled>
      <div className="app">
        <div className="app-nav">
          <button type="submit" className="app-nav-list-button">
            Boards
          </button>

          <input type="text" className="input"></input>

          <Button onClick={handleLogout} className="app-nav-logout">
            <LogOut />
          </Button>
        </div>
        <div className="app-lists-container">
          <div className="app-lists">
            {lists.map((item) => (
              <ListForm
                key={item.id}
                list={item}
                addCard={addCardHandler}
                removeList={() => removeList(item.id)}
                removeCard={removeCard}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
                updateCard={updateCard}
                addTest={handleTest}
              />
            ))}
            <div className="app-lists-last">
              <CurrentInput
                displayClass="app-lists-add-list"
                editClass="app-lists-add-list-edit"
                placeholder="Enter List Name"
                text="Add a List"
                buttonText="Add List"
                onSubmit={addlistHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default Board;
