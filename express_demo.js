const express=require("express");
const bodyParser=require("body-Parser");
var app = express();//创建实例

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })


//包含静态文件路径的方法
//在浏览器里访问以下地址来测试
//http://127.0.0.1:3000/images/logo.png
app.use(express.static("public"));


//如果使用默认的80端口，这一句可以省掉
app.listen(3000,function(){
    console.log("实例运行成功，现在可以访问了，地址是：http://127.0.0.1:3000");
});

//跟原生node的区别是：
//原生node需要定义好函数，在createServer的时候传进去
//这里是直接对app对象进行扩展
app.get("/",function(req,res){
    //res.write("Hello World,This is express demo~");
    console.log(req.query.fname);
    console.log(req.query.lname);
    res.write(req.query.fname+","+req.query.lname);
    res.end();
});

//可以用html页面，Postman，fiddler来发送Post请求来测试
app.post("/",urlencodedParser,function(req,res){
    console.log(req.body.fname);
    console.log(req.body.lname);

    var objRes = {
        fname:req.body.fname,
        lname:req.body.lname
    };

    res.setHeader("Content-Type","text/plain; charset=utf-8");
    res.write(JSON.stringify(objRes));
    res.end();
});

//直接返回一个html页面
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})