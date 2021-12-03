import React from "react";
import person from "../assets/1.jpg";

const About = () => {
  return (
    <div class="rightpart">
      <div class="rightpart_in">
        <div class="tokyo_tm_section">
          <div class="container">
            <div class="tabcontent">
              <div class="tokyo_tm_about">
                <div class="about_image">
                  <img src={person} alt="about" />
                </div>
                <div class="description">
                  <h3 class="name">Adriano Smith &amp; Photographer</h3>
                  <div class="description_inner">
                    <div class="left">
                      <p>
                        Hello, I am a creative photographer based in New York
                        and happy to travel all over Europe to capture your big
                        day in candid and authentic photos. I will create a
                        lasting memory of the people.
                      </p>
                      <div class="tokyo_tm_button">
                        <button class="ib-button">Read More</button>
                      </div>
                    </div>
                    <div class="right">
                      <ul>
                        <li>
                          <p>
                            <span>Birthday:</span>01.07.1990
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Age:</span>31
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Address:</span>Ave 11, New York, USA
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Email:</span>
                            <a href="mailto:mail@gmail.com">mail@gmail.com</a>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Phone:</span>
                            <a href="tel:+770221770505">+77 022 177 05 05</a>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Study:</span>Univercity of Texas
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Freelance:</span>Available
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
