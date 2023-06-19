import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 1
                years of experience.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; 9392983241
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                carrental@carmail.com
              </a>
              <a href="https://www.google.com/maps/place/B+V+Raju+Institute+of+Technology/@17.7252584,77.96876,11z/data=!4m10!1m2!2m1!1se+cell+bvrit+map!3m6!1s0x3bcc0af1ba39c677:0xc4ae2d2cf9b35b63!8m2!3d17.7252584!4d78.2571511!15sChBlIGNlbGwgYnZyaXQgbWFwWg4iDGUgY2VsbCBidnJpdJIBEGVkdWNhdGlvbl9jZW50ZXKaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTXRaMlpwT1RKM1JSQULgAQA!16s%2Fm%2F02zbdqn?entry=ttu">
                <i className="fa-solid fa-location-dot"></i>&nbsp; E-CELL,BVRIT,MEDAK - 502110,TELANGANA,INDIA.
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>9392983241</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
