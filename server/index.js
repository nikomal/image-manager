/**
 * Created by Administrator on 2017/4/3.
 */
const express = require('express');
const router = require('./router.js');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// 处理动态路由
app.use(router);
// 启动监听
app.listen(3001,() => {
  console.log('running in 3001');
});