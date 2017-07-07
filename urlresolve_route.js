const http = require("http");
const url = require("url");
const fs = require("fs");

const cs = function(req,res){
    if(req.url!="/favicon.ico")
    {
        var date = new Date();
        console.log("————————————————————————————————————");
        console.log("Now is " + date.toString() + ", a request is received!");    
        console.log("The request is : " + req);
        console.log("And after parse :");
        var arr = url.parse(req.url);
        console.log("The array :");
        console.log(arr);
        console.log("\r\n");

        switch(req.url)
        {
            case "/":
                var pageData = fs.readFileSync("index.html");
                res.write(pageData.toString());
                break;
            case "/user/add":
                res.write("user added!");
                break;
            case "/user/delete":
                res.write("user deleted!");
                break;
            case "/user/update":
                res.write("user selected!");
                break;
            default:
                res.write("no action is matched!");
                break;   
        }
        res.end();
    }    
    
};

http.createServer(cs).listen(8888);
console.log("With no Error, HTTP Server is OK!");