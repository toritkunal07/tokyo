import React from "react";
import pic from "../assets/1.jpg";
import dribble from "../assets/dribbble.svg";
import fb from "../assets/facebook.svg";
import ig from "../assets/instagram.svg";
import tiktok from "../assets/tik-tok.svg";
import twitter from "../assets/twitter.svg";

const Home = () => {
  return (
    <div class="rightpart">
      <div class="rightpart_in">
        <div class="tokyo_tm_section">
          <div class="container">
            <div class="tabcontent">
              <div class="tokyo_tm_home">
                <div class="home_content">
                  <div class="avatar">
                    <div
                      class="image avatar_img"
                      style={{
                        backgroundImage: pic,
                      }}
                    ></div>
                  </div>
                  <div class="details">
                    <h3 class="name">Adriano Smith</h3>
                    <p class="job">
                      Creative Photographer based in New York and happy to
                      travel all over Europe to capture photos.
                    </p>
                    <ul class="social">
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={fb} alt="social" class="svg" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={ig} alt="social" class="svg" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={twitter} alt="social" class="svg" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dribbble.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={dribble} alt="social" class="svg" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.tiktok.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={tiktok} alt="social" class="svg" />
                        </a>
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
  );
};

export default Home;
