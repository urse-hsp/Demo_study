// export default {
//     ...require("./mock/product")
// };

//配置 一次性全部导入
import fs from 'fs';
import path from 'path';

const mock = {}
fs.readdirSync(path.join(__dirname + "/mock")).forEach(function (file) {
    if (file.match(/\.js$/)) {
        Object.assign(mock, require("./mock/" + file))
    }
})
export default mock