import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: rgb(249, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(249, 0, 0, 1) 0%,
    rgba(2, 0, 36, 1) 100%,
    rgba(0, 212, 255, 0) 100%
  );
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > h1 {
      margin-bottom: 6rem;
      margin-left: 45px;

      font-size: 6rem;
      max-width: 75vw;
      color: #fefefe;
    }

    > a {
      > button {
        width: 15rem;
        height: 6rem;
        cursor: pointer;
        border-radius: 0.6rem;
        background: rgba(249, 0, 0, 1);
        border: 1px solid rgba(2, 0, 36, 1);
        color: #fefefe;
        &:hover {
          background-color: red;
        }
      }
    }
  }
`;
