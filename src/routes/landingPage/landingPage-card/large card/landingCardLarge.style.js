import styled from "styled-components";
export const CardBox = styled.div`
  width: 20rem;
  background-color: var(--primary-blue);
  height: 14rem;
  border-radius: 10px;
  float: right;
  margin-left: 3rem;
  color: white;
  box-shadow: -60px 60px 130px rgba(19, 99, 223, 0.3); 
  
`
export const InnerBox = styled.div`
  margin: 10%;
`
export const BlueBackground = styled.div`
  background-color: var(--primary-light-blue);
  text-align: center ;
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  border-radius: 10px;
  
`
export const Emoji = styled.p`
  font-size: 2rem;
`
export const EmojiAndTopic = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
  color: white; 
`
export const ButtomBox = styled.div`
  background-color: var(--text-color);
  margin-top: 30px;
  height: 40px;
  border-radius: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
`

