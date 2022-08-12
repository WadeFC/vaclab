import styled from "styled-components"


export const Header = styled.header`
  height: 100vh;
  
  @media screen and (max-width: 768px){
    height: fit-content;
  }
`
export const Heading = styled.div`
  padding-top: 6rem;
  h1{
    font-size:16rem ;
    letter-spacing: 1rem;
    text-shadow: 1px 2px 6px var(--gray500) ;
    text-align: center;
    display: inline-block;
    margin-left: 5%;

    @media (max-width: 900px){
      font-size: 8rem;
    }
    @media screen and (max-width: 600px){
      font-size: 6rem;
      font-weight: 800;
      margin-left: 0;
      letter-spacing: 0.1rem;
    }
  }
  p{
    margin-bottom: 6rem;
    color: var(--gray);

    @media screen and (max-width: 900px){
        margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 768px){
    padding-top: 6rem;
  }
`
export const ButtonAndDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  
  div{
    padding-top: 3rem;
  }
  
  p{
    color: var(--text-color);
  }
`

export const ImageDiv = styled.div`
  max-width: fit-content;
  min-width: fit-content;
  height: 100vh;
  z-index:4;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 70px;
  left: 0;
  right: 0;
  text-align: center;
  
  @media (max-width: 768px){
    display: none;
  }
`
export const NurseImage = styled.img`
  width: 100%;
  height: 100%;
`
export const FadeOutBottom = styled.img`
  width: 100%;
  height: 12.5rem;
  z-index: 99;
  position: sticky;
  opacity: 1;
  margin-top: 1rem;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`
export const FadeOutTop = styled.img`
  width: 100%;
  height: 9.3rem;
  z-index: 99;
  transform: rotate(180deg);
  margin-top: -4px;
  
  @media screen and (max-width: 768px){
    display: none;
  }
  
`
export const Section = styled.section`
  padding-top: 200px;
  .section_content{
    h2{
      margin-bottom: 0.5rem;
    }
    h4{
      margin-bottom: 0.5rem;
      color: var(--primary-light-blue);
    }
    P{
      margin-top: 1rem;
      max-width: 33rem;
      color: var(--gray);
      margin-bottom: 0.5rem;
    }
  }
  .text_heading{
    text-align: center;
    h4{
      color: var(--primary-blue);
      margin-bottom: 1em;
    }
    h3{
      margin-bottom: 1em;
    }
    p{
      color: var(--gray);
    }
  }
`

export const ParentCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  
  .first_card_set{
    margin-left: 5em;
    margin-top: 5em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 35em;
    height: fit-content;
    justify-content: space-between;
    
    @media screen and (max-width: 768px){
      flex-direction: column;
      height: 10em;
      margin-right: 5em;
    }
  }
`
export const CardDiv = styled.div`
  margin-left: 40px;
  width:100%;
  display: flex;
  flex-wrap: wrap;
  .card{
    flex: 50%;
  }
  .card_margin{
    margin-top: 40px;
  }
  @media screen and (max-width: 768px){
    flex-direction: column;
    margin-left: 23px;
  }
`

export const UserReview = styled.div`
  text-align: center;
  .footer {
    width: 100% !important;
    display: block;
    box-sizing: border-box;
    height: 30rem;
    background-color: var(--text-color);
    clip-path: ellipse(258% 100% at -93.52% 100%);
    padding-top: 8rem;
    
    @media screen and (max-width:768px){
      height: 15rem;
      padding-top: 2.4rem;
    }
  }
  h4{
    color: var(--primary-light-blue);
  }
`

export const ServicesSection =styled.div`h4{
  color: var(--primary-light-blue);
}
`

export const Services = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 70px;
  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`
