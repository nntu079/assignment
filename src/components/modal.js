import React, { useState } from 'react';
import { Button, Modal, Steps } from 'antd';
import { Col, Row } from 'antd';
import { Form, Input } from 'antd';

export default function RegisterModal({ isModalOpen, setIsModalOpen }) {


    const handleCancel = () => {
        setIsModalOpen(false);
        setCurrentStep(0)
    };

    const [email, setEmail] = useState("")

    const [currentStep, setCurrentStep] = useState(0)


    const onFinish0 = (values) => {
        setCurrentStep(1)
        setEmail(values.email)
    };

    const onFinishFailed0 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinish1 = (values) => {
        console.log('Success:', values);
        setCurrentStep(2)
    };

    const onFinishFailed1 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinish2 = (values) => {
        console.log('Success:', values);
        setCurrentStep(2)
    };

    const onFinishFailed2 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Modal title={<div>
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
                    <Col xs={24} xl={11}>
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

                    <Col xs={0} xl={1}>
                        <div style={{ display: "flex", minHeight: "100%" }}>
                            <div style={{ width: "50%" }} ></div>
                            <div style={{ width: "50%", }} className="line"> </div>
                        </div>
                    </Col>

                    <Col xs={24} xl={12}>
                        {currentStep == 0 && <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            onFinish={onFinish0}
                            onFinishFailed={onFinishFailed0}
                        >
                            <div style={{ textAlign: "center" }}>
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
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>}

                        {currentStep == 1 && <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            onFinish={onFinish1}
                            onFinishFailed={onFinishFailed1}

                            initialValues={{ email: email }}
                        >
                            <div style={{ textAlign: "center" }}>
                                100% FREE MEMBERSHIP
                                <br />
                                Verify Your Account and Get Access For Free
                            </div>

                            <div style={{ textAlign: "center" }}>
                                <div>Download the lastest apps</div>
                                <div>Watch popular movies</div>
                                <div>Learn from Ebooks and Courses</div>
                                <div>And more!</div>
                            </div >

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
                                label="Credit Card Number"
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

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
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
                            <div style={{ textAlign: "center" }}>
                                100% FREE MEMBERSHIP
                            </div>

                            <div style={{ textAlign: "center" }}>
                                A token has been sent to the email address {email}, please enter this token.
                            </div >


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
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>}
                    </Col>
                </Row>
            </Modal >
        </>
    );
}