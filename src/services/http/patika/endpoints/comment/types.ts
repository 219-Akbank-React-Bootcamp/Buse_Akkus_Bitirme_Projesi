export type CommentRequestPayload = {
  cardId: number;
  message: string;
};

export type CommentResponseType = {
  data: {
    id: number;
    cardId: number;
    message: string;
  };
};
