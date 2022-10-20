import React, { FC } from "react";
import Scrumboard from "../components/Scrumboard";


export type ScrumboardAppProps = {};
const ScrumboardApp: FC<ScrumboardAppProps> = (props) => {
  return (
    <div>
      <Scrumboard board={undefined} boardId={0} removeBoard={function (boardId: number): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};

export default ScrumboardApp;

// const ScrumboardApp: FC<ScrumboardAppProps> = (props) => {
//   const navigate = useNavigate();
//   const { state, setState } = useLoginContext();
//   const handleBoardRegister: ScrumBoardProps["onBoardRegister"] = (values) => {
//     board.register(values).then(({ data }) => {
//       console.log(data);
//       login(data.token, data.username);
//       navigate("/");
//     });
//   };

//   return <RegisterForm onRegister={handleRegister} />;
// };

// export default ScrumboardApp;