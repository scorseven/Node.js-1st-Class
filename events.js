const events = require("events");
const emt = new events.EventEmitter();
const eventHandler = function()
{
    console.log("函数被触发了~~");
}

emt.on("eventName",eventHandler);
emt.emit("eventName");