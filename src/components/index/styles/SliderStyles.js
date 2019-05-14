import styled from 'styled-components';

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  margin: 0;
  padding: 0;
  overflow: hidden;

  .active {
    z-index: 10;
    opacity: 1;
  }

  .active div {
    opacity: 1;
  }

  .active div .wbn-text {
    opacity: 1;
    transform: translateY(0%);
  }

  .active div .wbn-header {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  top: 0;
  height: 100%;
  padding: 0 20px 0 20px;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  font-size: 24px;
  opacity: 0.7;
  border: 0;
  outline: none;
  border-radius: 50px;
  width: 70px;
  height: 70px;
  transition: all 0.2s;

  :hover {
    transform: scale(1.1);
    opacity: 0.8;
    cursor: pointer;
  }
`;
