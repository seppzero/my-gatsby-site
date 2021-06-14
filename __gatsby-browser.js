const ReactDOM = require('react-dom');
const React = require('react');

exports.replaceHydrateFunction = () => {
    return (element, container, callback) => {
        console.log("rendering!");
        console.log("element ", element )
        console.log("container", container)
        console.log("callback", callback)

        ReactDOM.render('test', container, callback);

        // ReactDOM.hydrate('test', container);

    };
};
