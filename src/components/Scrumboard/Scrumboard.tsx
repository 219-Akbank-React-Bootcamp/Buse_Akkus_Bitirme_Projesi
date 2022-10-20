import React, { FC, useEffect, useState } from "react";
import CurrentInput from "../CurrentInput";
import BoardCard from "./BoardCard";
import {
  BoardCardProps,
  BoardCardValuesProps,
} from "./BoardCard/BoardCard.types";
import { Styled } from "./Scrumboard.styled";

const Scrumboard: FC<BoardCardProps> = (props) => {
  const [boards, setBoards] = useState<BoardCardValuesProps[]>([]);
   useEffect(() => {
   }, []);


  const addboardHandler = (name: string) => {
    const tempBoardsList = [...boards];
    tempBoardsList.push({
      id: Date.now() + Math.random() * 2,
      title: name,
    });
    setBoards(tempBoardsList);
  };

  const removeBoard = (boardId: number) => {
    const boardIndex = boards.findIndex(
      (item: BoardCardValuesProps) => item.id === boardId
    );
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    tempBoardsList.splice(boardIndex, 1);
    setBoards(tempBoardsList);
  };

  return (
    <Styled>
      <div className="app">
        <div className="app-nav"></div>
        <div className="app-boards-container">
          <div className="app-boards">
            {boards.map((item) => (
              <BoardCard
                key={item.id}
                board={item}
                removeBoard={() => removeBoard(item.id)}
                boardId={0}
              
              />
            ))}
            <div className="app-boards-last">
              <CurrentInput
                displayClass="app-boards-add-board"
                editClass="app-boards-add-board-edit"
                placeholder="Enter Board Name"
                text="Add a Board"
                buttonText="Add Board"
                onSubmit={addboardHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default Scrumboard;
