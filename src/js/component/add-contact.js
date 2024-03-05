import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import "../../styles/add-contact.css";
import rigoImageUrl2 from "../../img/images.png";

export const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="container ">
        <h1 className="display-4">Add a new contact</h1>
        <img src={rigoImageUrl2} />
        <br />
        <br />
        <div class="form">
        <div class="input-container ic1">
      <p>Full Name</p>
      <input
        type="text"
        onChange={(evt) => setName(evt.target.value)}
        value={name}
        placeholder="Full name"
      />
      <div/>
      <div class="input-container ic2">
      <p>Email</p>
      <input
        type="text"
        onChange={(evt) => setEmail(evt.target.value)}
        value={email}
        placeholder="Enter Email"
      />
      </div>
      <div class="input-container ic2">
      <p>Phone</p>
      <input
        type="text"
        onChange={(evt) => setPhone(evt.target.value)}
        value={phone}
        placeholder="Enter Phone Number"
      />
      </div>
      <div class="input-container ic2">
      <p>Address</p>
      <input
        type="text"
        onChange={(evt) => setAddress(evt.target.value)}
        value={address}
        placeholder="Enter Address"
      />
      </div>
      <br />
    
      <Button type="button" class="btn btn-primary btn-sm"
        onClick={() => {
          console.log("Here I am");
          fetch("https://playground.4geeks.com/apis/fake/contact", {
            method: "POST",
            body: JSON.stringify({
              full_name: name,
              email,
              phone,
              address,
              agenda_slug: "httpscammy",
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }}
        variant="primary"
      >
        save
      </Button>
      <br />
      <br />
      
      <Link to="/">
      <button type="button" class="btn btn-secondary btn-sm">Go back to contact-list</button>
      </Link>
    </div>
    </div>
    </div>
  );
};

export default AddContact;
