import React from "react";
import {Tooltip, Icon} from "antd";

class PredictionInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            info: {
                businessCircle: '朝阳门',
                community: '三丰里小区',
                profit: [6700, 211.22],
                emptyDay: 15,
                rate: 3.8,
                distance: 218,
            },
            priceGraph: [],
            emptyGraph: [],
            houseNumber: 1,
        };
    }

    render() {
        return (
            <div className="prediction-part2">
                <h1 className="title h-inline">房源基本信息</h1>
                <h2 className="subtitle h-inline">数据汇总分析自与您房源同户型同小区的 {this.state.houseNumber} 套正在发布长租房源。</h2>
                <div className="prediction-info">
                    <div className="left-info">
                        <div>
                            <span className="left-info-label">所在商圈</span>
                            <span className="highlight">{this.state.info.businessCircle}</span>
                        </div>
                        <div>
                            <span className="left-info-label">所在小区</span>
                            <span className="highlight">{this.state.info.community}</span>
                        </div>
                        <div>
                            <span className="left-info-label">日基础租金收益&nbsp;
                                <Tooltip title="日基础租金收益">
                                    {/* 上面的 title 需要确认信息后修改 */}
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                            <span className="highlight">¥{this.state.info.profit[0]}</span><span>/月</span>
                            <span className="highlight">¥{this.state.info.profit[1]}</span><span>/天</span>
                        </div>
                        <div>
                            <span className="left-info-label">基础空置天数&nbsp;
                                <Tooltip title="基础空置天数">
                                    {/* 上面的 title 需要确认信息后修改 */}
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                            <span className="highlight">{this.state.info.emptyDay}天</span>
                        </div>
                        <div>
                            <span className="left-info-label">基础租金收益年涨幅</span>
                            <span className="highlight">{this.state.info.rate}%</span>
                        </div>
                        <div>
                            <span className="left-info-label">距离最近经济型酒店的距离</span>
                            <span className="highlight">{this.state.info.distance}m</span>
                        </div>
                    </div>
                    <div className="right-graph">
                        <div className="price-graph">
                            相同小区相同户型的长租价格的频数分布直方图
                        </div>
                        <div className="empty-graph">
                            相同小区相同户型的基础空置天数的频数分布直方图
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PredictionInfo;