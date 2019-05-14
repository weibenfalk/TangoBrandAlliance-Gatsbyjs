/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';

import tangoMail from '../../images/tango-mail-icon.svg';
import tangoPage from '../../images/tango-page-icon.svg';

import { SidebarWrapper, SidebarMenu } from './styles/ArchiveSidebarStyles';

const ArchiveSidebar = ({ catId, categories }) => {
  // Sort the categories because we want to place Alla Trendspaningar first
  const sortedCategories = [...categories].sort((x, y) => {
    if (x.node.slug === 'alla-trendspaningar') return -1;
    if (y.node.slug === 'alla-trendspaningar') return 1;
    return 0;
  });

  return (
    <SidebarWrapper className="col-lg-3">
      <SidebarMenu className="tango-sidebar-menu tango-page-sidebar-text">
        <li className="sidebar-menu-header">
          <img src={tangoPage} alt="tango-page" />
          <span>Trendspaningar</span>
        </li>

        {sortedCategories.map(cat => {
          if (cat.node.count !== 0) {
            return cat.node.slug !== 'okategoriserade' ? (
              <li
                key={cat.node.id}
                className={cat.node.id === catId ? 'sidebar-highlighted' : null}
              >
                <span className="count">{cat.node.count}</span>
                {cat.node.id === catId ? (
                  <span dangerouslySetInnerHTML={{ __html: cat.node.name }} />
                ) : (
                  <Link to={`/trendspaningar/${cat.node.slug}/`}>
                    <span dangerouslySetInnerHTML={{ __html: cat.node.name }} />
                  </Link>
                )}
              </li>
            ) : null;
          }
          return null;
        })}

        <li className="sidebar-menu-header">
          <div style={{ marginTop: '40px' }}>
            <img src={tangoMail} alt="tango-page" />
            <span>Mailinglista</span>
          </div>
        </li>
        <p>
          Vill du bli uppdaterad om när nya trendspaningar publiceras? <br />
          Maila ditt för- och efternamn, företagsnamn samt mailadress till{' '}
          <a href="mailto:anders@tangobrandalliance.se">Anders Lindén.</a>
        </p>
      </SidebarMenu>
    </SidebarWrapper>
  );
};

export default ArchiveSidebar;
