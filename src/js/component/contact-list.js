import React, { useEffect, useState } from "react";
import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";
import "../../styles/contact-list.css";

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await fetch(
        "https://playground.4geeks.com/apis/fake/contact/agenda/httpscammy",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await resp.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
        
      {contacts.map((contact) => {
        return (
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">
              <img class="circular--square"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                width="150px"
              />
            </div>
          
            <div className="p-2">
              <Stack className="box1">
                <div className="p-2"><p><strong>Name:<strong/></strong>{contact.full_name}</p></div>
                <div className="p-2"><p><strong>Address:<strong/></strong>{contact.address}</p></div>
                <div className="p-2"><p><strong>Phone:<strong/></strong>{contact.phone}</p></div>
                <div className="p-2"><p><strong>Email:<strong/></strong>{contact.email}</p></div>
              </Stack>
            </div>
            
           
            
            <div className="p-2 icons">
              <FontAwesomeIcon icon={faPencil} />
            </div>
            <div className="p-2 icons">
              <FontAwesomeIcon
                icon={faTrashCan}
                className="trash-can"
                onClick={() => {
                  fetch(
                    `https://playground.4geeks.com/apis/fake/contact/${contact.id}`,
                    {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  ).then(() => {
                    fetchData();
                  });
                }}
              />
            </div>
          </Stack>
          
        );
      })}
    </div>
  );
};

export default ContactList;
