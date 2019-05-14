import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import CTA from './CTA';

const CTAImages = () => {
  const {
    cta: { acf: cta },
  } = useStaticQuery(graphql`
    fragment ctaImage on wordpress__wp_media {
      localFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }

    query {
      cta: wordpressPage(wordpress_id: { eq: 47 }) {
        acf {
          puff_1_text
          puff_2_text
          puff_3_text
          puff_1_link
          puff_2_link
          puff_3_link
          puff_1_image {
            ...ctaImage
          }
          puff_2_image {
            ...ctaImage
          }
          puff_3_image {
            ...ctaImage
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CTA
              image={cta.puff_1_image.localFile.childImageSharp.fluid}
              link={cta.puff_1_link}
              text={cta.puff_1_text}
            />
          </div>
          <div className="col-md-4">
            <CTA
              image={cta.puff_2_image.localFile.childImageSharp.fluid}
              link={cta.puff_2_link}
              text={cta.puff_2_text}
            />
          </div>
          <div className="col-md-4">
            <CTA
              image={cta.puff_3_image.localFile.childImageSharp.fluid}
              link={cta.puff_3_link}
              text={cta.puff_3_text}
            />
          </div>
        </div>
        <hr style={{ margin: '40px 0 0 0' }} />
      </div>
    </>
  );
};

export default CTAImages;
