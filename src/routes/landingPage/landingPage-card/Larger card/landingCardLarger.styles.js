import styled, {css} from "styled-components"
export const OuterBox = styled.div`
  background-color: var(--primary-blue);
  width: fit-content;
  height: fit-content;
  padding: 30px 30px 0px 30px;
  margin-top: 80px; 
  border-radius: 25px 25px 0 25px;
  box-shadow: 120px 120px 130px rgba(19, 99, 223, 0.3);
  h4{
    color: white;
  }
  p{
    max-width: 30rem;
    line-height: 1.5;
    color: white;
  }
  
  ${
     props => props.alternate && css`
       background: rgba( 255, 255, 255, 0.25 );
       box-shadow: 0 8px 15px 0 rgba( 31, 38, 135, 0.2 );
       backdrop-filter: blur( 16.5px );
       -webkit-backdrop-filter: blur( 16.5px );
       border-radius: 10px 10px 0px 10px;
       border: 1px solid rgba( 255, 255, 255, 0.18 );
     `
  }
`
export const Topic = styled.h4`
  margin-bottom: 1rem;
  color: white;
  ${
    props => props.alternate && css`
      color: var(--text-color)!important;
    `
  }
`
export const Text =styled.div`
  width:30rem;
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
  margin-left: 400px;
  
  
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
export const NumberText = styled.h5`
  color: white;
  font-size: 2em;
  ${
    props=>props.alternate && css`
      color: var(--text-color);
    `
  }
`
