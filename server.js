const http = require('http');
const hostname = '127.0.0.1'; //host是非必要的，因为node就是运行在本机的
const port = 3000;

const cs = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.write('Hello World！GQX\n');
  res.end();//这句一定要有，不然浏览器会一直转圈，等待继续传输数据
  //res.end('Hello World！GQX\n'); //如果只有一句话需要输出，也可以直接这么输出
};

const server = http.createServer(cs).listen(3000);

console.log(`服务器运行在 http://${hostname}:${port}/`);

//测试github
//测试github