/**
 * Created by Administrator on 2017/4/3.
 */
const express = require('express');
const handler = require('./handler.js');
const router = express.Router();


router.post('/login',handler.login);

module.exports = router;