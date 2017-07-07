const fs=require("fs");
const file="input.txt";
const data = fs.readFileSync(file);
console.log("同步读取到的文件内容：" + data.toString());


data2=fs.readFile(file,function(err,filedata){
    console.log('异步读取到的文件内容：' + filedata.toString());
});