const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const withPlugins = require('next-compose-plugins');
const fs = require('fs')
const path = require('path')

module.exports = withPlugins([
  [withLess, {
    // cssModules: true,
    lessLoaderOptions: {
      javascriptEnabled: true,
      // modifyVars: themeVariables, // make your antd custom effective
    },
  }]
], NextConfig)
