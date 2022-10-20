import React, { FC, useState } from "react";
import { MoreHorizontal } from "react-feather";

import Dropdown from "../../Dropdown";
import { Styled } from "./BoardCard.styled";
import { BoardCardProps } from "./BoardCard.types";

const BoardCard: FC<BoardCardProps> = (props) => {
  const { board, removeBoard } = props;
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Styled>
      <div className="board">
        <div className="board-inner" key={board?.id}>
          <div className="board-header">
            <p className="board-header-title">
              {board?.title}
              <span>{board?.cards?.length || 0}</span>
            </p>
            <div
              className="board-header-title-more"
              onClick={(event) => {
                event.stopPropagation();
                setShowDropdown(true);
              }}
            >
              <MoreHorizontal />
              {showDropdown && (
                <Dropdown
                  class="board-dropdown"
                  onClose={() => setShowDropdown(false)}
                >
                  <p onClick={() => removeBoard(board?.id)}>Delete Board</p>
                </Dropdown>
              )}
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default BoardCard;
