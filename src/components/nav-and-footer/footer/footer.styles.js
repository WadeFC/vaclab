import styled from "styled-components";

export const DarkBlueBox = styled.div`
  width: 100%;
  background-color: var(--text-color);
  margin-top: 14rem;
  height: 500px;
  
`

export const FooterDetails = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  top: -15%;
  justify-content: space-evenly;
  p{
    color: var(--gray);
    margin-top: 3%;
  }
  
  .footer-items{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    line-height: 2;
    
    #first{
      font-weight: 800;
      font-size: 1rem;
    }
  }
`
export const BlueBox = styled.div`
  width: 50%;
  background-color: var(--primary-blue);
  height: 20rem;
  align-self: center;
  position: relative;
  left:25%;
  top: -30%;
  text-align: center;
  line-height: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 1rem;
  p{
    color: white;
  }
  h2{
    color: white;
    font-size: 3rem;
  }
  
  .clip-circle{
    clip-path: polygon(0 0, 72% 0, 72% 71%, 0 71%);
  }
  .button_margin{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  img{
    width: 400px;
    height:400px;
    color: white;
    opacity: 0.1;
    position: absolute;
    top: 2.2rem;
    left: 29.8rem;
  }

`
