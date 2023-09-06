import "../styles/kontakt.module.css"; 
import emailjs from "emailjs-com";

import { Form, Input, TextArea, Button } from "semantic-ui-react";

import Swal from "sweetalert2";
const SERVICE_ID = "service_vo1qtyh";
const TEMPLATE_ID = "template_fp825jo";
const PUBLIC_KEY = "JZEPuKH4twEJmHI5P";
const Kontakt = () => {
  function handleOnSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Nachricht erfolgreich gesendet",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ups, da ist ein Fehler aufgetreten",
          text: error.text,
        });
      }
    );
    e.target.reset();
  }
  return (
    <div>
      <div className="box1">
        <h2>Olaf Dutschmann</h2>
        <p>Bauhofstr. 1</p>
        <p>03130 Spremberg</p>
        <p>Tel. 0152/34616878</p>
      </div>
      <div className="box2">
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Name"
            name="from_name"
            placeholder="Name…"
            required
            icon="Benutzername"
            iconPosition="left"
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="user_email"
            placeholder="Email…"
            required
            icon="mail"
            iconPosition="left"
          />
          <Form.Field
          
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="user_message"
            placeholder="Nachricht..."
            required
          />
          <Button type="submit" color="green ">
            Abschicken
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Kontakt;

/*
        "service_vo1qtyh",
        "template_fp825jo",
        event.target,
        "JZEPuKH4twEJmHI5P"
    
 */
