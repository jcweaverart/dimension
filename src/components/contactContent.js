import React from 'react';

const ContactContent = props => {


    return (
        <div className="contactContent">
            <h1 id="emailHeader">
                SEND US AN EMAIL 
            </h1>
            <p id="emailSubHeader">
                We will respond within 24 hours
            </p>
            <form id="contactForm">
                <input id="email" type="text" className="formInput" name="email" placeholder="Email Address" required="true"/>
                <input id="fName" type="text" className="formInput" name="fName" placeholder="First Name" required="true"/>
                <input id="lName" type="text" className="formInput" name="lName" placeholder="Last Name" required="true"/>
                <input id="company" type="text" className="formInput" name="company" placeholder="Company" required="false"/>
                <input id="city" type="text" className="formInput" name="city" placeholder="City" required="true"/>
                <input id="state" type="text" className="formInput" name="state" placeholder="State" required="true"/>
                <input id="message" type="text" className="formInput" name="message" placeholder="Message..." required="true"/>
                <input id="submit" type="submit" onSubmit='return false;' value="Submit"/>
            </form>
        </div>
    );

}

export default ContactContent;