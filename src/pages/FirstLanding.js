import Header from "../components/header";
import { Col, Steps, Row, Button, notification } from 'antd';
import { BsCircleFill, BsShieldCheck, BsCheckLg } from "react-icons/bs"
import { AiOutlineGlobal, AiOutlineDownload } from "react-icons/ai"
import RegisterModal from "../components/modal";
import { useState } from "react"

import "./FirstLanding.css"

import Line from "../components/VerticalLine";



export default function FirstLanding() {

    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.open({
            description:
                'Not available',
            style: {
                width: 600,
                color: "green"
            },
        });
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    return (<>
        <Header />

        {contextHolder}

        <div className="body1 text_style_1">
            Your storage in the cloud 5TB of Cloud Storage included for PC & Smartphone. Save space on your device by storing your documents in the Cloud Start now and enjoy your Free Trial
        </div>

        <Row className="body2">
            <Col xs={0} xl={8}>
            </Col>
            <Col xs={24} xl={3}>
                <div className="body21">
                    <div>
                        <img src="earth.png" />
                    </div>
                    <div style={{ marginLeft: 10 }}>
                        <div style={{ fontSize: "x-large", fontWeight: "leighter" }}>Online</div>
                        <div style={{ fontSize: "x-large", fontWeight: "bold" }}>Activation</div>
                    </div>
                </div></Col>
            <Col xs={0} xl={1}>
                <Line />
            </Col>
            <Col xs={24} xl={4}>
                <div className="body22">
                    <Button type="default" onClick={openNotification}>
                        <AiOutlineDownload fontSize={30} fill="rgb(86, 224, 86)" style={{ position: "absolute", left: 8, bottom: 10 }} /> Continue
                    </Button>

                    <div style={{ marginTop: 5 }}>
                        <BsCircleFill className="icon_online" fontSize={10} style={{ marginRight: 5 }} />
                        <span className="high_speed_text"> High Speed & Unlimited</span>
                    </div>
                </div>
            </Col>
            <Col xs={0} xl={7}>
            </Col>
        </Row >

        <Row className="body3" >
            <Col xs={0} xl={1}>

            </Col>

            <Col xs={24} xl={7} >
                <div><AiOutlineGlobal size="80px" /></div>
                <div className="text_style_2">
                    Global
                </div>
                <div className="text_style_3">
                    Access
                </div>
            </Col>

            <Col xs={0} xl={1}>
                <Line />
            </Col>
            <Col xs={24} xl={6} >
                <div>
                    <div><AiOutlineDownload size="80px" /></div>
                    <div className="text_style_3">Unlimited Speed</div>
                    <div className="text_style_2">5TB of Cloud Space</div>
                </div>
            </Col>

            <Col xs={0} xl={1}>
                <Line />
            </Col>

            <Col xs={24} xl={7}>
                <div >
                    <div style={{ marginTop: 10 }}>
                        <BsShieldCheck size="80px" />
                    </div>
                    <div className="text_style_3">
                        100% Secure
                    </div>
                    <div className="text_style_2">
                        Connection
                    </div>
                </div>

            </Col>
            <Col xs={0} xl={1}>

            </Col>
        </Row>

        <div className="body4">
            <div className="body41">
                Get Access in Less than a Minute
            </div>
            <div className="body42">
                <Steps
                    current={null}
                    items={[
                        {
                            title: 'Create Account',
                        },
                        {
                            title: 'Verify Account',
                        },
                        {
                            title: 'Access Granted',
                        },
                    ]}
                />
            </div>
            <div className="body43">
                <hr />
            </div>

        </div>

        <div className="body5">
            <div>
                <Button type="primary" onClick={showModal}> Get Started Now</Button>
            </div>

            <div className="body52">   <BsCircleFill className="icon_online" fontSize={10} style={{ marginRight: 5 }} />
                <span className="high_speed_text">High Speed & Unlimited</span></div>
        </div>
        <div className="body6">
            Find out why people love our website
        </div>

        <div className="body7">
            <div ><span style={{ position: "relative", marginRight: 3 }}><BsCheckLg size="15" className="icon_check" /></span> Global Access from anywhere and any device</div>
            <div ><span style={{ position: "relative", marginRight: 3 }}><BsCheckLg size="15" className="icon_check" /></span>Your own space in the cloud: 5TB of Cloud Storage space included</div>
            <div ><span style={{ position: "relative", marginRight: 3 }}><BsCheckLg size="15" className="icon_check" /></span>Unlimited Speed: no speed or transfer limit</div>
        </div>

        <div className="body8">
            Offer and Billing Terms: You can try our service for 5 days at 0.00€. If you are not satisfied or you do not want to keep your
            membership, contact us to cancel. If you do not cancel, at the end of 5 days trial period, the service will automatically continue
            on a monthly basis and the service automatically charge the credit card you have provided the applicable monthly 49.95€ fee
            stated at the begining of each such period, for as long as you continue the service. You can cancel your membership anytime.
        </div>

        <RegisterModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

    </>

    )
}