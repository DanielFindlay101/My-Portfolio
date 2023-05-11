import Pic from "../assets/images/portfolioPic.jpg";

export default function Hero() {
  return (
    <div className="bg-primary h-screen flex justify-center items-center px-[50px]">
      <div className="flex flex-col gap-5 md:flex-row-reverse lg:gap-10 h-1/2 px-[10px] justify-center items-center">
        <img
          src={Pic}
          width="350px"
          alt="profile-pic"
          className="rounded-full"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-3xl w-full">
            Front-End React Developer
          </h1>
          <p className="text-secondary md:text-lg">
            Hi, I'm Daniel. A junior front-end React developer based in the
            Scottish Highlands.
          </p>
        </div>
      </div>
    </div>
  );
}
