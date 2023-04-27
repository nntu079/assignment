import React, { useState } from 'react';
import { Button, Modal, Steps, Avatar, InputNumber } from 'antd';
import { Col, Row } from 'antd';
import { Form, Input, DatePicker, notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { Rate } from 'antd';



import axios from 'axios';
import Line from './VerticalLine';

export default function RegisterModal({ isModalOpen, setIsModalOpen }) {

    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.open({
            description:
                ' You have successfully verified your Account',
            style: {
                width: 600,
                color: "green"
            },
        });
    };


    const navigate = useNavigate();

    const handleCancel = () => {
        setIsModalOpen(false);
        setCurrentStep(0)
    };

    const [email, setEmail] = useState("")
    const [currentStep, setCurrentStep] = useState(0)
    const [fullName, setFullName] = useState("")


    const onFinish0 = (values) => {
        setCurrentStep(1)
        setEmail(values.email)
    };

    const onFinishFailed0 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinish1 = (values) => {
        console.log('Success:', values);
        setFullName(values.fullname)
        setCurrentStep(2)
        openNotification()
    };

    const onFinishFailed1 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const toSecondLandingPage = () => {
        navigate("/second", { email, fullName });
    };

    const onFinish2 = (values) => {
        //call dummy endpoint using post request
        const { data, statusText } = axios.post("https://jsonplaceholder.typicode.com/posts", values)

        //if (statusText == "OK") {
        toSecondLandingPage()
        //}
    };

    const onFinishFailed2 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>
            {contextHolder}

            <Modal title={<div style={{ textAlign: "center" }}>
                <div>Get Access to your content</div>
                <div>3 Easy Steps</div>
            </div>}
                open={isModalOpen}

                onCancel={handleCancel}
                footer={null}

                width="60%"
                height="60%"
            >
                <Row >
                    <Col xs={24} xl={11} >

                        <Steps
                            direction="vertical"
                            current={currentStep}
                            items={[
                                {
                                    title: 'Create Your Free Account',
                                },
                                {
                                    title: 'Verify your Account',
                                },
                                {
                                    title: 'Get Access to your content',
                                },
                            ]}
                        />


                    </Col>

                    <Col xs={0} xl={2}>
                        <Line />
                    </Col>

                    <Col xs={24} xl={11}>
                        {currentStep == 0 && <Form
                            name="basic"
                            labelCol={{
                                span: 24,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            onFinish={onFinish0}
                            onFinishFailed={onFinishFailed0}
                        >
                            <div style={{ textAlign: "center", paddingBottom: 10 }} className='body41'>
                                Create Your Free Account
                            </div>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        type: "email",
                                        message: "The input is not valid E-mail!",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 0,
                                    span: 24,
                                }}
                            >
                                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>}

                        {currentStep == 1 && <Form
                            labelCol={{
                                span: 24,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            onFinish={onFinish1}
                            onFinishFailed={onFinishFailed1}

                            initialValues={{ email: email }}
                        >
                            <div style={{ marginBottom: "5px" }} >
                                <span style={{ fontSize: 'x-large' }}> 100% FREE MEMBERSHIP</span>

                                <div style={{ fontSize: 'small' }}>
                                    Verify Your Account and <span style={{ fontWeight: "bold" }}>Get Access For Free</span>
                                </div>
                                <div>
                                    <Rate allowHalf value={4.5} /> Based on 194.138 reviews
                                </div>
                            </div>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        type: "email",
                                        message: "The input is not valid E-mail!",
                                    },
                                ]}

                            >
                                <Input readOnly={true} />
                            </Form.Item>

                            <Form.Item
                                label="Full Name"
                                name="fullname"
                                rules={[
                                    {
                                        required: true,
                                        message: "The full name is required.",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label={
                                    <div > Credit Card Number
                                        <div style={{ float: "right" }}>
                                            <Avatar
                                                shape="square"
                                                src={"visa.png"}
                                                alt="avatar"
                                            />

                                            <Avatar
                                                shape="square"
                                                src={"visa.png"}
                                                alt="avatar"
                                            />

                                            <Avatar
                                                shape="square"
                                                src={"visa.png"}
                                                alt="avatar"
                                            />
                                        </div>

                                    </div>}

                                name="cardNumber"
                                rules={[
                                    {
                                        required: true,
                                        message: "The credit card number required.",
                                    }, {
                                        pattern: new RegExp(/^(3[47][0-9]{13}|(6541|6556)[0-9]{12}|389[0-9]{11}|3(?:0[0-5]|[68][0-9])[0-9]{11}|65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})|63[7-9][0-9]{13}|(?:2131|1800|35\d{3})\d{11}|9[0-9]{15}|(6304|6706|6709|6771)[0-9]{12,15}|(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}|(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))|(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}|(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}|(62[0-9]{14,17})|4[0-9]{12}(?:[0-9]{3})?|(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}))$/),
                                        message: "The credit card number is not valid."
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Row>
                                <Col xs={24} xl={8}>
                                    <Form.Item
                                        label="Exp. month"
                                        wrapperCol={{
                                            offset: 0,
                                            span: 20,
                                        }}
                                        name="month"

                                        rules={[
                                            {
                                                required: true,
                                                message: "The Exp. month required.",
                                            }
                                        ]}
                                    >
                                        <DatePicker picker="month" />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} xl={8}>
                                    <Form.Item
                                        label="Exp. year"
                                        wrapperCol={{
                                            offset: 0,
                                            span: 20,
                                        }}
                                        name="year"
                                        rules={[
                                            {
                                                required: true,
                                                message: "The Exp. year required.",
                                            }
                                        ]}
                                    >
                                        <DatePicker picker="year" />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} xl={8}>
                                    <Form.Item
                                        label="CVV"
                                        wrapperCol={{
                                            offset: 0,
                                            span: 20,
                                        }}
                                        name="cvv"

                                        rules={[
                                            {
                                                required: true,
                                                message: "The CVV required.",
                                            }
                                        ]}
                                    >
                                        <InputNumber />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                wrapperCol={{
                                    offset: 0,
                                    span: 24,
                                }}
                            >
                                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>}


                        {currentStep == 2 && <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            onFinish={onFinish2}
                            onFinishFailed={onFinishFailed2}

                            initialValues={{ email: email }}
                        >
                            <div style={{ fontSize: "x-large", color: "rgb(70, 110, 90)" }}>
                                You have successfully verified your Account
                            </div>

                            <Form.Item
                                wrapperCol={{
                                    offset: 0,
                                    span: 24,
                                }}
                            >
                                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                    Get access now
                                </Button>
                            </Form.Item>
                        </Form>}
                    </Col>
                </Row>
            </Modal >
        </>
    );
}