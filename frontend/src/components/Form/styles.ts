import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  height: auto;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 2.4rem;
 
  > form {
    > fieldset {
      border: 0;
      padding: 0 5rem;

      > label {
        font-size: 1.4rem;
      }

      > input {
        width: 100%;
        height: 5.6rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background-color: #FFF;
        border: 1px solid #ccc;
        outline: 0;
        padding: 0 1.6rem;
        font: 1.6rem Archivo;
      }
      > legend {
        font: 700 2.4rem Archivo;
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid #09c90c;
      }
    }
    > footer {
      width: 100%;
      padding: 3rem 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > p {
        color: #9c98a6;
      }
      > button {
        width: 20rem;
        height: 6rem;
        cursor: pointer;
        border-radius: 0.6rem;
        background: #f0f0f0;
        font: #000 500;

        &:hover {
          background-color: #c0c0c0;
        }
      }
    }
  }
`;

export const Localization = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:1rem;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    > select {
      background-color: #ccc;
      border: 0;

      padding: 16px 24px;
      font-size: 16px;

      border-radius: 8px;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      > option {
        &:first-child {
          color: #fff;
          padding: 4px 0;
        }
      }
    }
    > label {
      font-size: 14px;
      margin-bottom: 6px;
    }
  }
`;
