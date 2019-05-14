import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledImg = styled(Img)`
  height: 300px;
`;

const PageHero = ({ img }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col" style={{ padding: 0 }}>
        <StyledImg fluid={img} />
      </div>
    </div>
  </div>
);

export default PageHero;
