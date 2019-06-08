import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div classtyle={{ margin: '10px' }}>
                <Segment style={{ textAlign: 'center' }}>
                    <h2>Welcome to login page.</h2>
                    <Input id='user' placeholder='User Name' style={{ marginBottom: '10px' }} /><br />
                    <Input id='password' type='password' placeholder='User Password' style={{ marginBottom: '10px' }} />
                    <br />
                    <Button primary content='Login' style={{ marginBottom: '10px' }} />
                    <Button content='Reset' style={{ marginLeft: '20px' }} />
                </Segment>
            </div>
        );
    }
}
export default Login;
