import React, {Component} from 'react';
import './News.css';
import Title from "../view/title/Title";
/**
 * 新闻
 */
export default class News extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="news">
                <Title props={this.props}/>
                <p>新闻</p>
                <p>新闻</p>
                <p>新闻</p>
                <p>新闻</p>
            </div>
        );
    }
}