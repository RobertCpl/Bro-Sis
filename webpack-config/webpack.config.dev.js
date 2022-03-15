const path = require('path')
//import path from "path"
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "index.js",                               // lub [name].js jesli entry zamieniemy na obiekt i dany nazwe własciwosci.
        path: path.resolve(__dirname,'../', "build"),
        assetModuleFilename: 'assets/images/[name][ext]'
        
    },
    devServer: {
        open: true,
        static: {
           directory: path.resolve(__dirname, '../','public')
        }       
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
              },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/resource',
                generator: {
                            filename: 'assets/images/[name][ext]'
                         },
              },
            
                    ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],


}