


import React, { Component } from 'react'

import './Registration.css'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            number: "",
            address: "",
            id: ""



        }
        this.nameHandler = this.nameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.numberHandler = this.numberHandler.bind(this);
        this.addressHandler = this.addressHandler.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);


        this.handleClick = this.handleClick.bind(this);

    }


    nameHandler = (e) => {
        this.setState({ username: e.target.value });

    }
    emailHandler = (e) => {
        this.setState({ email: e.target.value });

    }

    numberHandler = (e) => {
        this.setState({ number: e.target.value });
    }
    addressHandler = (e) => {

        this.setState({ address: e.target.value });

    }


    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }



    handleClick = (e) => {
        e.preventDefault();
        console.log(this.state.username);
        console.log(this.state.email);
        console.log(this.state.phonenumber);

        console.log(this.state.address);
        // console.log(this.state.id);
        console.log('You have selected:', this.state.selectedOption);





    }

    render() {

        return (
            <div className="Main-div">
                <form >

                    <label htmlFor="name">Name</label><br />

                    <input type="text"
                        name="username"
                        size="50"
                        value={this.state.username}
                        onChange={this.nameHandler}
                        placeholder="name" /><br /><br />

                    <label htmlFor="email">Email address</label><br />
                    <input type="text"
                        name="email"
                        size="50"
                        value={this.state.email}
                        onChange={this.emailHandler}
                        placeholder="email" /><br /><br />

                    <label htmlFor="number">Phone Number</label><br />
                    <input type="number"
                        name="number"
                        value={this.state.number}
                        onChange={this.numberHandler}
                        placeholder="Phone number" /><br /><br />



                    <label htmlFor="address">Address</label><br />
                    <input type="text"
                        name="address"
                        size="50"
                        value={this.state.address}
                        onChange={this.addressHandler}
                        placeholder="Address" /><br /><br />


                    <label htmlFor="address">Gender</label><br />
                    <div className="gender_div">
                        <div className="radio">
                            <label>
                                <input type="radio" value="male"
                                    checked={this.state.selectedOption === 'male'}
                                    onChange={this.handleOptionChange} />
                               Male
                          </label>
                        </div>
             &nbsp;&nbsp;
                    <div className="radio">
                            <label>
                                <input type="radio" value="female"
                                    checked={this.state.selectedOption === 'female'}
                                    onChange={this.handleOptionChange} />
                         Female
                          </label>
                        </div>

                    </div>


                    <button
                        type="submit"

                        onClick={this.handleClick}>Submit</button>
                    <br />

                </form>
            
             <ul>
                 <li>{this.state.username}</li>
                 <li>{this.state.email}</li>

                 <li>{this.state.number}</li>

                 <li>{this.state.address}</li>

                 <li>{this.state.selectedOption}</li>


             </ul>

            

            </div>
        )
    }
}

