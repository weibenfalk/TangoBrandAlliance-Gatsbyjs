import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: #fff;
  margin-bottom: 1.45rem;
  height: 110px;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 100%;

  img {
    max-width: 200px;
    margin: 0;
    padding: 12px 0 0 0;
  }

  .menu {
    display: flex;
    align-items: center;
  }
`;
