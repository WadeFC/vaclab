import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 22em;
  max-width: 80%;
  padding: 2em 0;
  background: white;
  box-shadow: 0 0 6px 0 rgba(#202024, .12);
  transition: all .35s ease;
  
  @media screen and (max-width: 768px){
    margin-bottom: 2rem;
  }

  &::before, &::after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    background: var(--primary-light-blue);
    height: 4px;
  }

  &::before {
    width: 0;
    opacity: 0;
    transition: opacity 0s ease, width 0s ease;
    transition-delay: .5s;
  }

  &::after {
    width: 100%;
    background: white;
    transition: width .5s ease;
  }

  .content {
    width: 18em;
    max-width: 80%;
  }

  .logo {
    margin: 0 0 1em;
    width: 5em;
    height: 5em;
    transition: all .35s ease;
  }

  h6 {
    color: #999;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: 2px;
  }

  .hover_content {
    overflow: hidden;
    max-height: 0;
    transform: translateY(1em);
    transition: all .55s ease;

    p {
      margin: 1.5em 0 0;
      color: #6E6E70;
      line-height: 1.4em;
    }
  }

  &:hover {
    width: 24em;
    box-shadow: 0 10px 20px 0 rgba(#202024, .12);

    &::before {
      width: 100%;
      opacity: 1;
      transition: opacity .5s ease, width .5s ease;
      transition-delay: 0s;
    }

    &::after {
      width: 0;
      opacity: 0;
      transition: width 0s ease;
    }

    .logo {
      margin-bottom: .5em;
    }

    .hover_content {
      max-height: 10em;
      transform: none;
    }
  }
`
