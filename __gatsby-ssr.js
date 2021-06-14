const { renderToString } = require("react-dom/server");

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
    console.log("bodyComponent", bodyComponent);
    const bodyHTML = renderToString(bodyComponent);

    replaceBodyHTMLString('test');
}
