import styled from "styled-components"
export const GetProtection = styled.div`
  margin-bottom: 6rem;
`
export const ButtonAndDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8em;
`
export const DescriptionHeader = styled.div`
  margin-bottom: 1rem;  
`
export const Vaclab = styled.h1`
  font-size: 16rem;
  letter-spacing: 1rem;
  text-shadow: 1px 2px 6px var(--gray500) ;
`
export const ProtectionText = styled.p`
  //font-size: 1.5vw;
  color: var(--gray);
`
export const Heading = styled.div`
  padding-top: 10rem;
`
export const Header = styled.header`
  height: 100vh;
`
export const HealthyLife = styled(ProtectionText)`
  color: var(--text-color);
`
export const VacilabContainer = styled.div`
  width: fit-content;
  height: fit-content;
  text-align: center;
`
export const NurseImage = styled.img`
  width: 100%;
  height: 100%;
`
export const ImageDiv = styled.div`
  width: fit-content;
  height: 91vh;
  z-index:4;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 70px;
  left: 0;
  right: 0;
  text-align: center;
  
  @media (max-width: 768px){
    z-index: -1;
  }
`
export const FadeOutBottom = styled.img`
  width: 100%;
  height: 200px;
  z-index: 99;
  position: fixed;
  opacity: 0.6;
  margin-top: 1rem;
`
export const FadeOutTop = styled.img`
  width: 100%;
  height: 150px;
  z-index: 99;
  transform: rotate(180deg);
  margin-top: 0;
  
`
export const Section = styled.section`
  margin-top: 0;
  height: 100vh;
  background-color: #f3f3ff;

`
export const Maxwidth = styled.p`
  padding-top:1rem;
  max-width: 33rem;
  color: var(--gray);
`
export const FirstText = styled.div`
  margin-bottom: 0.5rem;
`
export const WhyGet = styled.h4`
  color: var(--primary-blue);
`
export const CardContainer = styled.div`
  margin-left: 10rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  width: 35rem;
  height: fit-content;
  justify-content: space-between;
`
export const ParentCardBox = styled.div`
  display: flex;
`
export const SectionTwoFirstText = styled.div`
  text-align: center;
`
export const SectionTwoText = styled.p`
  color: var(--gray);
`
export const CardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px 50px 50px;
`