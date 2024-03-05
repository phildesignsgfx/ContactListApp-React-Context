import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import ContactList from "../component/contact-list";
import rigoImageUrl2 from "../../img/images.png";

export const Home = () => {
  return (
    <div className="text-center mt-5">
		<div class="wave"></div>
     
     <div class="wave"></div>
	<h1 className="display-4">Create Your Contact</h1>
	<img src={rigoImageUrl2} />
      <ContactList />
	  <br/>
      <Link to="/add">
	  <button type="button" class="btn btn-primary btn-lg">Add Contact</button>
       
      </Link>
	  <div class="wave"></div>
    </div>
  );
};
