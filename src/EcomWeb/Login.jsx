import React, { Component } from 'react'






export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: "React",


        }
        
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
}




handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
}
handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
}


 handleSubmit=(event) =>{
    event.preventDefault();

    console.log("hellooo");
    console.log(this.state.email);
    console.log(this.state.password);



}

    render=()=>{

    
        return (
            <div>
                <form>
                    <h6 style={{ textAlign: "center", fontSize: "1.5rem" }}>Login</h6>
                    <input type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleEmailChange} />

                    <br />
                    <input type="current-password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange} />

                    <br />
                    <button type="submit"
                        style={{ backgroundColor: "green" }}
                        onClick={this.handleSubmit}>Login</button>

                </form>
            </div>
        )
    }

}

