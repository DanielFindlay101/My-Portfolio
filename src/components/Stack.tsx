import ReactLogo from "../assets/images/react.png";
import TSLogo from "../assets/images/Typescript.png";
import TWLogo from "../assets/images/tailwind.png";

export default function Stack() {
  return (
    <div className="flex gap-6 items-center mt-4 md:w-1/2 md:mt-20">
      <h1 className="text-white">Tech Stack |</h1>
      <div className="flex gap-6 [&>*]:w-8">
        <img src={ReactLogo} alt="react-logo" className="color-white" />
        <img src={TSLogo} alt="ts-logo" />
        <img src={TWLogo} alt="tailwind-logo" />
      </div>
    </div>
  );
}
