import React, {Component} from 'react';
import './Study.css';
import {List} from 'antd';
import Title from "../view/title/Title";

/**
 * 学习
 */
export default class Study extends Component {

    constructor() {
        super();
        this.state = {
            data: '',
            item_bg_color: ['#ffffff', '#ececec'],
        };
    }

    componentDidMount() {
        const dataItem = [
            {
                title: '建筑',
                img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6910&h=160&w=277&ResizeMode=Crop',
                content: "14节课"
            },
            {
                title: 'Title 2',
                img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6910&h=160&w=277&ResizeMode=Crop',
                content: "行业2"
            },
            {
                title: 'Title 3',
                img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6909&h=160&w=277&ResizeMode=Crop',
                content: "行业3"
            },
            {
                title: 'Title 4',
                img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6910&h=160&w=277&ResizeMode=Crop',
                content: "行业2"
            },
            {
                title: 'Title 4',
                img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6910&h=160&w=277&ResizeMode=Crop',
                content: "行业1"
            },
            {
                title: 'Title 4',
                img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6909&h=160&w=277&ResizeMode=Crop',
                content: "行业1"
            },
            {
                title: 'Title 4',
                img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6910&h=160&w=277&ResizeMode=Crop',
                content: "行业1"
            },
            {
                title: 'Title 4',
                img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6910&h=160&w=277&ResizeMode=Crop',
                content: "行业1"
            },
            {
                title: 'Title 4',
                img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6910&h=160&w=277&ResizeMode=Crop',
                content: "行业4"
            },
            {
                title: 'Title 4',
                img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6910&h=160&w=277&ResizeMode=Crop',
                content: "行业1"
            },
        ];
        this.setState({
            data: [
                {
                    type: '建筑',
                    item: dataItem
                },
                {
                    type: '杀菌达',
                    item: dataItem
                },
                {
                    type: 'Title 3',
                    item: dataItem
                },
                {
                    type: 'Title 4',
                    item: dataItem
                }],
        })
    }

    render() {
        return (
            <div className="study">
                <Title props={this.props}/>
                <div className="study_banner_bg">
                    <div className="study_banner">
                    </div>
                </div>

                <List
                    dataSource={this.state.data}
                    renderItem={(item1, index) => (
                        <List.Item style={{backgroundColor: this.state.item_bg_color[index % 2]}}>
                            <div className="item_bg">
                                <div className="item">
                                    <h2 className="study_type">{item1.type}</h2>
                                    <List
                                        grid={{gutter: 14, column: 4}}
                                        dataSource={item1.item}
                                        renderItem={item2 => (
                                            <List.Item>
                                                <div className="item2">
                                                    <h2 className="item_title2">{item2.title}</h2>
                                                    <img alt={item2.content}
                                                         className="item_img2"
                                                         src={item2.img}/>
                                                    <h4 className="item_content2">{item2.content}</h4>
                                                </div>
                                            </List.Item>
                                        )}
                                    />
                                </div>
                            </div>
                        </List.Item>)}
                />

                <div className="bottom_bg">
                    <div className="bottom">

                    </div>
                </div>
            </div>
        );
    }
}