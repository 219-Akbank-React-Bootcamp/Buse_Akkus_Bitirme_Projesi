export type CheckListRequestPayload = {
    cardId: number;
   title:string
  };
  
  export type CheckListResponseType = {
    data: {
      id: number;
      cardId: number;
      title:string
    };
  };
  