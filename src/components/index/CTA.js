import React from 'react';
import { Link } from 'gatsby';

import {
  StyledImg,
  CTAImage,
  CTAImageTextWrapper,
  CTAImageText,
} from './styles/CTAImagesStyles';

const CTA = ({ image, link, text }) => (
  <CTAImage>
    <StyledImg fluid={image} />
    <Link to={link}>
      <CTAImageTextWrapper>
        <CTAImageText>{text}</CTAImageText>
      </CTAImageTextWrapper>
    </Link>
  </CTAImage>
);

export default CTA;
