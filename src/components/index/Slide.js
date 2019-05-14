import React from 'react';
import { Link } from 'gatsby';

import { StyledImg, WbnSlide } from './styles/HeroSliderStyles';

const Slide = ({ slide, active }) => (
  <WbnSlide className={active ? 'active' : ''}>
    <StyledImg fluid={slide.featured_media.localFile.childImageSharp.fluid} />
    <div className="wbn-overlay-text">
      <h1 className="wbn-header">{slide.acf.slider_header}</h1>
      <p className="wbn-text">{slide.acf.slider_text}</p>
      <Link to={slide.acf.slider_button_link}>
        <button type="button">{slide.acf.slider_button_text}</button>
      </Link>
    </div>
  </WbnSlide>
);

export default Slide;
