const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const dependencies = require("./package.json").dependencies;

module.exports = {
    entry: {
        remote: './src/index',
    },
    cache: false,

    mode: 'development',
    devtool: 'source-map',

    optimization: {
        minimize: false,
    },

    output: {
        publicPath: 'http://localhost:8003/',
    },

    resolve: {
        extensions: ['.tsx', '.js', '.ts', '.json'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-typescript'],
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'app_three',
            library: { type: 'var', name: 'app_three' },
            filename: 'remoteEntry.js',
            exposes: {
                './Search': './src/Search',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
