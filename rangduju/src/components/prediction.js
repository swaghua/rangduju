import React from "react";
import PredictionForm from "./predictionForm";
import '../common/prediction.css';

class Prediction extends React.Component {
    render() {
        return (
            <div className="prediction-page">
                <div className="prediction-top">
                    <div className="prediction-form">
                        <h1 className="title">短租潜力预测</h1>
                        <PredictionForm />
                    </div>
                    <div className="prediction-map">
                        {/* 这里以后换成 map API */}
                        <img src={require("../images/staticmap.png")} className="img-map"  alt="map"/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Prediction;