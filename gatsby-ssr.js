import { ChunkExtractor } from '@loadable/server'
import path from 'path'

console.log("inside gatsby")
const extractor = new ChunkExtractor({
    // Read the stats file generated by webpack loadable plugin.
    statsFile: path.resolve('./public/loadable-stats-build-javascript.json'),
    entrypoints: [],
})


// extractor.collectChunks() will wrap the application in a ChunkExtractorManager
export const wrapRootElement = ({ element }) => extractor.collectChunks(element)

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
    // Set link rel="preload" tags in the head to start the request asap. This will NOT parse the assets fetched
    setHeadComponents(extractor.getLinkElements())

    // Set script and style tags at the end of the document to parse the assets.
    setPostBodyComponents([...extractor.getScriptElements(), ...extractor.getStyleElements()])

    // Reset collected chunks after each page is rendered
    console.log(setHeadComponents, )
    extractor.chunks = []
}



// const statsFile = path.resolve('./public/loadable-stats-build-javascript.json')
// const extractor = new ChunkExtractor({ statsFile })

// console.log("here",statsFile)

// const html = renderToString(extractor.collectChunks(<Search />))
// const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();