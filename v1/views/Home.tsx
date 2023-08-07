import Image from "next/image";
import React from "react";

const Home = () => {
  const calculateDate = (date: number) => {
    const start = new Date(date, 1).getFullYear();
    const end = new Date().getFullYear();

    const diff = end - start;
    const year = Math.floor(diff / 1000);
    return diff;
  };
  return (
    <div className="home-wrapper">
      <div className="home">
        <div className="home-content-wrapper">
          <div className="home-header-wrapper">
            <div className="home-header-first"> Hello, my name is</div>
            <div className="home-header-second"> İsmail Tan</div>
            <div className="home-header-third">
              {"I'm a Full Stack Developer"}
            </div>
          </div>
          <div className="home-content">
            Greetings, I am a {calculateDate(2000)} year old professional with
            nearly {calculateDate(2020)} years of dedicated experience in web
            project development. Throughout my journey, I have been committed to
            crafting applications with utmost precision, adhering to the Atomic
            architecture. My expertise spans a wide array of technologies,
            including HTML, CSS, JavaScript, Typescript, React, Node.js, and
            Express.js.
          </div>
        </div>
        <div className="home-picture-wrapper">
          <div className="home-picture">
            <Image
              src="/image/myPicture.jpg"
              alt="İsmail Tan"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
