/**
 * Created by Administrator on 2017/4/3.
 */
const db = require('./db.js');

exports.login = (req,res) => {
    let param = req.body;
    let sql = 'select * from userinfo where username=? and password=?';
    console.log(param);
    let data = [param.username, param.password];
    db.base(sql, data, (ret) => {
        console.log(ret);
        if (ret.length === 1) {
            res.json({user:param.username});
        } else {
            res.json({ret_code:2})
        }
    });
};

// 跳转到主页 判断登录注册
exports.showIndex = (req, res) => {
    //去数据库把所有数据查询出来  和模板拼接 返回前台
    if (req.url.startsWith('/login')) {
        let param = req.body;
        let sql = 'select * from userinfo where username=? and password=?';
        let data = [param.username, param.password];
        db.base(sql, data, (ret) => {
            if (ret.length === 1) {
                req.session.regenerate(function(err) {
                    if(err){
                        return res.json({ret_code:1});
                    }
                    req.session.loginUser = param.username;
                    res.json({ret_code: 0});
                });
            } else {
                res.json({ret_code:2})
            }
        });
    }
    if (req.url.startsWith('/register')) {
        console.log(req.body);
        let sql = 'insert into userinfo(username,password) values(?,?)';
        let data = [req.body.usernameS, req.body.passwordS];
        db.base(sql, data, (ret) => {
            if (ret.affectedRows === 1) {
                res.send(true);
            }
        });
    }
};
