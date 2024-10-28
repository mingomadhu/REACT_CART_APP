import React from 'react';

const Footer = () => {
    return (
      <>
        <footer id="footer">
          <div className="container">
            <a
              href="https://github.com/mingomadhu"
              className="repo_link"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Madhusudhanancodes/react-shopping-cart
            </a>

            <p>
              Built by | &nbsp;
              <a
                href="https://app.netlify.com/teams/sanjaimadhu8220/sites"
                target="_blank"
                rel="noreferrer"
              >
                Sanjai Madhu
              </a>
            </p>
          </div>
        </footer>
      </>
    );
};

export default Footer;