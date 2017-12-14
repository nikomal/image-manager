/**
 * Created by niko on 2017/12/14.
 */
import React, {Component} from 'react';
import {Row, Col, Icon, Input, Button} from 'antd';
import {request} from '../../utils/index';
import {connect} from 'react-redux';
import {setUser} from './actions';
import { bindActionCreators } from 'redux'

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
        request('/login', {
            method: 'post',
            data: {
                username: this.state.username,
                password: this.state.password
            }
        }).then((data) => {
            console.log(data);
            this.props.setUser(data.user);
        })
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
                        <h2>登录{this.props.user}</h2>
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

const mapsToProps = (state) => {
    return {
        user: state.user
    }
};

const mapsToActions = (dispatch) => {
    return {
        setUser:bindActionCreators(setUser,dispatch)
    }
};

export default connect(mapsToProps,mapsToActions)(Login);