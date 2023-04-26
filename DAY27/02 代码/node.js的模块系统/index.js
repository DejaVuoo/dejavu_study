//使用node.js的内置模块
const fs = require('fs') //引入内置模块
fs.readFile('./1.txt',function(err,data){
	//err表示读取文件错误的结果
  //终端显示null说明调取文件成功(如果是error则说明文件调取失败，可能是文件路径错误)，buffer代码计算机二进制数据，可以通过toString的方法转为字符串形式来获取
  console.log(err,data.toString())
	txt = data.toString()
  return txt
  //data表示读取文件的内容
})
//生成2.txt 并在里面写入一句话 node.js真好学
fs.writeFile('./2.txt','node.js真好学',function(err,data){
	if(err){
		console.log(err)
	}
	
})

//将1.txt的内容读取出来后写入2.txt
fs.readFile('./1.txt',function(err,data){
	
	txt = data.toString()
  fs.writeFile('./2.txt',txt,function(err,data){
    if(err){
      console.log(err)
    }
  })
  
})

