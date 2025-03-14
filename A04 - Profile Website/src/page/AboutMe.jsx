import React from "react";

function AboutMe() {
  return (
    <section className="flex flex-col gap-4 md:flex-row" id="about">
      <div className="mx-auto w-full flex-6/12">
        <img
          src="/images/anime.jpg"
          alt="Theerawat Patthawee"
          className="object-fit mx-auto w-full max-w-sm rounded object-center transition hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="space-x-2">
          <h1 className="text-xl font-semibold">About Me</h1>
          <h2 className="text-3xl font-semibold">
            I'm Computer Science Student
          </h2>
        </div>
        <p>
          I'm a Computer Science student passionate about software development
          and problem-solving. I enjoy working on web and mobile applications,
          especially those that improve user experience and efficiency. Outside
          of coding, I love stargazing and anything related to the night sky. I
          also enjoy spending time with myself most of the time.
        </p>
        <a className="cursor-pointer rounded bg-green-800 px-4 py-2 text-white transition hover:scale-105">
          Read More
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
