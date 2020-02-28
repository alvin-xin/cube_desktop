/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-28
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-28
 */
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

module.exports = {
    mode: 'production',
    target: 'electron-main',
    entry: './src/main/index.ts',
    output: {
        path: path.resolve(__dirname, '../builder'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        modules: [path.join(__dirname, '..', 'src/main'), 'node_modules']
    },
    optimization: {
        minimizer: [
                new TerserPlugin({
                    parallel: true,
                    sourceMap: shouldUseSourceMap,
                    cache: true
                })
            ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    node: {
        __dirname: false,
        __filename: false
    }
};
