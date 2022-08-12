import styled from "styled-components"

export const CarouselCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3{
    color: white;
    font-size: 2rem;
    margin-top: 10px;
  }
  p{
    color: white;
    font-size: 1.2rem;
  }
  
  @media screen and (max-width: 768px){
    h3{
      font-size: 1.5rem;
    }
    p{
      font-size: 0.8rem;
    }
  }

`

export const CarouselImage = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 768px){
    width:7rem;
    height: 7rem;
  }
`