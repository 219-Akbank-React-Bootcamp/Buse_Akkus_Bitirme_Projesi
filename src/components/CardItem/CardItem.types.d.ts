export type CardItemProps  = {
  onClose: () => void;
  card: CardFormValuesProps;
  listId: number;
  updateCard: (
    listId: number,
    cardId: number,
    card: CardFormValuesProps
  ) => void;
};

export type TaskProps = {
  id: number;
  completed: boolean;
  text: string;
};
