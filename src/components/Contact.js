import React from 'react';

const Contact = () => {
    return (
        <div className=" container row">
            <h1 className="center">Contact form</h1>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="First Name" id="first_name" type="text" className="validate"/>
              <label for="first_name"/>
            </div>
            <div className="input-field col s6">
              <input placeholder="Last Name" id="last_name" type="text" className="validate"/>
              <label for="last_name"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Message" id="text" type="text" className="validate"/>
              <label for="email"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Email" id="email" type="email" className="validate"/>
              <label for="email"/>
            </div>
          </div>
            <div className="row">
                <div className="center">
            <div className ="col s12">
            <button className="btn" type="submit" name="action">Submit
                <i className="material-icons right">send </i>
            </button>
          </div>
        </div>
        </div>
        </form>
      </div>
            


       
    );
};

export default Contact;