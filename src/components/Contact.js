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
        <form action="">
          <label htmlFor="Name">Name</label>
          <br />
          <br />
          <input required type="text" />
          <br />
          <br />

          <label htmlFor="E-mail">E-mail</label>
          <br />
          <br />
          <input required type="email" />
          <br />
          <br />

          <label htmlFor="Name">Nachricht</label>
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
    width: clamp(300px, 60vw, 600px);
  }

  label {
    color: var(--textColor1);
  }
`;
// --------------------------------------------------------------------------

export default Contact;
