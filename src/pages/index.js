import React, { lazy, Suspense, useEffect, useState } from "react";

import Search from "../../app3/src/Search";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const SearchLazy = React.lazy(() => import("app_three/Search"));

const IndexPage = () => {
  const isSSR = typeof window === "undefined";

  return (
    <main style={pageStyles}>
      prerenderd ---------=replaced by mf remoteEntry.js =----------
      {!isSSR && (
        <Suspense fallback={<Search />}>
          <SearchLazy />
        </Suspense>
      )}
    </main>
  );
};

export default IndexPage;
