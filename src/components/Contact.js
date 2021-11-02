import React from "react";

// Styling
import styled from "styled-components";

const Contact = () => {
  // Return -------------------------------------------------------------------
  return (
    <StyledContact>
      <div className="container">
        <h1 className="headline">In Kontakt kommen</h1>
        <div className="underline"></div>
        <form
          action="https://formsubmit.co/1542ffadec1df3b4654844686c423a86"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            // value="https://klein-consulting.tech/thankyou"
          />

          <label htmlFor="name">Name</label>
          <br />
          <br />
          <input required type="text" name="name" />
          <br />
          <br />

          <label htmlFor="email">E-mail</label>
          <br />
          <br />
          <input required type="email" name="email" />
          <br />
          <br />

          <label htmlFor="message">Nachricht</label>
          <br />
          <br />
          <textarea required name="message" cols="30" rows="10"></textarea>
          <br />
          <br />

          <button className="btn-primary" type="submit">
            Senden
          </button>
        </form>
      </div>
    </StyledContact>
  );
  // --------------------------------------------------------------------------
};

// Styled Component -----------------------------------------------------------

const StyledContact = styled.section`
  input,
  textarea {
    color: var(--textColor1);
    background-color: var(--backgroundColor2);
    border: none;
    padding: 1rem;
    width: clamp(250px, 60vw, 600px);
    resize: none;
  }

  label {
    color: var(--textColor1);
  }
`;
// --------------------------------------------------------------------------

export default Contact;
