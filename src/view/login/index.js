/**
 * Created by niko on 2017/12/14.
 */
import React, {Component} from 'react';
import {Row, Col, Icon, Input, Button} from 'antd';
import {connect} from 'react-redux';
import {userLogin} from './actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    submit = () => {
        console.log('send');
        this.props.userLogin({
            username:this.state.username,
            password:this.state.password
        });
    };


    render() {
        return ( <Row className="login-head">
            <Col span={5} offset={4} className="head-size">
                <div className="login-introduce">
                    <div className="logo-box"/>
                    <div className="division-line"/>
                </div>
            </Col>
            <Col span={4} offset={5} className="head-size">
                <div className="login-prompt">
                    <div className="prompt-box">
                        <h2>登录{!this.props.loading ? this.props.user : '正在登录中...'}</h2>
                        <Input size="large" type="text" placeholder="输入用户名" prefix={<Icon type="user"/>}
                               onChange={this.onUsernameChange}
                        />
                        <Input size="large" type="password" placeholder="输入密码" prefix={<Icon type="lock"/>}
                               onChange={this.onPasswordChange}
                        />
                        <div className="login-btn">
                            <Button type="primary" onClick={this.submit}>登录</Button>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>)
    }
}

const mapsStateToProps = (state) => {
    return {
        user: state.user.user,
        loading: state.user.isLoading
    }
};

const mapsDispatchToProps = (dispatch) => {
    return {
        userLogin: (user) => dispatch(userLogin(user))
    }
};

export default connect(mapsStateToProps, mapsDispatchToProps)(Login);