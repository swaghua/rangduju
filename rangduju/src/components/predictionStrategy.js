import React from "react";

class PredictionStrategy extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 289,
            multiple: 1.5,
        };
    }

    render() {
        return (
            <div className="prediction-part4">
                <h1 className="title">房东策略报告</h1>
                <div className="strategy-info">
                    <div>
                        <span className="strategy-label">最优间夜价格</span>
                        <span className="highlight">¥{this.state.price}</span><span>/间夜</span>
                    </div>
                    <div>
                        <span className="strategy-label strategy-label2">是日基础租金收益的</span>
                        <span className="highlight">{this.state.multiple}倍</span>
                    </div>
                    <div>
                        <span className="strategy-label">保底租金收益/基础租金收益</span>
                    </div>
                    <div className="strategy-graph">
                        <img src={require('../images/prediction-strategy1.png')} alt="" />
                        <img src={require('../images/prediction-strategy2.png')} alt="" />
                    </div>
                </div>
            </div>
        )
    }

}

export default PredictionStrategy;