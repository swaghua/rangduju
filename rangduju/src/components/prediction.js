import React from "react";

import PredictionForm from "./predictionForm";
import PredictionInfo from "./predictionInfo";

import '../common/prediction.css';


class Prediction extends React.Component {
    render() {
        return (
            <div className="prediction-page">
                <PredictionForm />
                <PredictionInfo />
            </div>
        )
    }
}

export default Prediction;