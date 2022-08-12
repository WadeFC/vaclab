import styled, {css} from "styled-components"
export const OuterBox = styled.div`
  max-width: 100%;
  height: fit-content;
  padding: 30px 30px 0px 30px;
  margin-top: 80px; 
  margin-right: 40px;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 15px 0 rgba( 31, 38, 135, 0.2 );
  backdrop-filter: blur( 16.5px );
  -webkit-backdrop-filter: blur( 16.5px );
  border-radius: 10px 10px 0px 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  
  transition: all 0.2s ease;
  
  &:hover{
    border-radius: 25px 25px 0 25px;
    box-shadow: 120px 120px 130px rgba(19, 99, 223, 0.3);
    background-color: var(--primary-blue);
    transform: scale(1.1);
    h4{
      color: white;
    }
    p{
      max-width: 30rem;
      line-height: 1.5;
      color: white;
    }
  }
  h4{
    color: var(--text-color);
  }
  p{
    max-width: 30rem;
    line-height: 1.5;
    color: var(--text-color);
  }
  
`
export const Topic = styled.h4`
  margin-bottom: 1rem;
  color: var(--text-color);
  
  ${
    props => props.alternate && css`
      color: var(--text-color)!important;
    `
  }
`
export const Text =styled.div`
  max-width:30rem;
  margin-bottom: 1.5rem;
  
    ${
    props => props.alternate && css`
      color: var(--text-color);
    `
    }
  
`
export const Number =styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  height: 30px;
  padding:10px 20px;
  background: rgba( 255, 255, 255, 0.15 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 14px );
  -webkit-backdrop-filter: blur( 14px );
  border-radius: 10px 10px 0 0;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  float:right;
  
  
`

export const ButtonDiv = styled.div`
  width: fit-content;
  padding:10px 10px;
  background-color: var(--text-color);
  border-radius: 7px;
  span{
    color: white;
    margin-right:20px;
    ${props => props.alternate && css`
      color: var(--text-color);
    `}
  }
  
`
export const NumberText = styled.h4`
  color: var(--text-color);
  font-size: 2em;
  ${
    props=>props.alternate && css`
      color: var(--text-color);
    `
  }
`
