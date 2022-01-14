import { useState } from "react";
import { Col, Row, Container } from "reactstrap";
import ParticleBackground from "../ParticleComponent";
import { HiHeart } from "react-icons/hi";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Typewriter from "typewriter-effect";

function Omsorg(){

    const HEADER = "Omsorg och sjukvård"
    const [active, setActive] = useState({
        activeObject: null,
        objects: 
        [{id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {id: 2, text: "Quisque lacinia tempus quam vitae accumsan."},
        {id: 3, text: "In suscipit risus ut blandit blandit. Vestibulum euismod venenatis arcu eget luctus."},
        {id: 4, text: "Nullam luctus consectetur augue vitae sagittis."},
        {id: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {id: 6, text: "Quisque lacinia tempus quam vitae accumsan."},
        {id: 7, text: "In suscipit risus ut blandit blandit. Vestibulum euismod venenatis arcu eget luctus."},
        {id: 8, text: "Nullam luctus consectetur augue vitae sagittis."}
    ]
    });

    const [done, setDone] = useState(false);
    const BodyText = () => {return(
                    <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio vel purus fringilla rhoncus in mattis orci. Proin sed neque quis ex congue mattis ac id metus. Curabitur accumsan, dui sed imperdiet bibendum, eros eros imperdiet tellus, sit amet pulvinar est lacus ornare ante. Praesent non nisi ac velit sodales blandit et rhoncus orci. Duis tempus a ligula in laoreet.</p>
                    <p>Quisque lacinia tempus quam vitae accumsan. Nullam luctus consectetur augue vitae sagittis. Vestibulum erat ante, pharetra eget leo at, porta condimentum enim. Curabitur mi est, condimentum in rhoncus eu, lobortis vel sapien. Maecenas sem sapien, rhoncus sit amet interdum ut, tempus quis lectus. Fusce pretium tincidunt tincidunt. Quisque aliquet fermentum eros, vitae pharetra felis semper non. Aenean vitae interdum magna.</p>
                    <p>In suscipit risus ut blandit blandit. Vestibulum euismod venenatis arcu eget luctus. Nam ante odio, rutrum at libero et, imperdiet aliquet eros. Pellentesque nibh dui, commodo eget velit eget, sodales tempor neque. Aliquam id libero sit amet erat porta facilisis vel sit amet dui. Phasellus eu nibh elementum, egestas sem non, blandit mi. Donec lacus quam, dapibus bibendum sapien et, luctus fermentum tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio vel purus fringilla rhoncus in mattis orci. Proin sed neque quis ex congue mattis ac id metus. Curabitur accumsan, dui sed imperdiet bibendum, eros eros imperdiet tellus, sit amet pulvinar est lacus ornare ante. Praesent non nisi ac velit sodales blandit et rhoncus orci. Duis tempus a ligula in laoreet.</p>
                    <p>Quisque lacinia tempus quam vitae accumsan. Nullam luctus consectetur augue vitae sagittis. Vestibulum erat ante, pharetra eget leo at, porta condimentum enim. Curabitur mi est, condimentum in rhoncus eu, lobortis vel sapien. Maecenas sem sapien, rhoncus sit amet interdum ut, tempus quis lectus. Fusce pretium tincidunt tincidunt. Quisque aliquet fermentum eros, vitae pharetra felis semper non. Aenean vitae interdum magna.</p>
                    <p>In suscipit risus ut blandit blandit. Vestibulum euismod venenatis arcu eget luctus. Nam ante odio, rutrum at libero et, imperdiet aliquet eros. Pellentesque nibh dui, commodo eget velit eget, sodales tempor neque. Aliquam id libero sit amet erat porta facilisis vel sit amet dui. Phasellus eu nibh elementum, egestas sem non, blandit mi. Donec lacus quam, dapibus bibendum sapien et, luctus fermentum tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio vel purus fringilla rhoncus in mattis orci. Proin sed neque quis ex congue mattis ac id metus. Curabitur accumsan, dui sed imperdiet bibendum, eros eros imperdiet tellus, sit amet pulvinar est lacus ornare ante. Praesent non nisi ac velit sodales blandit et rhoncus orci. Duis tempus a ligula in laoreet.</p>
                    <p>Quisque lacinia tempus quam vitae accumsan. Nullam luctus consectetur augue vitae sagittis. Vestibulum erat ante, pharetra eget leo at, porta condimentum enim. Curabitur mi est, condimentum in rhoncus eu, lobortis vel sapien. Maecenas sem sapien, rhoncus sit amet interdum ut, tempus quis lectus. Fusce pretium tincidunt tincidunt. Quisque aliquet fermentum eros, vitae pharetra felis semper non. Aenean vitae interdum magna.</p>
                    <p>In suscipit risus ut blandit blandit. Vestibulum euismod venenatis arcu eget luctus. Nam ante odio, rutrum at libero et, imperdiet aliquet eros. Pellentesque nibh dui, commodo eget velit eget, sodales tempor neque. Aliquam id libero sit amet erat porta facilisis vel sit amet dui. Phasellus eu nibh elementum, egestas sem non, blandit mi. Donec lacus quam, dapibus bibendum sapien et, luctus fermentum tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                    </div>)};

 
    function HeaderText(){
        return(
        <Typewriter 
            options={{
                cursor: "",
                delay:150
            }}
            onInit={(typewriter)=>{
                typewriter.typeString(HEADER).pauseFor(1000).callFunction(NewHeader, true).start()
            }}
            />
            )
    }

    function NewHeader(){
        setDone(true)
    }

    function SmallHeaderText(){
        if (done === true){
        return(
        <Typewriter 
            options={{
                cursor: "",
                delay:50
            }}
            onInit={(typewriter)=>{
                typewriter.typeString("Vi socialdemokrater vill: ").start()
            }}
            />)}
    }
    const ListOfItems = () =>{
        return(
        <TransitionGroup>
        { active.objects.map((elements) => ( 
            <CSSTransition
                timeout={3000}  
                classNames="fade"
                appear={true}
                in={true}
                key={elements.id}
                >                      
            <li>
                <HiHeart color="#ED1B34"/> {elements.text}
            </li>
            </CSSTransition>
        )) }
        </TransitionGroup>)}

    const ListOfBodyText = () => {

        return(
            <TransitionGroup>
            <CSSTransition
                timeout={500}  
                classNames="fade"
                appear={true}
                in={true}
                >                     
                {BodyText()} 
            </CSSTransition>
        </TransitionGroup>)}

    
    return(
        <div className="App-main">
        <ParticleBackground />
        <Container>
            <Row>
                <h1>{HeaderText()}</h1>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    {ListOfBodyText()}
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <ul>
                        <li>
                            <h2>
                               {SmallHeaderText()}
                            </h2>
                        </li>
                        {ListOfItems()}
                    </ul>
                </Col>
            </Row>
        </Container>
       </div>
     )
}

export default Omsorg