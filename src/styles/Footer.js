import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
//common Footer component for all the page

const Footer = () => {
  return (
    <div>
      <footer
        class="bg-dark text-center text-lg-start"
        style={{ marginTop: "10vh" }}
      >
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">About Central Perk</h5>

              <p>Love for friends series made this restaurant.</p>
            </div>

            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Follow us </h5>

              <a
                href="https://www.instagram.com/friends/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon style={{ color: "white", margin: "10px" }} />
              </a>

              <a
                href="https://www.facebook.com/friends.tv/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon style={{ color: "white", margin: "10px" }} />
              </a>
              <a
                href="https://twitter.com/FriendsTV?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon style={{ color: "white", margin: "10px" }} />
              </a>
            </div>
          </div>
        </div>

        <div class="text-center p-3" style={{ backgroundcolor: "green" }}>
          © 2022 central perk, Inc. All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
