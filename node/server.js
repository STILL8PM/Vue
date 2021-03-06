const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()
app.use(history())//处理history模式的刷新404问题
app.use(express.static(__dirname + '/static'))

app.get('/person', (request, response) => {
    response.send({
        name: 'Tom',
        age: 18
    })
})

app.listen(5005, (err) => {
    if (!err) console.log('服务器启动成功了！');
})