import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Board from "../components/Board";
import { ListFormProps } from "../components/ListForm/ListForm.types";
import { useBoardContext } from "../contexts/BoardContext/BoardContext";
import { list } from '../services/http/patika/endpoints/list'

export type BoardAppProps = {};
const BoardApp: FC<BoardAppProps> = (props) => {
  const navigate = useNavigate()
  const { lists } = useBoardContext()


  const handleBoard: ListFormProps['addTest'] = (values) => {
    console.log(values)
    list.create(values).then(({ data }: any) => {
      lists(data.id, data.title)
      navigate('/')
    })
    console.log(values)
  }
  return (
    <div>
      <Board addTest={handleBoard}/>
    </div>
  );
};

export default BoardApp;




