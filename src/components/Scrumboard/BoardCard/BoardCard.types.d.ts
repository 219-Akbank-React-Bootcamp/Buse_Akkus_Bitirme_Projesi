export type BoardCardProps = {
    board: BoardCardValuesProps;
    boardId: number
    removeBoard: (boardId: number) => void;
  };

export type BoardCardValuesProps = PropsWithChildren<{
    id:number;
    title:string;
}>;