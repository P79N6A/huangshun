const path = require("path");
const uilt = require("./asyncCreateFile");
const r_new_path = path.resolve(__dirname,"../file/result.txt"); // 读取的文件路径
const w_path = path.resolve(__dirname,"../file/result.json"); // 写入的文件路径
module.exports.getJson = async function(){
    let str = await uilt.readFileAsync(r_new_path); // 获取写好的文件
    let startNum = str.indexOf("(");
    let endNum = str.lastIndexOf("}");
    let count = endNum - startNum;
    let result = JSON.parse(str.substr(startNum+1,count)).data.list;
    let oldStr = await uilt.readFileAsync(w_path);
    let oldStrArray = oldStr == "" ? []:JSON.parse(oldStr);
    let writeStrArray = [...result,...oldStrArray];
    let writeResult = await uilt.writeFileAsync(w_path,JSON.stringify(writeStrArray));
};;