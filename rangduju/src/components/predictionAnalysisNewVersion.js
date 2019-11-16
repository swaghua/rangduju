import React from "react"
import {Icon, Tooltip} from 'antd'
import classNames from 'classnames'

class PredictionAnalysisNewVersion extends React.Component {
    constructor() {
        super()
        this.state = {
            head: ['', '独立房间', '一居室', <span>两居室&nbsp;<Tooltip title="两居室"><Icon type="question-circle-o" /></Tooltip></span>, '三居室', '综合', '经济型酒店',],
            data: [
                ['您小区/商圈的已短租房源数', '120', '97', '45', '20', '162', ' ',],
                ['您小区/商圈的预期短租房源数容量', '201', '269', '120', '20', '409', '183（2家）',],
                ['饱和程度', '120/201', '97/269', '45/120', '20/20', '162/409', ''],
                ['平均出租价格', '¥139', '¥216', '¥238', '¥298', '', '¥326',],
                ['平均入住率', '89%', '94%', '82%', '73%', '', '86%',],
            ],
            focusColumn: 2,
        }
    }

    render() {
        return (
            <div className="prediction-part3">
                <h1 className="title h-inline">短租市场分析</h1>
                <h2 className="subtitle h-inline">明确竞争行情。</h2>
                <div className="market-table-wrapper">
                    <div className="market-table">
                        <div className="market-table-head">
                            <div className="market-table-row">
                                {
                                    this.state.head.map(item =>
                                        <div className='market-table-item'>
                                            {item}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="market-table-body">
                            {
                                this.state.data.map(row =>
                                    <div className="market-table-row">
                                        {
                                            row.map(item =>
                                                <div className={classNames({
                                                    'market-table-item': true,
                                                    'focus': this.state.focusColumn === row.indexOf(item),
                                                })}>
                                                    {item}
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="analysis-season">
                    <div className='analysis-season-item'>季节性因素</div>
                    <div className="analysis-season-graph">
                        12个月通过热力图热度+指标来反映热度
                    </div>
                    <div className="analysis-season-graph">
                        <img src={require('../images/prediction-analysis.png')} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default PredictionAnalysisNewVersion