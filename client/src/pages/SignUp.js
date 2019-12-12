import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import axios from 'axios';

export default class SignUp extends Component {
  constructor (props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getFormData(event){
    var elements = event.target.elements;
    var data = {};
    for (var element of elements){
      if(element.tagName === "INPUT"){
        data[element.name] = element.value;
      }
    }
    return data;
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = JSON.stringify(this.getFormData(event));
    const url = 'http://localhost:9000/testpost';
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data,
      url,
    };
    axios(options)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App signup lightslide">
        <Helmet>
            <title>Sign Up</title>
        </Helmet>
        <div id="signup" className="lightslide">
          <form onSubmit={this.handleSubmit} autoComplete="off">

            <label>Username</label>
            <input name="username" type="text"/>

            <label>Password</label>
            <input name="password" type="password"/>

            <button>Send data!</button>
          </form>

         <div className="container">


              <div className="lightslide-box signup">
              <h4 className="white">Register to play.</h4>
              <hr/>
        	  <p>Already registered? <a href='/login'>Login.</a></p>

                <form onSubmit={this.handleSubmit} autoComplete="off">

                  <div className="row">
                    <div className="twelve columns">
                      <label className="small">Username (3-20 characters)</label>
                      <input type="text" name="username" id="username" className="form-control input-lg u-full-width" placeholder="Username" defaultValue="" tabIndex="1"/>
                      <label className="small">Phone (optional)</label>
                      <input type="text" name="phone" id="phone" className="form-control input-lg u-full-width" placeholder="Phone Number" defaultValue="" tabIndex="2"/>
                      <label className="small">Email</label>
                      <input type="email" name="email" id="email" className="form-control input-lg u-full-width" placeholder="Email Address" defaultValue="" tabIndex="3"/>
                    </div>
                  </div>

        		  <div className="row">
                    <div className="six columns">
                      <label className="small">First Name</label>
                      <input type="text" name="first_name" id="first_name" className="form-control input-lg u-full-width" placeholder="First Name" defaultValue="" tabIndex="4"/>
                    </div>
                    <div className="six columns">
                      <label className="small">Last Name</label>
                      <input type="text" name="last_name" id="last_name" className="form-control input-lg u-full-width" placeholder="Last Name" defaultValue="" tabIndex="5"/>
                    </div>
                  </div>

                  <label className="small">Password (Min 8 characters)</label>
                  <div className="row">
                    <div className="six columns">
                      <input type="password" name="password" id="password" className="form-control input-lg u-full-width" placeholder="Password" tabIndex="6"/>
                    </div>
                    <div className="six columns">
                      <input type="password" name="passwordConfirm" id="passwordConfirm" className="u-full-width form-control input-lg" placeholder="Confirm" tabIndex="7"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="twelve columns">
                      <button className="btn btn-primary btn-block btn-lg button-primary" tabIndex="8">Submit</button>
                    </div>
                  </div>

                </form>

              </div>


         </div>

        </div>
      </div>
    );
  }
}
