import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a target="_blank" href="https://aadi.vercel.app/">
            See More of Our Works
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              target="_blank"
              href={socialImg.url}
              key={socialImg.url}
              className="icon"
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} AadiSoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
