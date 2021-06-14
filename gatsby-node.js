const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const dependencies = require("./package.json").dependencies;

exports.onCreateWebpackConfig = ({ stage, actions, plugins, module }) => {
    actions.setWebpackConfig({
        plugins: [
            new ModuleFederationPlugin(
                {
                    name: 'gatsby',
                    filename: 'remoteEntry.js',
                    remotes: {
                        app_three:
                        'app_three@http://localhost:8003/remoteEntry.js',
                    },
                }
            )
        ]
    })
}

