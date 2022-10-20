export type ScrumBoardProps = {
  board: ScrumBoardValuesProps;
  boardId: number;
  addCard: (boardId: number, title: string) => void;
  onBoardRegister: (values: ScrumBoardFormValuesProps) => void
};

export type ScrumBoardValuesProps = {
  title: string;
  member:Array[]
};
