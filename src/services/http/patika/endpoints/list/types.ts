export type ListRequestPayload = {
  title: string;
  boardId: number;
};

export type ListResponseType = {
  data: {
    id: number;
    title: string;
    boardId: number;
    updatedAt: string;
    createdAt: string;
  };
};
