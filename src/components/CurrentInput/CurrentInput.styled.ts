import styled from "styled-components";

export const Styled = styled.div`
.current-input {
  width: 100%;
}

.current-input-display {
  padding: 6px 12px;
  border-radius: 3px;
  background-color: #eee;
  color: #000;
  cursor: pointer;
  width: fit-content;
  transition: 200ms;
}

.current-input-display:hover {
  background-color: #ddd;
}

.current-input-edit {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.current-input-edit input {
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  padding: 10px;
}

.current-input-edit-footer {
  display: flex;
  gap: 8px;
  align-items: center;
}

.current-input-edit-footer button {
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  background-color: #c41c1c;
  color: #fff;
  border: none;
  transition: 100ms ease;
  padding: 10px;
}
.current-input-edit-footer button:hover {
  background-color: hsl(0, 92%, 34%);
}

.current-input-edit-footer button:active {
  transform: translateY(2px);
}

.current-input-edit-footer .closeIcon {
  cursor: pointer;
  height: 24px;
  width: 24px;
}

`