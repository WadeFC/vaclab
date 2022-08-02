import styled from "styled-components"

export const Buttons = styled.button`
  min-width: 10.3vw;
  width: auto;
  height: 3.1vw;
  letter-spacing: 0.03vw;
  line-height: 3.1vw;
  padding: 0 1.5vw 0 1.5vw;
  background-color: var(--yellow);
  color: white;
  border: none;
  border-radius: 0.625vw;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 1.5vw;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`