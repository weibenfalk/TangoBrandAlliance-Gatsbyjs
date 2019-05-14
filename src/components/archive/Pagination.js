import React from 'react';
import { Link } from 'gatsby';

import { PaginationWrapper } from './styles/PaginationStyles';

const Pagination = ({ catSlug, page, totalPages }) => (
  <>
    <h2>
      Navigering - sida {page} / {totalPages}
    </h2>
    <PaginationWrapper>
      {page > 1 ? (
        <Link
          to={`/trendspaningar/${catSlug}/${page === 2 ? '' : page - 1}/`}
          className="navBack"
        >
          Föregående
        </Link>
      ) : (
        <div />
      )}
      {page < totalPages ? (
        <Link
          to={`/trendspaningar/${catSlug}/${page + 1}/`}
          className="navForward"
        >
          Nästa
        </Link>
      ) : (
        <div />
      )}
    </PaginationWrapper>
  </>
);

export default Pagination;
