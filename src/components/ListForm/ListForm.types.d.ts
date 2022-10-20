export type ListFormProps = {
  list: ListFormValuesProps;
  addTest: (values: ListFormValuesProps) => void
  addCard: (listId: number, title: string) => void;
  removeList: (listId: number) => void;
  removeCard: (listId: number, cardId: number) => void;
  onDragEnd: (listId: number, cardId: number) => void;
  onDragEnter: (listId: number, cardId: number) => void;
  updateCard: (listId: number, cardId: number, card: CardFormValuesProps) => void;
 
};


export type ListFormValuesProps = {
    id:number;
    title:string;
    boardId:number,
    data:{ id:number;
      title:string;
      boardId: number;
      updatedAt: string;
      createdAt: string;},
      cards: CardFormValuesProps[];
};











