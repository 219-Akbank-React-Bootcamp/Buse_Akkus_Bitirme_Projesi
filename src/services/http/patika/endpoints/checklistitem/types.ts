export type CheckListItemRequestPayload = {
  checklistId: number;
  isChecked: boolean;
  title: string;
};

export type CheckListItemResponseType = {
  data: {
    id: number;
    checklistId: number;
    isChecked: boolean;
    title: string;
  };
};
