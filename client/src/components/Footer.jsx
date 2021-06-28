import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <div>
        <div className="links">
          <a href="https://github.com/nyusuf01" target="_blank">
            <img
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
              alt="GitHub Logo"
              rel="no referrer"
            />
          </a>
          <a href="https://www.linkedin.com/in/nadiayusuf1/" target="_blank">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfErBUtEh6AU_tmoyi1m3BMevZG3SawQOmlg&usqp=CAU"
              alt="LinkedIn Logo"
              rel="no referrer"
            />
          </a>
        </div>
        <p>
          By: <br /> &copy; Nadia Yusuf - 2021
        </p>
      </div>
    </div>
  );
}

export default Footer;
