import service from '../../instance'
import { BoardRequestPayload, BoardResponseType } from './types'

export const create = (
    payload: BoardRequestPayload
  ): Promise<BoardResponseType> => service.post("board", payload);
  
  export const list = (boardId: number) =>
    service.get("board", { params: { boardId: Number(boardId) } });
  
  export const update = (id: number, payload: BoardRequestPayload) =>
    service.put(`board/${id}`, payload);