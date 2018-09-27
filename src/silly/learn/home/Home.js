import React, {Component} from 'react';
import './Home.css';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import Title from "../view/title/Title";  // or 'antd/dist/antd.less'
/**
 * 首页
 */
export default class Home extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="home">
                <Title props={this.props}/>
                <p>首页</p>
                <p>首页</p>
                <p>首页</p>
                <p>首页</p>
                <Button type="primary" icon="search" onClick={() => this._loginRequest(this.props)}>Search</Button>
            </div>
        );
    }

    // 登录请求
    _loginRequest(props) {
        props.history.push({pathname: '/study'});
    }
}