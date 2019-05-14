import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  margin: 5px 0 10px 0; /* just to give some spacing */
  color: #212121;
  text-transform: uppercase;
  position: absolute;
  right: 0px;
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  display: none;

  .nav-active {
    color: #d22e26;
  }

  @media (min-width: 992px) {
    font-size: 0.85rem;
    display: block;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  ul li {
    display: block;
    margin: 0 10px 0 0;
    float: left;
    height: 30px; /* this should be the same as your #main-nav height */
    position: relative; /* this is needed in order to position sub menus */

    a {
      padding: 0 0 0 10px;
      transition: all 0.2s ease;
    }

    span {
      margin: 0 0 0 5px;
    }
  }

  ul li:last-child {
    margin: 0;
  }

  ul li:hover > ul {
    display: block; /* show sub menus when hovering over a parent */
  }

  ul li a:hover {
    color: #d22e26;
  }

  ul ul {
    animation: fadeInMenu 0.3s both ease-in;
    display: none; /* hide all sub menus from view */
    position: absolute;
    left: 0;
    margin: 0;
    top: 30px; /* this should be the same height as the top level menu -- height + padding + borders */
    padding: 5px 5px 10px 5px;
    text-transform: none;
    background: #fff; /* Old browsers */
    -webkit-box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
  }

  ul ul li {
    /* this targets all submenu items */
    width: auto; /* set to the width you want your sub menus to be. This needs to match the value we set below */
    min-width: 170px;
  }

  ul ul li a {
    /* target all sub menu item links */
    padding: 5px 10px; /* give our sub menu links a nice button feel */
    text-decoration: none;
    white-space: nowrap;
  }

  @keyframes fadeInMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
