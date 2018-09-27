import React, {Component} from 'react';
import './Title.css';
import logo from '../../../res/img/logo.png';

/**
 * title
 */
export default class Title extends Component {

    render() {
        return (
            <div className="title_bg">
                <div className="title_layou">
                    <div className="ico_title">
                        <a><img className="logo" src={logo} alt="logo" onClick={() => this._logo(this.props.props)}/></a>
                        <a><h3 className="title_text text_style" onClick={() => this._news(this.props.props)}>新闻</h3></a>
                        <a><h3 className="title_text text_style" onClick={() => this._study(this.props.props)}>学习</h3></a>
                    </div>
                    <div>
                    </div>
                    <div className="ico_title">
                        <h3 className="text_style">登录</h3>
                        <h2 className="text_style line_margin">|</h2>
                        <h3 className="text_style">注册</h3>
                    </div>
                </div>
            </div>
        );
    }

    // 新闻
    _news(props) {
        props.history.push({pathname: '/news'});
    }

    // 学习
    _study(props) {
        props.history.push({pathname: '/study'});
    }

    // 首页
    _logo(props) {
        props.history.push({pathname: '/'});
    }
}