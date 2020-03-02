/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-28
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-28
 */
const merge = require("webpack-merge");
const config = require("./webpack.main.prod.config");

module.exports = merge(config, {
    mode: "development",
    //默认 false，也就是不不开启
    watch: false,
});