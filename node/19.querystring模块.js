const querystring = require('querystring')
const url = 'username=hahah&age=22&gender=m'
console.log(querystring.parse('username=hahah&age=22&gender=m'));
console.log(querystring.decode('username=hahah&age=22&gender=m'));
console.log(querystring.stringify({username: 'hahah', age: '22', gender: 'm'}));
console.log(querystring.encode({username: 'hahah', age: '22', gender: 'm'}));





// res.end(JSON.stringify(data)) // 最后转换成字符串返回给前端
