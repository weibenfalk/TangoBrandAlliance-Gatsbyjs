import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #212121;
  color: #fff;
  text-align: center;
  padding: 40px 0;

  h1 {
    font-family: 'Teko', Arial;
  }

  h3 {
    font-family: 'Teko', Arial;
    font-size: 24px;
    margin-bottom: 0px;
    font-weight: 200;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 800;
  }

  .social {
    text-align: center;
    display: block;
    padding: 10px 0 0 0;
  }

  .social img {
    width: 30px;
    height: auto;
    margin: 0 10px 0 0;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .tango-contact {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .social img:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  .linkedin {
    margin-right: 5px;
  }

  .facebook {
    margin-left: 5px;
  }
`;
