
import React  ,{useState}from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

 import Login from './Login';
import Signin from  './Signin'


function Form() {
  const [key, setKey] = useState('log');


  return (
   <div>
    <Tabs
    transition={false}
      activeKey={key}
      onSelect={(k) => setKey(k)}
     >

      <Tab eventKey="log" title="Login">
     <Login />
      </Tab>
    
      <Tab eventKey="Sign" title="Signin">
      <Signin />
      </Tab>
     
      
     
    </Tabs>
    </div>
  );
}

export default Form ;

