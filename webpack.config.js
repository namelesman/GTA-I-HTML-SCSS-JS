const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['./app/js/src/index.js'],
    mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'src/bundle.js',
		publicPath: './'
    },
    resolve: {
        alias: {
            '/images': path.resolve(__dirname, 'app/images')
        }
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'app/images', to: 'images' },
                { from: 'app/js/lib', to: 'src/lib' },
                { from: 'app/index.html', to: 'index.html' }
            ]
        }),
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    url: false
                }
            }, {
                loader: "sass-loader"
            }]
        }]
    },
    performance: {
        hints: false
    }
};