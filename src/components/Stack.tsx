import HTMLLogo from "../assets/images/html.svg";
import CSSLogo from "../assets/images/css.png";
import JSLogo from "../assets/images/js.png";
import ReactLogo from "../assets/images/react.png";
import TSLogo from "../assets/images/Typescript.png";
import TWLogo from "../assets/images/tailwind.png";

export default function Stack() {
  return (
    <div className="flex gap-6 text-white mt-12 md:mt-4">
      <h1>Tech Stack |</h1>
      <img src={HTMLLogo} alt="html-logo" className="w-6" />
      <img src={CSSLogo} alt="css-logo" className="w-6" />
      <img src={JSLogo} alt="js-logo" className="w-6" />
      <img src={ReactLogo} alt="react-logo" className="w-6" />
      <img src={TSLogo} alt="ts-logo" className="w-6" />
      <img src={TWLogo} alt="tailwind-logo" className="w-6" />
    </div>
  );
}
