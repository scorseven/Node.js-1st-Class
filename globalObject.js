//第一组
console.log(__filename);
console.log(__dirname);

//第二组
console.time("记录时间间隔");
for(var i=0;i<100000;i++){
    //TODO:
}
console.timeEnd("记录时间间隔");

//第三组
/*setTimeout(function(){
    console.log("3秒已过，这个也是异步的~");
},3000);

var itv = setInterval(function(){
    var sec = (new Date()).getSeconds();
    if(sec==59) 
    {
        clearInterval(itv);
        console.log("计时结束~");
    }
    console.log("每秒一次：" + sec);
},1000);*/

//第四组，进程相关信息
console.log(process);

//第五组,stdin和stdout
process.stdin.on("readable",function(){
    str = process.stdin.read();
    if(str!=null)
    {
        process.stdout.write("The input is : " + str);
    }
});