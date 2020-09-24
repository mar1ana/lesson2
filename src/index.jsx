import React from 'react'; 
import ReactDOM from 'react-dom';
import {Container, Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HelloWorld () {
  return (
    <Container> 
      <Jumbotron
        className="mt-5"
        style={
          {
          backgroundColor: '#007bff',
          color: '#fff'
          }
        }
      > 
        <h1 className="display-2">
          Hello World
        </h1>
        <hr/>
        <p>
          Goodbye
        </p>    
      </Jumbotron>  
    </Container>
  );
}

ReactDOM.render(
  <HelloWorld/>,
  document.querySelector('#root')
); 
