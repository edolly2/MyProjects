import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

function JumbotronComponent(props) {
    return(
        <div>
            <Jumbotron>
                <h1>Hello World!</h1>
                <p>{props.children}</p>
                <p>
                    <Button variant="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default JumbotronComponent;