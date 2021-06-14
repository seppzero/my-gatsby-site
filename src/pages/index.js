import React, { Suspense, useState } from "react";
import Search from "../../app3/src/Search";

// doesnt work on build
// import Search from 'app_three/Search';

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
      test
      <Search />
      {!isSSR && (
        <Suspense fallback={"...loading"}>
          <SearchLazy />
        </Suspense>
      )}
    </main>
  );
};

export default IndexPage;
