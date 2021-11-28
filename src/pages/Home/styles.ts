import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: fit-content;

  .home__section{
    width: 98%;
    max-width: 70rem;
    height: fit-content;
    margin: 1rem auto 0;
    padding: 2rem 0;

    background: rgba( 255, 255, 255, 0.45 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6px );
    -webkit-backdrop-filter: blur( 6px );
    border-radius: 10px;
  }

  .home__section-wrapper{
    width: 95%;
    height: fit-content;
    margin: 0 auto;
  }

  .home__section-header{
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .home__section-select{
    width: 100%;
    max-width: 15rem;
    height: 2rem;
    padding: 0 0.5rem;

    border: 2px solid var(--primaryPurple);
    border-radius: 0.5rem;

    font-size: 1.1rem;
  }

  .home__section-list-title{
    margin-top: 2rem;
  }

  .home__section-list{
    width: 100%;
    height: fit-content;
    margin-top: 1rem;

    list-style: none;
  }

  .home__section-list-item{
    width: 100%;
    height: fit-content;
    max-height: 2.5rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    overflow: hidden;

    border: 2px solid var(--primaryPurple);
    border-radius: 0.2rem;

    &:not(:first-child){
      margin-top: 1rem;
    }
  }

  .home__section-list__method{
    width: 100%;
    max-width: 5.5rem;
    height: 2.5rem;

    display: inline-block;

    border: 2px solid var(--primaryPurple);
    background-color: var(--primaryDark);

    text-align: center;
    font-weight: bold;
    line-height: 2.5rem;
  }

  .home__section-list__data{
    vertical-align: middle;
  }

  .home__section-list-alert{
    width: 100%;
    margin-top: 1rem;

    display: inline-block;

    text-align: center;
  }
`