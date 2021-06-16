import React from "react";
import loadable from "@loadable/component";
// import { Helmet } from "react-helmet";

import Search from "../../app3/src/Search";

// doesnt work on build
// import Search from 'app_three/Search';

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// const SearchLazy = React.lazy(() => import("app_three/Search"));

// const script = document.createElement("script");
// script.src = "http://localhost:8003/main.js";
// script.async = true;
// document.body.appendChild(script);


const OtherComponent = loadable(() => import(/* webpackChunkName: 'app_three' */ 'app_three/Search'), { ssr: false })
/*
const Test = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    // const MyLazyComponent = React.lazy(async () => {
    //     let mod;
    //     while(!mod){ 
    //         try{
    //             mod = await import('app_three/Search');
    //         }
    //         catch(err){}   
    //     }
    //     return mod 
    // });

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1000)
    }, []);

    return isLoaded && 'nothing';
}

const Fallback = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        console.log("e.target.value", e.target.value)

    }
    return (
            <input onChange={handleChange} />
    )
}
*/

const IndexPage = () => {
  // const isSSR = typeof window === "undefined";


  return (
    <main style={pageStyles}>
      prerenderd
      <br />


      ---------= replaced by mf main.js =----------
      <div id="root">
        <Search />
      </div>

      <br />
      <br />
      <br />
      <br />
      <OtherComponent fallback={<Search />} />

      {/* ---------=replaced by mf remoteEntry.js =----------
      <Suspense fallback={<Search />}>
        <SearchLazy />
      </Suspense> */}
    </main>
  );
};

export default IndexPage;
