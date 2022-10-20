import styled from "styled-components";

export const Styled = styled.div`
  .body {
    background-color: #dddfdf;
    /* background-size: 60%; */
    background-size: cover;
  }

  .app {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .app-nav {
    padding: 5px 0px;
    box-shadow: 0 1px 20px rgba(56, 40, 40, 0.05);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    background: transparent;
    box-shadow: none;
    color: #fff;
    display: flex;
    font-size: 15px;
    margin-left: 15px;
    line-height: 36px;
    margin-right: 8px;
    padding: 30px;
  }
  .app-nav-list-button {
    cursor: pointer;
    margin-left: 25px;
    border-radius: 5px;
    outline: none;
    background-color: #c41c1c;
    color: #fff;
    border: none;
    transition: 100ms ease;
    padding: 10px;
  }

  .input {
    display: flex;
    outline: 0;
    border: 0;
    margin-left: 500px;
    /* line-height: 40px; */
    padding-left: 500px;
    border: none;
    padding: 2px;
    background: transparent;
    font-size: 20px;
    border-radius: 10px;
    text-align: center;
  }

  input:focus {
    border: 1px solid black;
    background: #e5e5e5;
  }

  .app-nav-logout {
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    background-color: #c41c1c;
   
    border: none;
    transition: 100ms ease;
    
    display: flex;
    justify-content: center;
    margin-left: 500px;
    padding: 8px 5px;
  }


  .app-lists-container {
    flex: 1;
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
    height: 100%;
    padding-top: 20px;
  }

  .app-lists {
    width: fit-content;
    padding: 0px 30px;
    display: inline-flex;
    gap: 30px;
    height: 100%;
  }

  .app-lists-last {
    flex-basis: 290px;
    min-width: 290px;
  }

  .app-lists-add-list {
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    box-shadow: 1px 1px 0 1px rgba(0, 0, 0, 0.12);
    width: 100%;
    text-align: center;
  }
  .app-lists-add-list-edit {
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
  }
  /*
 * scroll bar styling
 */
  *::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  *::-webkit-scrollbar-thumb {
    background: #c4c4c4;
  }

  /* Handle on hover */
  *::-webkit-scrollbar-thumb:hover {
    background: rgb(217 215 215);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    /* -webkit-box-shadow: inset 0 0 6px rgba(179, 174, 174, 0.5); */
  }
`;
