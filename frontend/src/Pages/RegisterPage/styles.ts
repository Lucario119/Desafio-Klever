import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  background: rgb(249, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(249, 0, 0, 1) 0%,
    rgba(2, 0, 36, 1) 100%,
    rgba(0, 212, 255, 0) 100%
  );
`;

export const PageHeader = styled.header`
  width: 100%;
  height: 25%;
  background: rgb(249, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(249, 0, 0, 1) 0%,
    rgba(2, 0, 36, 1) 100%,
    rgba(0, 212, 255, 0) 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;
  > h1 {
    color: #fff;
  }
`;
