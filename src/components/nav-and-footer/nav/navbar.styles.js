import styled, {css} from "styled-components"

export const Navigation = styled.nav`
  background-color: #f9f9ff;
`
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  
  @media (max-width: 768px){
    z-index: 1000;
  }
`

export const Hamburger = styled.div`
  display: none;
    flex-direction: column;
   cursor: pointer;
   span{
     height: 2px;
     width: 25px;
     background-color: var(--text-color);
     margin-bottom: 4px;
     border-radius: 5px;
   }
  
  @media (max-width: 768px){
    display: flex;
  }
  
`
export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px){
    overflow: hidden;
    flex-direction: column;
    width:100%;
    max-height: ${({mobile}) => (mobile ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`
export const MenuLinks = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.3s ease-in;
  
  &:hover{
    color: var(--primary-light-blue);
  }
`
export const Logo = styled.a`
  padding: 1rem 0;
  color: var(--text-color);
  text-decoration: none;
  
  h2{
    float: left;
  }
`

export const LogoContainer = styled.div`
  float: left;
  width: 30px;
  height: 30px;
  vertical-align: baseline;
  margin-right: 0.3rem;
`