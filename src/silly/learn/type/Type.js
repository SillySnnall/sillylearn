import React, {Component} from 'react';
import {List} from 'antd';
import Title from "../view/title/Title";
import './Type.css';

/**
 * 分类
 */
export default class Type extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    title: '建筑就都是垃圾大垃圾袋垃圾多啦',
                    img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6910&h=160&w=277&ResizeMode=Crop',
                    content: "SketchUpTrainer.com的所有者兼主持人Daniel Brown将指导您完成在虚幻引擎中利用SketchUp设计的步骤。",
                    level:"入门级",
                    version:"虚幻引擎4.20版",
                    time:"19个视频，55分钟",
                },
                {
                    title: 'Title 2',
                    img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6910&h=160&w=277&ResizeMode=Crop',
                    content: "行业2",
                    level:"入门级",
                    version:"虚幻引擎4.20版",
                    time:"19个视频，55分钟",
                },
                {
                    title: 'Title 3',
                    img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6909&h=160&w=277&ResizeMode=Crop',
                    content: "SketchUpTrainer.com的所有者兼主持人Daniel Brown将指导您完成在虚幻引擎中利用SketchUp设计的步骤。",
                    level:"入门级",
                    version:"虚幻引擎4.20版",
                    time:"19个视频，55分钟",
                },
                {
                    title: 'Title 4',
                    img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6910&h=160&w=277&ResizeMode=Crop',
                    content: "行业2",
                    level:"入门级",
                    version:"虚幻引擎4.20版",
                    time:"19个视频，55分钟",
                },
                {
                    title: 'Title 4',
                    img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6910&h=160&w=277&ResizeMode=Crop',
                    content: "SketchUpTrainer.com的所有者兼主持人Daniel Brown将指导您完成在虚幻引擎中利用SketchUp设计的步骤。",
                    level:"入门级",
                    version:"虚幻引擎4.20版",
                    time:"19个视频，55分钟",
                },
                {
                    title: 'Title 4',
                    img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6909&h=160&w=277&ResizeMode=Crop',
                    content: "行业1",
                    level:"入门级",
                    version:"虚幻引擎4.20版",
                    time:"19个视频，55分钟",
                },
                {
                    title: 'Title 4',
                    img: 'https://academy.unrealengine.com/DnnImageHandler.ashx?mode=securefile&fileid=6910&h=160&w=277&ResizeMode=Crop',
                    content: "行业1",
                    level:"入门级",
                    version:"虚幻引擎4.20版",
                    time:"19个视频，55分钟",
                }
            ]
        }
    }

    render() {
        return (
            <div className="type">
                <Title props={this.props}/>
                <div className="type_banner_bg">
                    <div className="type_banner">
                        <h1 className="type_banner_text">建筑</h1>
                    </div>
                </div>
                <div className="type_item_list_bg">
                    <div className="type_item_list">
                        <List
                            grid={{gutter: 16, column: 4}}
                            dataSource={this.state.data}
                            renderItem={item => (
                                <List.Item>
                                    <div className="type_item">
                                        <img alt={item.title}
                                             className="type_item_img"
                                             src={item.img}/>
                                        <div className="type_item_layout">
                                            <h2 className="type_item_title">{item.title}</h2>
                                            <h4 className="type_item_content">{item.content}</h4>
                                            <div className="type_line">
                                            </div>
                                            <h4 className="type_level">{item.level}</h4>
                                            <h4>{item.version}</h4>
                                            <h4>{item.time}</h4>
                                        </div>

                                    </div>
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            </div>
        );
    }
}