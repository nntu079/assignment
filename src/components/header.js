import { Col, Row } from 'antd';
import { CgProfile, } from "react-icons/cg"
import { IoMdSearch } from "react-icons/io"
export default function Header() {
    return (
        <Row className='header'>
            <Col xs={24} xl={8}>
                <div className='logo'>
                    <img src="logo.png" />
                </div>
            </Col>
            <Col xs={0} xl={10}>


            </Col>
            <Col xs={24} xl={6}>
                <div className='header_menu'>
                    <CgProfile size="30px" style={{ cursor: "pointer" }} /> <IoMdSearch size="30px" style={{ marginLeft: 10, cursor: "pointer" }} />
                </div>
            </Col>
        </Row >)
}