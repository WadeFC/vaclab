import styled, {css} from "styled-components"

export const Buttons = styled.button`
  width: fit-content;
  height: 3rem;
  padding: 0 1rem;
  letter-spacing: 0.03rem;
  line-height: 3.1rem;
  background-color: var(--yellow);
  color: white;
  border: none;
  border-radius: 0.625vw;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  transition: background-color 0.5s;
  
  ${
    props => props.type==="glass" && css`
      background: rgba(255,255,255, 0.2);
      backdrop-filter: blur( 1px );
      -webkit-backdrop-filter: blur( 9px );
      border-radius: 10px;
      border: 1px solid rgba(19,99,223,0.2);
      color: var(--text-color);
    `
  }

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    
  }
`