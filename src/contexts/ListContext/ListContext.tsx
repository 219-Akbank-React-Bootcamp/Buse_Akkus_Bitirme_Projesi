import {
    // Children,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import { list } from '../../services/http/patika/endpoints/list'
import { StateType, ContextType } from './types'

export const initialState: StateType = {
  lists: [],
}

export const ListContext = createContext<ContextType>({
  dispatches: {},
  state: initialState,
})

export const ListProvider: FC<PropsWithChildren> = ({children}) => {
  const [state, setState] = useState<StateType>(initialState)
  const dispatches: ContextType['dispatches'] = {}
  useEffect(() => {
    list.list().then(({ data }: any) => {
      setState((prev) => ({ ...prev, list: data }))
    })
  }, [])

  dispatches.addList = (list: any) => {
    setState((prev) => ({
      ...prev,
      lists: [...prev.lists, list],
    }))
  }
  dispatches.updateList = (id:number,list:any)=>{
    setState(prev=>({
        ...prev,
        lists: prev.lists.map(lists=>({
            ...list,
            title : (id===list.id) ? list.title : list.title
        }))
    }))
  }

  return (
    <ListContext.Provider
      value={{
        state,
        dispatches,
      }}
    >
      {children}
    </ListContext.Provider>
  )
}

export const useListContext = ()=>{
    return useContext(ListContext)
}
