import "../styles/ContactMe.css";

const ContactMe = () => {
  return (
    <section id="contact" className="container overflow-hidden">
      <div className="row justify-content-center ">
        <div className="form-container">
          <h2 className="contact-text mb-3">Contact Me</h2>
          <form className="contact-form mx-auto" id="form-container">
            <input
              id="user-name"
              className="name-input contact-input"
              type="text"
              placeholder="<Name>"
              required
            ></input>
            <input
              id="user-email"
              className="email-input contact-input"
              type="email"
              placeholder="<Email>"
              required
            ></input>
            <textarea
              id="user-message"
              className="message-input"
              placeholder="<Message>"
              required
            ></textarea>
            <button className="form-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
