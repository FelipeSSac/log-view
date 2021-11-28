import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  .sign-in__aside {
    width: 100%;
    max-width: 60rem;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sign-in__form{
    width: 98%;
    max-width: 30rem;
    height: fit-content;
    padding: 4rem 1rem 5rem;

    border-radius: 0.5rem;
    background: rgba( 255, 255, 255, 0.45 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6px );
    -webkit-backdrop-filter: blur( 6px );
  }

  .sign-in__label{
    width: 100%;

    font-size: 1.5rem;
  }

  .sign-in__input{
    width: 100%;
    height: 3rem;
    margin: 0.8rem 0 2rem;
    padding: 0 1rem;

    border: 2px solid var(--primaryDark);
    border-radius: 0.5rem;
    transition: border 0.3s ease;

    color: var(--primaryDark);
    font-size: 1.2rem;

    &:focus{
      border: 2px solid var(--primaryPurple);
    }

    &.sign-in__input--error{
      border: 2px solid #f00;
    }
  }

  .sign-in__alert{
    width: 100%;
    height: fit-content;
    margin: 0 auto;

    display: inline-block;

    text-align: center;
  }

  .sign-in__submit{
    width: 100%;
    max-width: 20rem;
    height: 3rem;
    margin: 3rem auto 0;

    display: block;

    background: var(--primaryPurple);
    border-radius: 0.5rem;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    transition: filter 0.3s ease, box-shadow 0.14s ease;
    cursor: pointer;

    color: #fff;
    font-size: 1.2rem;

    &:hover{
      filter: brightness(1.1);
    }

    &:active{
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.0 );
    }
  }
`