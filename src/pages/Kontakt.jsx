import Styles from"../styles/kontakt.module.css";
import emailjs from 'emailjs-com'

/* eslint-disable no-undef */

const Kontakt = () => {
  // ...

  // Diese Funktion wird aufgerufen, wenn das Formular abgeschickt wird
  const handleSubmit = (event) => {
    // Verhindern Sie das Neuladen der Seite
    event.preventDefault();

    // Senden Sie die Formulardaten an EmailJS
    emailjs
      .sendForm(
        "service_vo1qtyh",
        "template_fp825jo",
        event.target,
        "JZEPuKH4twEJmHI5P"
      )
      .then(
        (result) => {
          console.log("E-Mail erfolgreich gesendet!", result.text);
          alert ("E-Mail erfolgreich gesendet!")
        },
        (error) => {
          console.log("E-Mail-Fehler...", error.text);
          alert("du bist zu doof zum schreiben  ")
        }
      );
  };
  /* Erstellen Sie ein EmailJS-Konto und verbinden Sie Ihren gewünschten E-Mail-Service.
     Erstellen Sie eine E-Mail-Vorlage mit dem integrierten Editor.
     Installieren Sie die EmailJS-Bibliothek in Ihrem React-Projekt mit npm install emailjs-com.
     Importieren Sie die Bibliothek in Ihrer Kontakt-Komponente mit import emailjs from 'emailjs-com'. */

  return (
    <>
    
    <div className={Styles.container}>
      <h2 style={{ color: "white" }}>Olaf Dutschmann</h2>
      <p>Bauhofstraße 1</p>
      <p>03130 Spremberg / Germany</p>
      <p>0162/7764823</p>
      <p>E-mail: Olaf_Dutschmann@gmx.de </p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          E-Mail:
          <input type="email" name="email" />
        </label>
        <br />
        <br />
        <label>
          Nachricht:
          <div>
            <textarea name="message" rows="5" cols="50"></textarea>
          </div>
        </label>
        <br />
        <br />
        <button type="submit">Absenden</button>
      </form>
      </div>
    </>
  );
};

export default Kontakt;
