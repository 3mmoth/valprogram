import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import logo from './images/Logotype_Norrkoping.png';
import { TiSocialFacebookCircular, TiHeartOutline } from "react-icons/ti";
import ScrollToTop from 'react-scroll-to-top';


function Footer(){
return(
    <div className="App-footer">
    <Container >
        <Row>
            <Col xs={12} sm={12} md={4} lg={4} className='footer-text'>
                <h3>Kontakta oss</h3>
                <p>norrkoping@socialdemokraterna.se</p>
                <p>070-1234567</p>
                <p>Gamla Rådstugugatan 30</p>
                <p>602 24 Norrköping</p>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className='footer-text'>
                <p><a href='https://www.socialdemokraterna.se/bli-medlem/bli-medlem-nu'><TiHeartOutline color="white"/>Bli medlem</a></p>
                <p><a href='https://www.facebook.com/SiNkpg'><TiSocialFacebookCircular color="white"/>Facebook</a></p>
            </Col>
            <Col className='logo-container'>   
                <a href='http://socialdemokraternainorrkoping.se/'><img className='bottom-logo' src={logo} alt="Socialdemokraterna Norrköping logotype"/></a>
            </Col>
        </Row>

    </Container>
    </div>
)
}

export default Footer
