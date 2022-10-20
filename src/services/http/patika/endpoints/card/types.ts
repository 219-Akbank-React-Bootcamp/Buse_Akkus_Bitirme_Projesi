export type CardRequestPayload = {
    title:string
    listId: number
 }
 
 export type CardResponseType = {
     data : {
         id: number
         title: string
         listId:number
     }
 }