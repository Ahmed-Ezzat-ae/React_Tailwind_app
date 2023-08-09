const Landing = () => {
  return (
    <section className="bg-sectionBG">
      <div className="container">
        <div className="element-center pt-[200px]">
          <div className="w-[750px] max-w-full">
            <img
              src="/src/assets/images/landing-img.png"
              alt="landing-img"
              className="w-full h-fit"
              loading="lazy"
            />
          </div>

          <div className="text-white text-center tracking-wider">
            <h1 className="text-[30px] md:text[40px] font-semibold  mb-[15px]">
              All your files in one secure location, <br /> accessible anywhere
            </h1>
            <p className="text-md max-w-full  md:w-[600px] mx-auto opacity-70">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur minima nemo eum ex, saepe tempora ab rerum! Non
              distinctio suscipit nisi porro similique, fugiat consequuntur
              doloremque impedit animi nihil? Quidem.
            </p>
          </div>

          <a href="/" className="btn w-[200px] h-[50px] rounded-full element-center text-white font-medium my-4">Get Started</a>
        </div>
      </div>

      <div className="w-full h-[200px]">
        <img src="/src/assets/images/bg-curvy-desktop.svg" alt="img" className="w-full h-full"/>
      </div>
    </section>
  );
};

export default Landing;
