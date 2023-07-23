import React from "react";

const Home = () => {
  const calculateDate = () => {
    const start = new Date(2000, 1).getFullYear();
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
            I'm {calculateDate()} years old. I can clean code and pixel perfect
            design. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis quia odio quam, modi, placeat aut eos, tempore natus sed
            debitis optio excepturi nostrum minima? A expedita dicta
            voluptatibus odio nobis.
          </div>
        </div>
        <div className="home-picture-wrapper">
          <div className="home-picture"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
