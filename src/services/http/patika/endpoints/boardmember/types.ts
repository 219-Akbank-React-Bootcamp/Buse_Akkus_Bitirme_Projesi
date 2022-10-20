export type BoardMemberRequestPayload = {
    username:string
    boardId:number
 }
 
 export type BoardMemberResponseType = {
     data : {
         id: number
         boardId:number
         username: string
     }
 }