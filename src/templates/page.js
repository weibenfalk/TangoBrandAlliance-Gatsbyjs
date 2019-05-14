/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PageSidebar from '../components/page/PageSidebar';
import BreadCrumb from '../components/BreadCrumb';
import PageHero from '../components/PageHero';

const PageContent = styled.article`
  margin: 20px 0 0 0;
`;

const PageTemplate = ({ data, pageContext }) => (
  <Layout>
    {console.log(pageContext)}
    {data.currentPage.featured_media ? (
      <PageHero
        img={data.currentPage.featured_media.localFile.childImageSharp.fluid}
      />
    ) : null}
    <BreadCrumb parent={data.parent} />
    <div className="container">
      <div className="row" style={{ marginBottom: '40px' }}>
        <PageSidebar
          parentChildren={data.parentChildren}
          currentPage={data.currentPage}
          parent={data.parent}
        >
          {data.children}
        </PageSidebar>
        <PageContent className="col-lg-9">
          <h1 dangerouslySetInnerHTML={{ __html: data.currentPage.title }} />
          <div dangerouslySetInnerHTML={{ __html: data.currentPage.content }} />
        </PageContent>
      </div>
    </div>
  </Layout>
);

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!, $parent: Int!, $wpId: Int!) {
    currentPage: wordpressPage(id: { eq: $id }) {
      title
      content
      wordpress_parent
      acf {
        education
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    parentChildren: allWordpressPage(
      filter: { wordpress_parent: { eq: $parent } }
    ) {
      edges {
        node {
          id
          title
          link
        }
      }
    }
    children: allWordpressPage(filter: { wordpress_parent: { eq: $wpId } }) {
      edges {
        node {
          id
          title
          link
        }
      }
    }
    parent: wordpressPage(wordpress_id: { eq: $parent }) {
      title
      link
    }
  }
`;
