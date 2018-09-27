import React, {Component} from 'react';
import './Play.css';
import Title from "../view/title/Title";
import {List} from 'antd';

/**
 * 视频播放
 */
export default class Play extends Component {


    constructor() {
        super();
        this.state = {
            data: [
                {
                    title: '0.1 - 简介',
                    content: '本课程和我自己的简短介绍，以及要涵盖的主题的摘要。',
                    time: '时长：00：53'
                },
                {
                    title: '0.2 - 你应该知道的这门课程',
                    content: '我们将在学习该课程之前讨论您应该已经知道的一些事项，并提供其他位置以获得其他帮助，例如虚幻Wiki和文档。观众应该已经熟悉使用3ds Max或SketchUp等工具创建3D内容，以及3D内容创建中使用的基本术语，以及虚幻编辑器的基本用法。',
                    time: '时长：00：59'
                },
                {
                    title: '0.3 - 课程资产adsadsa 颠三倒四多所',
                    content: '快速浏览课程中使用的资产。',
                    time: '时长：00：59'
                },
                {
                    title: '0.1 - 简介',
                    content: '本课程和我自己的简短介绍，以及要涵盖的主题的摘要。',
                    time: '时长：00：53'
                },
                {
                    title: '0.2 - 你应该知道的这门课程',
                    content: '我们将在学习该课程之前讨论您应该已经知道的一些事项，并提供其他位置以获得其他帮助，例如虚幻Wiki和文档。观众应该已经熟悉使用3ds Max或SketchUp等工具创建3D内容，以及3D内容创建中使用的基本术语，以及虚幻编辑器的基本用法。',
                    time: '时长：00：59'
                },
                {
                    title: '0.3 - 课程资产',
                    content: '快速浏览课程中使用的资产。',
                    time: '时长：00：59'
                },
                {
                    title: '0.1 - 简介',
                    content: '本课程和我自己的简短介绍，以及要涵盖的主题的摘要。',
                    time: '时长：00：53'
                },
                {
                    title: '0.2 - 你应该知道的这门课程',
                    content: '我们将在学习该课程之前讨论您应该已经知道的一些事项，并提供其他位置以获得其他帮助，例如虚幻Wiki和文档。观众应该已经熟悉使用3ds Max或SketchUp等工具创建3D内容，以及3D内容创建中使用的基本术语，以及虚幻编辑器的基本用法。',
                    time: '时长：00：59'
                },
                {
                    title: '0.3 - 课程资产',
                    content: '快速浏览课程中使用的资产。',
                    time: '时长：00：59'
                },
            ]
        }
    }

    render() {
        return (
            <div className="play">
                <Title props={this.props}/>
                <div className="play_body_bg">
                    <div className="play_body">

                        <div className="play_title">
                            <h1 className="play_title_text">收集垃圾的拉基多拉</h1>
                        </div>

                        <div className="play_play">
                            <div className="play_play_content">

                            </div>
                            <div>
                            </div>
                            <div className="play_play_list">
                                <List
                                    dataSource={this.state.data}
                                    renderItem={item => (
                                        <List.Item>
                                            <div className="play_item_list_bg">
                                                <h3>{item.title}</h3>
                                            </div>
                                        </List.Item>)}
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="play_title_text play_title">课程描述</h2>
                            <h3>SketchUpTrainer.com的所有者兼主持人Daniel
                                Brown将指导您完成在虚幻引擎中利用SketchUp设计的步骤。Daniel将带您超越基础知识，包括可改善您的流程体验的工具和技术。</h3>
                            <h2 className="play_title_text play_title">作者简介</h2>
                            <div className="play_play">
                                <img className="play_photo"
                                     src="https://dnnrz1gqa.blob.core.windows.net/portals/1/Images/Presenter/headshot_doyle.png?sv=2017-04-17&sr=b&si=DNNFileManagerPolicy&sig=bFRv1sqDqDwrGn9zEzxdl01hQP7%2Bb%2BtHJu3ISWewr1A%3D"
                                     alt="persenter_photo"/>
                                <div className="play_photo_text">
                                    <h3>马特道尔</h3>
                                    <h3>Matt
                                        Doyle是一位创作者，教育家和经验丰富的技术艺术家，自2000年以来一直担任游戏行业的许多角色。他还从事建筑可视化工作，作为预渲染和实时3D演练的创建者。Matt之前曾在Autodesk担任过几个数字内容创作工具的传播者和培训师。他的专长包括对虚幻引擎，ZBrush，Substance
                                        Painter，3ds Max和Maya的深入了解。</h3>
                                </div>
                            </div>
                            <h2 className="play_title_text play_title">课程结构</h2>
                            <h3>时长：13个视频，58分钟</h3>
                            <h3>级别：入门</h3>
                            <h3>平台：4.20</h3>
                            <h3>行业：建筑</h3>
                            <h3>适用于： 建筑师，可视化</h3>
                            <List
                                grid={{gutter: 16, column: 3}}
                                dataSource={this.state.data}
                                renderItem={item => (
                                    <List.Item>
                                        <div className="play_class_item">
                                            <h2>{item.title}</h2>
                                            <h3>{item.content}</h3>
                                            <h3>{item.time}</h3>
                                        </div>
                                    </List.Item>
                                )}
                            />
                            <h2 className="play_title_text play_title">项目文件</h2>
                            <h3>www.baidu.com</h3>
                            <h3>www.baidu.com</h3>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}