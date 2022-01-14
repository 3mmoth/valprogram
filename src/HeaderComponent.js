import React, { useState } from 'react';
import { Row, Col, Nav, Navbar, NavLink, NavItem, Collapse, Container, NavbarToggler, UncontrolledDropdown, NavbarBrand } from 'reactstrap';
import Typewriter from 'typewriter-effect';

function Header(props){

    const [isActive, setActive] = useState("false");

    const toggleActive = () => {
        setActive(!isActive);
    }

    const [selected, setSelected] = useState({
        activeObject: null,
        objects: [{id:1, link: "/", text:"INLEDNING"}, 
                {id:2, link:"/omsorg-och-sjukvard", text: "OMSORG"}, 
                {id:3, link:"/jobben", text: "JOBBEN"}, 
                {id:4, link: "/trygghet", text:"TRYGGHET"}, 
                {id:5,link:"/skola", text:"SKOLA"}, 
                {id:6, link: "/klimat-och-hallbarhet", text:"KLIMAT"}, 
                {id:7, link:"/integration", text:"INTEGRATION"}]
    });

    function toggleSelected(props){
        setSelected({...selected, activeObject: selected.objects[props]})
    }

    function toggleStyle(index){
        console.log(props)
        if (selected.objects[index].link === props.location){
            return "nav-item-selected"
        }else{
            return "nav-item-not-selected";
            
        }
    }

    return(
        <div className="App-header">
            <Container>
            <Row>
                <Col className="header-text" xs={12} sm={12} md={4} lg={4}>
                    <Typewriter 
                    options={{
                        cursor: "",
                        delay:50
                    }}
                    onInit={(typewriter)=>{
                        typewriter.typeString("Ett tryggare Norrköping.").start()
                    }}
                    />
                </Col>
            </Row>
            <Row className="nav-container">
                <div>
                    <Navbar expand="md">
                    <Container className='absolute'>
                        <NavbarBrand />
                        <NavbarToggler onClick={toggleActive} className='mr-2' />
                        <Collapse id="responsive-navbar-nav" isOpen={isActive} >
                        <Nav className="nav-text" navbar>
                            { selected.objects.map((elements, index)=> (
                                <NavItem 
                                className={toggleStyle(index)}
                                key={index} //onClick={() => toggleSelected(index)}
                                >
                                    <NavLink 
                                    href={elements.link}
                                    >
                                        {elements.text}
                                    </NavLink>
                                </NavItem>
                            ))

                            }
                            <UncontrolledDropdown nav inNavbar/>
                        </Nav>
                        </Collapse>
                    </Container>
                    </Navbar>
                </div>
            </Row>
            </Container>
        </div>
    )
}



export default Header