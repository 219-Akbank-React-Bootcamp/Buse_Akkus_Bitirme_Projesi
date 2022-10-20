export type StateType = {
    lists: Array<{
      id: number
      title: string
    }>
  }
  
  export type ContextType = {
    state: StateType
    dispatches :  any
  }