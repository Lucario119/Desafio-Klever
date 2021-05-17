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
        background-color: #fff;
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
        border-bottom: 1px solid #000;
      }
    }
    > footer {
      width: 100%;
      padding: 3rem 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > p {
        color: #000;
      }
      > button {
        width: 20rem;
        height: 6rem;
        cursor: pointer;
        border-radius: 0.6rem;
        background: #fff;
        border: 1px solid #ccc;
        font: #000 500;

        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
  }
`;

export const Localization = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    > select {
      background-color: #fff;
      border: 0;

      padding: 16px 24px;
      font-size: 16px;
      font: #000;
      border-radius: 8px;
      border: 1px solid #ccc;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      &:focus {
        border: 1px solid #ccc;
      }
      > option {
        &:first-child {
          color: #000;
        }
      }
    }
    > label {
      font-size: 14px;
      margin-bottom: 6px;
    }
  }
`;
