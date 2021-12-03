import React from "react";
import avatar from "../assets/avatar.svg";
import briefCase from "../assets/briefcase.svg";
import homeRun from "../assets/home-run.svg";
import logo from "../assets/logo.png";
import mail from "../assets/mail.svg";

const Sidebar = () => {
  return (
    <div class="leftpart">
      <div class="leftpart_inner">
        <div class="logo">
          <a href="/" class="router-link-active">
            <img src={logo} alt="" />
          </a>
        </div>
        <div class="menu">
          <a href="/" class="active">
            <img src={homeRun} alt="homerun" class="svg" />
            <span class="menu_content">Home</span>
          </a>
          <a href="/about">
            <img src={avatar} alt="avatar" class="svg" />
            <span class="menu_content">About</span>
          </a>
          <a href="/portfolio">
            <img src={briefCase} alt="briefcase" class="svg" />
            <span class="menu_content">Portfolio</span>
          </a>
          <a href="/contact">
            <img src={mail} alt="mail" class="svg" />
            <span class="menu_content"> Contact</span>
          </a>
        </div>
        {/* <div class="copyright">
          <p>
            © 2021 Tokyo VueJS
            <br />
            Created by
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noreferrer"
            >
              Ib-Themes
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
