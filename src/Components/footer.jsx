import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';


export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        
        <Container>
            <Row>             
                
                    
                    
                        <p style = {{color:'white',fontSize:'20px',alignContent:'left'}}>CREDITS </p><br></br>
                        <p style = {{color:'white',alignContent:'left'}}>REPORTING: </p><br></br>
                        <p style = {{color:'white',alignContent:'left'}}>EDITING: </p><br></br>
                        <p style = {{color:'white',alignContent:'left'}}>PHOTOGRAPHY: </p><br></br>
                        <p style = {{color:'white',alignContent:'left'}}>WEBSITE DESIGN: </p><br></br>
                        <p style = {{color:'white',fontSize:'24px',alignContent:'left'}}>THE DIAMONDBACK </p><br></br>
                        
                
                
              </Row>
         </Container>
        
      </footer>
    )
  }
}