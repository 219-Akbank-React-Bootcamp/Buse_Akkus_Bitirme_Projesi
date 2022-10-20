import service from '../../instance'
import {
    ListRequestPayload,
    ListResponseType,
} from './types'

export const create = (
  payload: ListResponseType
): Promise<ListRequestPayload> => service.post('list', payload)

export const list = () => service.get('list')

export const update = (id: number, payload: ListRequestPayload) =>
  service.put(`list/${id}`, payload)