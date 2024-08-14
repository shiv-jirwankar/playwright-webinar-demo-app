import logo from "../playwright-logo-22FA8B9E63-seeklogo.com.png";

export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header-logo" />
      Playwright Webinar Registration
    </header>
  );
}
