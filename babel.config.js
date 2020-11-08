let path = require('path')

module.exports = function (api) {
  //api.cache(false)

  let isProd = api.cache(() => process.env.NODE_ENV === 'production')
  console.log(`OK => Compiling in Babel for production=${isProd}`)

  const presets = [
    [
      '@babel/preset-env',
      {
        //modules:isBackend ? 'cjs' : 'auto',
        targets:{
          node:10
        } ,
        debug:true
      }
    ],
    '@babel/preset-react'
  ]
  const plugins = [
    //'@babel/transform-runtime',
    'inline-dotenv',
    [
      'module-resolver', {
        root :['./src'],
        alias:{
          //Alias defined here create a weird bug where babel runtime imports esm helpers in cjs output mode
          //Alias should be defined in webpack (dev-server or compile time) or in a module alias patch (nodemon babel-node)
        }
      }
    ],
    //'@babel/plugin-proposal-class-properties',
    ['babel-plugin-inline-import',
      {
        extensions:[
          '.html',
          '.xml',
          '.graphql',
          '.gql'
        ]
      }
    ],
  ]

  isProd && plugins.push(
    //'transform-react-remove-prop-types',
  )

  //['add-module-exports']


  return {
    presets,
    plugins
  }
}
