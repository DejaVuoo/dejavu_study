//webpack的配置文件
const path=require('path')//这个path是用来拼接路径的
const miniCssExtractPlugin = require('mini-css-extract-plugin');//引入对应插件
module.exports= {
  //出现warning就设置模式mode
  mode:'develpment',
  
  //打包入口  任意指定更改index.js即可，默认叫index.js
  entry:'./src/dejavu.js',//换行要加逗号连接
  //打包出口 对象
  output:{
    //path表示打包后的路径
    path: path.resolve(__dirname,'output'),
    //也可以指定文件名称
    filename:'dejavu-webpack.js'
  },
  //配置loader处理其他类型的文件
  module:{
    rules:[
      {
        test:/\.css$/, //用来匹配.css结尾的文件
        use:['css-loader','style-loader']
      }
    ]
  },
  Plugins:[
    new miniCssExtractPlugin({
      filename: `[name]_[contenthash:8].css`,
  })
  ]
}

