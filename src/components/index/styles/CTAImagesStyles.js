import styled from 'styled-components';
import Img from 'gatsby-image';

export const StyledImg = styled(Img)`
  img {
    -moz-transition: all 0.3s !important;
    -webkit-transition: all 0.3s !important;
    transition: all 0.3s !important;
    z-index: 1;
    max-height: 100px;

    @media (min-width: 768px) {
      max-height: 300px;
    }
  }
`;

export const CTAImage = styled.div`
  margin-bottom: 20px;
  :hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -o-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
  }

  max-height: 100px;
  @media (min-width: 768px) {
    max-height: 300px;
  }
`;

export const CTAImageTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 0px;
  width: calc(100% - 30px);
  height: calc(100% - 20px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CTAImageText = styled.p`
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-family: 'Teko';
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;
