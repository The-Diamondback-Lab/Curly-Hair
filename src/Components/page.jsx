import React,{Component} from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import Footer from './footer.jsx'
class Page extends Component {
    constructor(props) {
  
      super(props);
     
      
      
    }
    render() {
      const mystyle = {
        position: 'absolute',
        top:'50%',
        
        left: '50%',
        transform: 'translate(-50%, -50%)'
      };
      return (
      
       <div>
         
  <style dangerouslySetInnerHTML={{__html: "\nbody {\n  background-color: 	#1a0d00;\n}\n" }} />
        <Row style = {{ minHeight:'600px',width:'100%',backgroundImage: `url("download.png")`}}>
        <div style = {mystyle}><p style = {{fontSize: '100px'}}> CURLY HAIR PROJECT</p></div>
        </Row>
        <Row style = {{ minHeight:'600px',width:'100%'}}></Row><Row style = {{ minHeight:'600px',width:'100%'}}></Row><Row style = {{ minHeight:'600px',width:'100%'}}></Row>

        <Row>
          <Footer/>
        </Row>
      </div>

      
        
        
       
      );
    }
  }
export default Page;