import {
  // Children,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { list } from "../../services/http/patika/endpoints/list";
import { StateType, ContextType } from "./types";

export const initialState: StateType = {
  lists: [],
};

export const BoardContext = createContext<ContextType>({
  dispatches: {},
  state: initialState,
  lists: {}
});

export const BoardProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<StateType>(initialState);

  const dispatches: ContextType["dispatches"] = {};
  useEffect(() => {
    list.list().then(({ data }: any) => {
      setState((prev) => ({ ...prev, list: data }));
    });
  }, []);

  dispatches.addList = (list: any) => {
    setState((prev) => ({
      ...prev,
      lists: [...prev.lists, list],
    }));
  };
  dispatches.updateList = (id: number, list: any) => {
    setState((prev) => ({
      ...prev,
      lists: prev.lists.map((lists) => ({
        ...list,
        title: id === list.id ? list.title : list.title,
      })),
    }));
  };

  return (
    <BoardContext.Provider
      value={{
        state,
        dispatches,
        lists: list
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => {
  return useContext(BoardContext);
};
