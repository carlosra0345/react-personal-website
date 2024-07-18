const SocialIcons = () => {
  return (
    <div className="row social-icon">
      <ul>
        <li>
          <a
            id="mail-logo"
            className="social-background"
            href="mailto:carlosra0345@gmail.com"
            target="_blank"
          >
            <i className="fa fa-regular fa-envelope"></i>
          </a>
        </li>
        <li>
          <a
            id="github-logo"
            className="social-background"
            href="https://github.com/carlosra0345"
            target="_blank"
          >
            <i className="fa fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            id="linkedin-logo"
            className="social-background"
            href="https://www.linkedin.com/in/carlos-acosta02/"
            target="_blank"
          >
            <i className="fa fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
