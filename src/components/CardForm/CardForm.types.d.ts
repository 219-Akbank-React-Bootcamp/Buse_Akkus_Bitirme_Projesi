export type CardFormProps = {
  card: CardFormValuesProps;
  listId: number;
  removeCard: (listId: number, cardId: number) => void;
  onDragEnd: (listId: number, cardId: number) => void;
  onDragEnter: (listId: number, cardId: number) => void;
  updateCard: (
    listId: number,
    cardId: number,
    card: CardFormValuesProps
  ) => void;
  
};

export type CardFormValuesProps = {
  id: number;
  title: string;
  labels: LabelValuesProps[];
  date: string;
  tasks: TaskProps[];
  desc?: string;
  comment?: string;
};
