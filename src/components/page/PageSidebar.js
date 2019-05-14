/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';

import tangoMail from '../../images/tango-mail-icon.svg';
import tangoPage from '../../images/tango-page-icon.svg';

import {
  SidebarWrapper,
  SidebarMenu,
  EducationBadge,
} from './styles/PageSidebarStyles';

const Sidebar = ({ children, parentChildren, currentPage, parent }) => {
  const getParentContent = () =>
    // Page with no children, show default text
    children.edges.length === 0 ? (
      <>
        <li className="sidebar-menu-header">
          <img src={tangoMail} alt="tango-mail" /> <span>Mailinglista</span>
        </li>
        <p>
          Vill du bli uppdaterad om när nya trendspaningar publiceras? <br />
          Maila ditt för- och efternamn, företagsnamn samt mailadress till{' '}
          <a href="mailto:anders@tangobrandalliance.se">Anders Lindén.</a>
        </p>
      </>
    ) : (
      // Page with children, show menu
      <>
        <li className="sidebar-menu-header">
          <img src={tangoPage} alt="tango-page" />{' '}
          <span dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        </li>
        {children.edges.map(child => (
          <li key={child.node.id}>
            <Link to={child.node.link}>
              <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
            </Link>
          </li>
        ))}
      </>
    );

  const getChildContent = () => (
    <>
      <li className="sidebar-menu-header">
        <img src={tangoPage} alt="tango-page" />{' '}
        <span dangerouslySetInnerHTML={{ __html: parent.title }} />
      </li>
      {parentChildren.edges.map(child => (
        <li
          key={child.node.id}
          className={
            currentPage.id === child.node.id ? 'sidebar-highlighted' : ''
          }
        >
          {currentPage.id === child.node.id ? (
            <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
          ) : (
            <Link to={child.node.link}>
              <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
            </Link>
          )}
        </li>
      ))}
    </>
  );

  return (
    <SidebarWrapper className="col-lg-3">
      {currentPage.acf.education ? (
        <EducationBadge className="tango-call-to-action-education">
          <a href="mailto:anders@tangobrandalliance.se">
            Anmäl dig till utbildning
          </a>
        </EducationBadge>
      ) : null}
      <SidebarMenu className="tango-sidebar-menu tango-page-sidebar-text">
        {currentPage.wordpress_parent === 0
          ? getParentContent()
          : getChildContent()}
      </SidebarMenu>
    </SidebarWrapper>
  );
};

export default Sidebar;
