import React from "react";
import { Form, Input, Button, Row, Col, Cascader } from 'antd';

const houseType = [
    // 户型信息需要更改
    {
        value: '独立房间',
        label: '独立房间',
    },
    {
        value: '一居室',
        label: '一居室',
    },
    {
        value: '二居室',
        label: '二居室',
    },
    {
        value: '三居室',
        label: '三居室',
    },
];

class PredictionForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // 将 values 传给后端
            }
        });
    };

    getCaptcha = e => {
        e.preventDefault();
        let phoneNumber = this.props.form.getFieldValue('phoneNumber');
        console.log('phoneNumber is: ', phoneNumber);
        // 将 phoneNumber 传给后端以发送验证码
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="prediction-part1">
                <div className="left-form">
                    <h1 className="title">短租潜力预测</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('address', {
                                rules: [{ required: true, message: '请输入地址' }],
                            })( <Input placeholder="地址" /> )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('houseType', {
                                rules: [{ type: 'array', required: true, message: '请选择户型' }],
                            })( <Cascader placeholder="户型" options={ houseType } /> )}
                        </Form.Item>
                        <Form.Item>
                            <Row>
                                <Col span={18}>
                                    {getFieldDecorator('phoneNumber', {
                                        rules: [{ required: true, message: '请输入手机号码' }],
                                    })( <Input placeholder="手机号码" className="input-phone-number" /> )}
                                </Col>
                                <Col span={6}>
                                    <Button className="button-captcha" onClick={this.getCaptcha}>发送</Button>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('captcha', {
                                rules: [{ required: true, message: '请输入验证码' }],
                            })( <Input placeholder="验证码" /> )}
                        </Form.Item>
                        <Form.Item>
                            <p className="p-intro">让渡居为业主提供了一个完整的解决方案，允许业主通过委托房产充分并安全地分享短租收益。提交您的房源信息来查看您可能流失了多少潜在短租增益。报告准备过程大概需要 5 分钟，准备好后您将收到一条短信提醒。</p>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit" className="button-summit">提交</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="right-map">
                    {/* 这里以后换成 map API */}
                    <img src={require("../images/staticmap.png")} className="img-map" alt="map"/>
                </div>
            </div>
        )
    }
}

PredictionForm = Form.create({})(PredictionForm);
export default PredictionForm;