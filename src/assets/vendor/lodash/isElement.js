var isObjectLike=require("./isObjectLike"),isPlainObject=require("./isPlainObject");function isElement(e){return isObjectLike(e)&&1===e.nodeType&&!isPlainObject(e)}module.exports=isElement;