const path=require("path");

var imgDir = "H:\\图片\\消失的爱人\\20170622-135523-0.JPG";
console.log(path.basename(imgDir));
console.log(path.dirname(imgDir));

var arr = path.parse(imgDir);//分割
console.log(arr);

console.log(path.format(arr));//合并

console.log(path.resolve("C:\\","Windows"));//合并

console.log(path.extname(imgDir));//文件扩展名