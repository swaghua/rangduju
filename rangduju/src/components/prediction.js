import React from "react";

import PredictionForm from "./predictionForm";
import PredictionInfo from "./predictionInfo";
import PredictionAnalysis from "./predictionAnalysis";
import PredictionStrategy from "./predictionStrategy";

import '../common/prediction.css';
import '../common/predictionAdapted.css'


class Prediction extends React.Component {
    render() {
        return (
            <div className="prediction-page">
                <PredictionForm />
                <PredictionInfo />
                <PredictionAnalysis />
                <PredictionStrategy />
            </div>
        )
    }
}

export default Prediction;