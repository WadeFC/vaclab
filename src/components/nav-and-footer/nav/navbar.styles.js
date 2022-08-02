import { Link } from "react-router-dom"
import styled from 'styled-components';


export const NavigationContainer = styled.div`
    height:4rem;
    width: 100%;
    background-color: #f3f3ff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    z-index: 10 ;
`
export const NavigationLogo = styled.div`
    display: flex;
    align-items: center ;
    
`
export const Logo = styled.img`
    height:2vw ;
    width: 2vw;
    margin-right: 2.6vw;
`
export const NavigationLinks = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: space-between;
`
export const Links = styled.a`
    margin-left: 3em;
`
export const InnerContainer = styled.div`
      display: flex;
      align-items: center ;
      justify-content: space-between;
      height:4rem;
`

//!st section styling

export const WhyGet = styled
