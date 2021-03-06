import React from "react";

const Contact = () => {
  return (
    <div className="rightpart">
      <div className="rightpart_in">
        <div className="tokyo_tm_section">
          <div className="container">
            <div className="tabcontent">
              <div className="tokyo_tm_contact">
                <div className="tokyo_tm_title">
                  <div className="title_flex">
                    <div className="left">
                      <span>Contact</span>
                      <h3>Get in Touch</h3>
                    </div>
                  </div>
                </div>
                <div className="map_wrap">
                  <iframe
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206252.721472711!2d-115.31508339643749!3d36.12519578053308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sbd!4v1622253976478!5m2!1sen!2sbd"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    title="gmap_canvas"
                  ></iframe>
                </div>
                <div className="fields">
                  <span>
                    <form className="contact_form">
                      <div className="first">
                        <ul>
                          <span>
                            <li>
                              <input
                                type="text"
                                placeholder="Name"
                                autocomplete="off"
                              />
                              <span className="inpur-error"></span>
                            </li>
                          </span>
                          <span>
                            <li>
                              <input
                                type="text"
                                rules="required|email"
                                placeholder="email"
                              />
                              <span className="inpur-error"></span>
                            </li>
                          </span>
                          <span>
                            <li>
                              <textarea placeholder="Message"></textarea>
                              <span className="inpur-error"></span>
                            </li>
                          </span>
                        </ul>
                      </div>
                      <div className="tokyo_tm_button">
                        <button type="submit" className="ib-button">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
