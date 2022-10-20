import styled from "styled-components";

export const Styled = styled.div`
  body {
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
  .app-nav-board-button {
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

  .app-boards-container {
    flex: 1;
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
    height: 100%;
    padding-top: 20px;
  }

  .app-boards {
    width: fit-content;
    padding: 0px 30px;
    display: inline-flex;
    gap: 30px;
    height: 100%;
  }

  .app-boards-last {
    flex-basis: 290px;
    min-width: 290px;
  }

  .app-boards-add-board {
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    box-shadow: 1px 1px 0 1px rgba(0, 0, 0, 0.12);
    width: 100%;
    text-align: center;
  }
  .app-boards-add-board-edit {
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
  }
`;
