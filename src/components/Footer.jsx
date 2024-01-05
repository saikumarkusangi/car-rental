function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rental
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:9392983241">
                  <i className="fa-solid fa-phone"></i> &nbsp; 9392983241
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                saikumarkusangi007@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp;  saikumarkusangi007@gmail.com
                </a>
              </li>

            
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="https://www.google.com/maps/place/B+V+Raju+Institute+of+Technology/@17.7252584,77.96876,11z/data=!4m10!1m2!2m1!1sbvrit+map!3m6!1s0x3bcc0af1ba39c677:0xc4ae2d2cf9b35b63!8m2!3d17.7252584!4d78.2571511!15sCglidnJpdCBtYXBaCyIJYnZyaXQgbWFwkgEQZWR1Y2F0aW9uX2NlbnRlcuABAA!16s%2Fm%2F02zbdqn?entry=ttu">E-CELL,BV RAJU INSTITUTE OF TECHNOLOGY,MEDAK - 502110,TELANGANA,INDIA.</a>
              </li>
             
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
