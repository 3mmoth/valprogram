import React from "react";
import { Col, Row, Container } from "reactstrap";
import image from "../images/hemtjanst.jpg";
import ParticleBackground from "../ParticleComponent";


function Inledning(){
    return(
        <div>    
        <Row>
            <img className="top-image" src={image} alt="hemtjänst"/>
        </Row>
        <div className="App-main">
        <ParticleBackground />
        <Container>
        <Row>
            <h1>Inledning</h1>
        </Row>
        <Row>
            <Col>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio vel purus fringilla rhoncus in mattis orci. Proin sed neque quis ex congue mattis ac id metus. Curabitur accumsan, dui sed imperdiet bibendum, eros eros imperdiet tellus, sit amet pulvinar est lacus ornare ante. Praesent non nisi ac velit sodales blandit et rhoncus orci. Duis tempus a ligula in laoreet. 

                Quisque lacinia tempus quam vitae accumsan. Nullam luctus consectetur augue vitae sagittis. Vestibulum erat ante, pharetra eget leo at, porta condimentum enim. Curabitur mi est, condimentum in rhoncus eu, lobortis vel sapien. Maecenas sem sapien, rhoncus sit amet interdum ut, tempus quis lectus. Fusce pretium tincidunt tincidunt. Quisque aliquet fermentum eros, vitae pharetra felis semper non. Aenean vitae interdum magna.

                In suscipit risus ut blandit blandit. Vestibulum euismod venenatis arcu eget luctus. Nam ante odio, rutrum at libero et, imperdiet aliquet eros. Pellentesque nibh dui, commodo eget velit eget, sodales tempor neque. Aliquam id libero sit amet erat porta facilisis vel sit amet dui. Phasellus eu nibh elementum, egestas sem non, blandit mi. Donec lacus quam, dapibus bibendum sapien et, luctus fermentum tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </Col>
            <Col >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio vel purus fringilla rhoncus in mattis orci. Proin sed neque quis ex congue mattis ac id metus. Curabitur accumsan, dui sed imperdiet bibendum, eros eros imperdiet tellus, sit amet pulvinar est lacus ornare ante. Praesent non nisi ac velit sodales blandit et rhoncus orci. Duis tempus a ligula in laoreet. 

                Quisque lacinia tempus quam vitae accumsan. Nullam luctus consectetur augue vitae sagittis. Vestibulum erat ante, pharetra eget leo at, porta condimentum enim. Curabitur mi est, condimentum in rhoncus eu, lobortis vel sapien. Maecenas sem sapien, rhoncus sit amet interdum ut, tempus quis lectus. Fusce pretium tincidunt tincidunt. Quisque aliquet fermentum eros, vitae pharetra felis semper non. Aenean vitae interdum magna.

                In suscipit risus ut blandit blandit. Vestibulum euismod venenatis arcu eget luctus. Nam ante odio, rutrum at libero et, imperdiet aliquet eros. Pellentesque nibh dui, commodo eget velit eget, sodales tempor neque. Aliquam id libero sit amet erat porta facilisis vel sit amet dui. Phasellus eu nibh elementum, egestas sem non, blandit mi. Donec lacus quam, dapibus bibendum sapien et, luctus fermentum tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

            </Col>
        </Row>
        </Container>
       </div>
       </div>
    )
}

export default Inledning