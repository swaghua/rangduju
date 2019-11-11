import React from "react";
import {Icon, Table, Tooltip} from 'antd';
import classNames from 'classnames';

class PredictionAnalysis extends React.Component {
    tableColumns() {
        // “季节性因素”的 index, 用于最后一列的表格布局
        const indexOfSeason = 5;
        const o = [
            {
                title: ' ',
                dataIndex: 'type',
                width: '16rem',
            },
            {
                title: '独立房间',
                dataIndex: 'independent',
                className: classNames({
                    'independent': true,
                    'focus': this.state.focusColumn === 'independent',
                }),
                align: 'center',
                render: (value, row, index) => {
                    const obj = {
                        children: value,
                        props: {},
                    };
                    // 用于最后一列的表格布局
                    if (index === indexOfSeason) {
                        obj.props.colSpan = 6;
                    }
                    return obj;
                },
            },
            {
                title: '一居室',
                dataIndex: 'oneRoom',
                className: classNames({
                    'oneRoom': true,
                    'focus': this.state.focusColumn === 'oneRoom',
                }),
                align: 'center',
                render: (value, row, index) => {
                    const obj = {
                        children: value,
                        props: {},
                    };
                    // 用于最后一列的表格布局
                    if (index === indexOfSeason) {
                        obj.props.colSpan = 0;
                    }
                    return obj;
                },
            },
            {
                title: <span>两居室&nbsp;
                    <Tooltip title="两居室">
                        {/* 上面的 title 需要确认信息后修改 */}
                        <Icon type="question-circle-o" />
                    </Tooltip>
                </span>,
                dataIndex: 'twoRoom',
                className: classNames({
                    'twoRoom': true,
                    'focus': this.state.focusColumn === 'twoRoom',
                }),
                align: 'center',
                render: (value, row, index) => {
                    const obj = {
                        children: value,
                        props: {},
                    };
                    // 用于最后一列的表格布局
                    if (index === indexOfSeason) {
                        obj.props.colSpan = 0;
                    }
                    return obj;
                },
            },
            {
                title: '三居室',
                dataIndex: 'threeRoom',
                className: classNames({
                    'threeRoom': true,
                    'focus': this.state.focusColumn === 'threeRoom',
                }),
                align: 'center',
                render: (value, row, index) => {
                    const obj = {
                        children: value,
                        props: {},
                    };
                    // 用于最后一列的表格布局
                    if (index === indexOfSeason) {
                        obj.props.colSpan = 0;
                    }
                    return obj;
                },
            },
            {
                title: '综合',
                dataIndex: 'total',
                className: 'total',
                align: 'center',
                render: (value, row, index) => {
                    const obj = {
                        children: value,
                        props: {},
                    };
                    // 用于最后一列的表格布局
                    if (index === indexOfSeason) {
                        obj.props.colSpan = 0;
                    }
                    return obj;
                },
            },
            {
                title: '经济型酒店',
                dataIndex: 'hotel',
                className: 'hotel',
                align: 'center',
                render: (value, row, index) => {
                    const obj = {
                        children: value,
                        props: {},
                    };
                    if (index === 0) {
                        obj.props.rowSpan = 3;
                    }
                    // These two are merged into above cell
                    if (index === 1 || index === 2) {
                        obj.props.rowSpan = 0;
                    }
                    // 用于最后一列的表格布局
                    if (index === indexOfSeason) {
                        obj.props.colSpan = 0;
                    }
                    return obj;
                },
            },
        ];
        return o;
    }

    tableRows() {
        const o = [
            // 表格行设置信息与实际数据可以按照下面的方式进行分离
            // 具体实现等到获取后端的实际数据时再进行修改
            {
                key: '1',
                type: '您小区/商圈的已短租房源数',
                independent: <span>{this.state.data["1"].independent}</span>,
                oneRoom: <span>{this.state.data["1"].oneRoom}</span>,
                twoRoom: <span>{this.state.data["1"].twoRoom}</span>,
                threeRoom: <span>{this.state.data["1"].threeRoom}</span>,
                total: <span>{this.state.data["1"].total}</span>,
                hotel: <span>{this.state.data["1"].hotel}</span>,
            },
            {
                key: '2',
                type: '您小区/商圈的预期短租房源数容量',
                independent: <span>{this.state.data["2"].independent}</span>,
                oneRoom: <span>{this.state.data["2"].oneRoom}</span>,
                twoRoom: <span>{this.state.data["2"].twoRoom}</span>,
                threeRoom: <span>{this.state.data["2"].threeRoom}</span>,
                total: <span>{this.state.data["2"].total}</span>,
            },
            {
                key: '3',
                type: '饱和程度',
                independent: 120 + '/' + 201,
                oneRoom: 97 + '/' + 269,
                twoRoom: 45 + '/' + 120,
                threeRoom: 20 + '/' + 20,
                total: 162 + '/' + 409,
                hotel: '183（2家）',
            },
            {
                key: '4',
                type: '平均出租价格',
                independent: <span>¥{this.state.data["1"].independent}</span>,
                oneRoom: '¥' + 216,
                twoRoom: '¥' + 238,
                threeRoom: '¥' + 298,
                total: ' ',
                hotel: '¥' + 326,
            },
            {
                key: '5',
                type: '平均入住率',
                independent: 89 + '%',
                oneRoom: 94 + '%',
                twoRoom: 82 + '%',
                threeRoom: 73 + '%',
                total: ' ',
                hotel: 86 + '%',
            },
            {
                key: '6',
                type: <span>季节性因素</span>,
                independent: <div className="analysis-season-graph">
                    <div className="analysis-season-graph-1">
                        12个月通过热力图热度+指标来反映热度
                    </div>
                    <div className="analysis-season-graph-2">
                        <img src={require('../images/prediction-analysis.png')} alt="" />
                    </div>
                </div>,
            },
        ];
        return o;
    }

    constructor() {
        super();
        this.state = {
            data: {
                1: {
                    independent: 120,
                    oneRoom: 97,
                    twoRoom: 45,
                    threeRoom: 20,
                    total: 162,
                    hotel: '183（2家）',
                },
                2: {
                    independent: 201,
                    oneRoom: 269,
                    twoRoom: 120,
                    threeRoom: 20,
                    total: 409,
                },
                3: {

                },
            },
            // 当前需要高亮的列
            focusColumn: 'oneRoom',
        };
    }

    render() {
        return (
            <div className="prediction-part3">
                <h1 className="title h-inline">短租市场分析</h1>
                <h2 className="subtitle h-inline">明确竞争行情。</h2>
                {/* 后续考虑自己实现表格进行重构，取消使用 ant design 表格，以便于修改样式 */}
                <Table columns={this.tableColumns()} dataSource={this.tableRows()} />
            </div>
        )
    }
}

export default PredictionAnalysis;