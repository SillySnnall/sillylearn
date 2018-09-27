import React, {Component} from 'react';
import './Test.css';
import { Table} from 'antd';
/**
 * 测试
 */
export default class Test extends Component {



    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="test">
                <Table dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}